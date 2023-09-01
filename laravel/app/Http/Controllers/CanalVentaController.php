<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\DB;
use App\Models\Menurole;
use App\Models\RoleHierarchy;
use App\Models\Store;
use App\Models\City;
use App\Models\Dictionary;
use App\Models\User;

use App\Models\MovimientoVenta;
use App\Models\ComentarioVenta;
use App\Models\Estado;
// use App\Models\Municipio;
use App\Models\Venta;
use App\Models\Orden;
use App\Models\Movimiento;
use App\Models\Folder;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Mail\CotizacionEmail;
use App\Mail\CapturaVentaEmail;
use App\Mail\CerradoVentaEmail;
use Error;

class CanalVentaController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function Venta()
    {
        // Catálogos
        $estatus           =  Dictionary::where("reference_type", 'VENTA_ESTATUS')->orderBy('sort', 'ASC')->get();
        $tipo_viviendas    =  Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'TIPO_DOMICILIO')->get();
        $areas_ventas      =  Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'AREA_VENTA')->get();
        $consumos_promedio =  Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'CONSUMO_PROMEDIO')->get();
        $estados           =  Estado::select('id as value', 'nombre as label')->where("estatus", 1)->get();
        $user              =  Auth::user();

        return response()->json(compact('estatus', 'tipo_viviendas', 'consumos_promedio', 'estados', 'user', 'areas_ventas'));
    }
    public function buscarVenta(Request $request)
    {
        $estatus      = $request->has('busEstatus')   ? $request->input("busEstatus") : "";
        $busNombre    = $request->has('busNombre')    ? strtoupper(trim($request->input("busNombre"))) : "";
        $busOrden     = $request->has('busOrden')     ? strtoupper(trim($request->input("busOrden"))) : "";
        $busRegistra  = $request->has('busRegistra')  ? strtoupper(trim($request->input("busRegistra"))) : "";
        $busTipoVenta = $request->has('busTipoVenta') ? $request->input("busTipoVenta") : "";
        $user = Auth::user();
        $userRol = $user->rol_id;

        $ventas = Venta::with("Orden")->with("Usuario");
        if ($userRol == 8) {
            $ventas->where("usuario_id", Auth::user()->id);
        }
        if ($userRol == 7) {
            $ventas->whereIn("tipo_venta", Auth::user()->areas_venta_id);
        }
        if ($estatus && $estatus != "") {
            $ventas->whereIn('estatus',   $estatus);
        }
        if ($busNombre && $busNombre != "") {
            $ventas->where(function ($q) use ($busNombre) {
                $q->where(DB::raw('upper(nombre)'), 'like', $busNombre)
                    ->orWhere(DB::raw('upper(apellido1)'), 'like',  $busNombre)
                    ->orWhere(DB::raw('upper(apellido2)'), 'like',  $busNombre);
            });
        }
        if ($busOrden && $busOrden != "") {
            $ventas->whereHas(
                'Orden', function ($query)  use ($busOrden) {
                    $query->where(DB::raw('upper(no_contrato)'), 'like', '%' . $busOrden . '%');
                }
            )->with('Orden');
        }
        if ($busRegistra && $busRegistra != "") {
            $ventas->whereHas(
                'Usuario', function ($query)  use ($busRegistra) {
                    $query->where(DB::raw('upper(name)'), 'like', '%' . $busRegistra . '%')
                        ->orWhere(DB::raw('upper(primer_apellido)'), 'like',  '%' . $busRegistra . '%')
                        ->orWhere(DB::raw('upper(segundo_apellido)'), 'like',  '%' . $busRegistra . '%');
                }
            )->with('Usuario');
        }
        if ($busTipoVenta != "") {
            $ventas->where("tipo_venta", $busTipoVenta);
        }
        $ventas =  $ventas->with("estatus")->with("estado")->with("municipio")->with("tipoventa")->get();
        if ($userRol != 5) {
            $ventas->makeHidden(["total_descuento", "porcentaje"]);
        }
        return response()->json(compact('ventas'));
    }
    public function addVenta(Request $request)
    {
        $errorMail =  (object) ['status' => false, 'message' =>'Ocurrió un error al enviar el correo.'];
        try {
            $nombre = $request->input("nombre");
            $apellido1 = $request->input("apellido1");
            $apellido2 = $request->input("apellido2");
            $telefono = $request->input("telefono");
            $correo = $request->input("correo");
            $tipo_vivienda = $request->input("tipo_vivienda");
            $consumo_promedio = $request->input("consumo_promedio");
            $estado = $request->input("estado");
            $municipio = $request->input("municipio");
            $cp = $request->input("cp");
            $colonia = $request->input("colonia");
            $calle = $request->input("calle");
            $numero_ext = $request->input("numero_ext");
            $numero_int = $request->input("numero_int");

            $venta = new Venta();
            $venta->folio = '00';
            $venta->usuario_id = Auth::user()->id;
            $venta->tipo_venta = Auth::user()->tipo_venta_id;

            $venta->nombre = $nombre;
            $venta->apellido1 = $apellido1;
            $venta->apellido2 = $apellido2;
            $venta->telefono = $telefono;
            $venta->correo = $correo;
            $venta->tipo_vivienda = $tipo_vivienda;
            $venta->consumo_promedio = $consumo_promedio;
            $venta->estado = $estado;
            $venta->ciudad = $municipio;
            $venta->municipio = $municipio;
            $venta->cp = $cp;
            $venta->colonia = $colonia;
            $venta->calle = $calle;
            $venta->numero_ext = $numero_ext;
            $venta->numero_int = $numero_int;
            $venta->save();
            $movimiento = new MovimientoVenta();
            $movimiento->usuario_id = Auth::user()->id;
            $movimiento->venta_id = $venta->id;
            $movimiento->venta_estatus = 1;
            $movimiento->texto = "Se capturo la referencia de cliente";
            $movimiento->save();
            try {
                Mail::to($venta->correo)->send(new CapturaVentaEmail($venta));
            } catch (\Throwable $th) {
                $errorMail->status = true;
            }
            return response()->json(compact('venta', 'errorMail'));
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Ocurrió un error inesperado'], 500);
        }
    }
    public function getVenta($id)
    {
        $movimientos = MovimientoVenta::where("estatus", 1)->where("venta_id", $id)->with('Usuario')->get();
        $comentarios = ComentarioVenta::where("estatus", 1)->where("venta_id", $id)->with('Usuario')->get();
        $venta = Venta::where("id", $id)->with("Estatus")->with('TipoVivienda')->with('ConsumoPromedio')->with('TipoVenta')->with('Estado')->with('Municipio')->first();
        $folder = Folder::where("name", "cotizaciones")->first();
        $user = Auth::user();
        return response()->json(compact('movimientos', 'venta', 'comentarios', 'user', 'folder'));
    }

    public function addComentario(Request $request)
    {
        $request->validate([
            'comentario' => 'required|min:1|max:50',
            'venta' => 'required|min:1|max:50',
        ]);
        $comentario = new ComentarioVenta();
        $comentario->texto = $request->input("comentario");
        $comentario->usuario_id = Auth::user()->id;
        $comentario->venta_id = $request->input("venta");
        $comentario->venta_estatus =  $request->input("estatus");
        $comentario->save();

        $comentario = ComentarioVenta::where("estatus", 1)->where("id", $comentario->id)->with('Usuario')->first();

        return response()->json($comentario);
    }

    public function CotizarVenta(Request $request)
    {
        $request->validate([
            'id_venta'   => 'required',
            'monto'   => 'required',
            'file'    => "required|max:25600",
        ]);
        $errorMail =  (object) ['status' => false, 'message' =>'Ocurrió un error al enviar el correo.'];
        try {
            $monto = $request->input("monto");
            $id_venta = $request->input("id_venta");
            $sendMail = null;
            $venta = Venta::where('id', '=', $id_venta)->with('usuario')->first();
            $porcentaje = $venta->usuario->comision_porcentaje;

            $total = ($monto * ($porcentaje / 100));
            $total_descuento = ($monto * ($porcentaje / 100));

            $venta->monto = $monto;
            $venta->porcentaje = $porcentaje;
            $venta->total = $total;
            $venta->estatus = 2;
            $venta->total_descuento = $total_descuento;
            $venta->save();


            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $path = $file->path();
                $oryginalName = $file->getClientOriginalName();
                $ext = $file->getClientOriginalExtension();
                if (!empty($venta)) {
                    $dilwid= $venta->addMedia($path, '')->usingFileName('cotizacion-'.date('YmdHis'). $venta->folio. '.'.$ext )->usingName($oryginalName)->toMediaCollection('cotizaciones', 'local');
                    // error_log($dilwid);
                }
            }
            $movimiento = new MovimientoVenta();
            $movimiento->usuario_id = Auth::user()->id;
            $movimiento->venta_id = $venta->id;
            $movimiento->venta_estatus = 2;
            $movimiento->texto = "Se realizó cotización";
            $movimiento->save();
             try {
                Mail::to($venta->correo)->send(new CotizacionEmail($venta));
            } catch (\Throwable $th) {
                $errorMail->status = true;
            }

            $movimiento = new MovimientoVenta();
            $movimiento->usuario_id = Auth::user()->id;
            $movimiento->venta_id = $id_venta;
            $movimiento->venta_estatus = 2;
            $movimiento->texto = "Se envió via correo la cotización realizada al enlace de ventas (" . $venta->correo . ")";
            $movimiento->save();
            $venta = Venta::where("id", $id_venta)->with("Estatus")->with('TipoVivienda')->with('ConsumoPromedio')->with('TipoVenta')->with('Estado')->with('Municipio')->first();
            return response()->json(compact('ventas', 'sendMail'));
        } catch (\Throwable $th) {
            // print_r($th);
            return response()->json(['error' => $th], 500);
        }
    }
    public function CerrarVenta(Request $request)
    {
        try {
            $request->validate([
                'id_venta'   => 'required',
            ]);
            $id_venta = $request->input("id_venta");

            $venta = Venta::where('id', '=', $id_venta)->first();
            $venta->estatus = 3;
            $venta->save();
            error_log($venta->correo);
            Mail::to($venta->correo)->send(new CerradoVentaEmail($venta));

            $movimiento = new MovimientoVenta();
            $movimiento->usuario_id = Auth::user()->id;
            $movimiento->venta_id = $venta->id;
            $movimiento->venta_estatus = 3;
            $movimiento->texto = "Se cerro la cotización";
            $movimiento->save();
            $venta = Venta::where("id", $id_venta)->with("Estatus")->with('TipoVivienda')->with('ConsumoPromedio')->with('TipoVenta')->with('Estado')->with('Municipio')->first();
            return response()->json($venta);
        } catch (\Throwable $th) {
            return $th;
        }
    }
    public function File(Request $request){
        $validatedData = $request->validate([
            'id'            => 'required|numeric',
        ]);
        $venta = Venta::where('id', '=', $request->input('id'))->first();
        $media = $venta->getMedia('cotizaciones')->where('id',$venta->file_cotizacion)->first();
        return response()->download($media->getPath(), $media->file_name);
    }
}
