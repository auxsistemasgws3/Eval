<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\EmailTemplate;
use App\Mail\CotizacionEmail;
use App\Mail\CapturaVentaEmail;
use App\Models\Venta;
use App\Models\MovimientoVenta;

class MailController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function Cotizacion($id)
    {
        try {
            $venta = Venta::where("id", $id)->with('usuario')->first();

            Mail::to($venta->correo)->send(new CotizacionEmail($venta));
            // Mail::to("alangtzl@outlook.com")->send(new CapturaVentaEmail($venta));

            // $movimiento = new MovimientoVenta();
            // $movimiento->usuario_id = Auth::user()->id;
            // $movimiento->venta_id = $id;
            // $movimiento->venta_estatus = 3;
            // $movimiento->texto = "Se envió via correo la cotización realizada";
            // $movimiento->save();

            return response()->json(['resp' => true, 'venta' => $venta]);
        } catch (\Exception  $ex) {
            return $ex;
        }
    }
}
