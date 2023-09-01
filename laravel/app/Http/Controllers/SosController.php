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
use App\Models\UserAreaventa;
use App\Models\Roles;
use App\Models\Evaluaciones;
use App\Models\EvaluacionesDepartamento;
use App\Models\EvaluacionesRelaciones;
use App\Models\Sos;
use App\Models\Users;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class SosController extends Controller
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
    
    public function getUser()
    {   
        $user = Auth::user();
        $id_departamento = $user->id_departamento;
        $lider = $user->lider;
        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();
        $año = date("Y"); //Obtenemos año actual
        $Anterior = strtotime('-1 month', strtotime(date('Y-m')));
        $mesAnterior = substr(date('m', $Anterior), 1);

        $mes_anterior = date('m', strtotime('-1 month'));
        intval($mes_anterior);

        $periodo1 = $meses[$mes_anterior-1]->text . " - " . $año;

        $Fechahoy = date("Y-m-d");
        
        return response()->json(compact('user'));
    }
    // <!-- -------------------------------get-------------------------------------------------- -->
    public function getFelicitacion()
    {
        $Fechahoy = date("Y-m-d");

        $categoria = 'Felicitación';

        return response()->json(compact('Fechahoy', 'categoria'));
    }
    public function getSugerencia()
    {
        $Fechahoy = date("Y-m-d");

        $categoria = 'Sugerencia';

        return response()->json(compact('Fechahoy', 'categoria'));
    }
    public function getQueja()
    {
        $Fechahoy = date("Y-m-d");

        $categoria = 'Queja';

        return response()->json(compact('Fechahoy', 'categoria'));
    }
    // <!-- -------------------------------add-------------------------------------------------- -->
    public function addFelicitacion(Request $request)
    {
        $user = Auth::user();

        $Fechahoy = date("Y-m-d");

        $categoria = 'Felicitación';

            $reporte_sos = new Sos();


            $reporte_sos->id_reporte = 1;
            $reporte_sos->id_realizo_reporte = $user->id;
            $reporte_sos->nombre_realizo_reporte = $user->name;
            $reporte_sos->primer_apellido_realizo_reporte = $user->primer_apellido;
            $reporte_sos->segundo_apellido_realizo_reporte = $user->segundo_apellido;
            $reporte_sos->fecha_realizada = $Fechahoy;
            $reporte_sos->puesto_evaluador = $user->puesto;
            $reporte_sos->id_sucursal = $user->sucursal_id;
            $reporte_sos->comentarios = $request->input("comentarios");
            $reporte_sos->comentarios2 = $request->input("comentarios2");
            
            $reporte_sos->save();

        $takeId = Sos::select('id')->where('id_realizo_reporte', $user->id)->orderBy('created_at', 'DESC')->first();
        $id = $takeId->id;

            $messageData=array();

            Mail::send('mails/correosos', compact('id'),function ($mail) {
                $mail->from('energiasolar@grupowattsolar.com');
                //$mail->to($correofrom);
                $mail->subject("SOS - SISTEMA OPERATIVO DE SUGERENCIAS");
                $mail->to('rh@grupowattsolar.com', 'gerencia@grupowattsolar.com');
            });
            
            return response()->json($reporte_sos);
    }
    public function addSugerencia(Request $request)
    {
        
        $user = Auth::user();

        $Fechahoy = date("Y-m-d");

        $categoria = 'Sugerencia';

        $count = Sos:: where('id_realizo_reporte', $user->id)->orderBy('created_at', 'ASC')->count();

            $reporte_sos = new Sos();
        
            $reporte_sos->id_reporte = 2;
            $reporte_sos->id_realizo_reporte = $user->id;
            $reporte_sos->nombre_realizo_reporte = $user->name;
            $reporte_sos->primer_apellido_realizo_reporte = $user->primer_apellido;
            $reporte_sos->segundo_apellido_realizo_reporte = $user->segundo_apellido;
            $reporte_sos->fecha_realizada = $Fechahoy;
            $reporte_sos->puesto_evaluador = $user->puesto;
            $reporte_sos->id_sucursal = $user->sucursal_id;
            $reporte_sos->comentarios = $request->input("comentarios");
            $reporte_sos->comentarios2 = $request->input("comentarios2");
            $reporte_sos->comentarios3 = $request->input("comentarios3");
            
            $reporte_sos->save();

            $takeId = Sos::select('id')->where('id_realizo_reporte', $user->id)->orderBy('created_at', 'DESC')->first();
        $id = $takeId->id;

            $messageData=array();

            Mail::send('mails/correosos', compact('id'),function ($mail) {
                $mail->from('energiasolar@grupowattsolar.com');
                //$mail->to($correofrom);
                $mail->subject("SOS - SISTEMA OPERATIVO DE SUGERENCIAS");
                $mail->to('rh@grupowattsolar.com', 'gerencia@grupowattsolar.com');
            });

            return response()->json($reporte_sos);
        }
    public function addQueja(Request $request)
    {
        $user = Auth::user();

        $Fechahoy = date("Y-m-d");

        $categoria = 'Felicitación';

        $count = Sos:: where('id_realizo_reporte', $user->id)->orderBy('created_at', 'ASC')->count();

            $reporte_sos = new Sos();


            $reporte_sos->id_reporte = 3;
            $reporte_sos->id_realizo_reporte = $user->id;
            $reporte_sos->nombre_realizo_reporte = $user->name;
            $reporte_sos->primer_apellido_realizo_reporte = $user->primer_apellido;
            $reporte_sos->segundo_apellido_realizo_reporte = $user->segundo_apellido;
            $reporte_sos->puesto_evaluador = $user->puesto;
            $reporte_sos->id_sucursal = $user->sucursal_id;
            $reporte_sos->comentarios = $request->input("comentarios");
            $reporte_sos->comentarios2 = $request->input("comentarios2");
            $reporte_sos->comentarios3 = $request->input("comentarios3");
            
            $reporte_sos->save();

            $takeId = Sos::select('id')->where('id_realizo_reporte', $user->id)->orderBy('created_at', 'DESC')->first();
        $id = $takeId->id;

            $messageData=array();

            Mail::send('mails/correosos', compact('id'),function ($mail) {
                $mail->from('energiasolar@grupowattsolar.com');
                //$mail->to($correofrom);
                $mail->subject("SOS - SISTEMA OPERATIVO DE SUGERENCIAS");
                $mail->to('rh@grupowattsolar.com', 'gerencia@grupowattsolar.com');
            });

            return response()->json($reporte_sos);
    }
    // <!-- -------------------------------Reportes S.O.S.-------------------------------------------------- -->
    public function reportes()
    {
        $reportesFelicitacion = Sos::where('id_reporte', 1)->with("sucursal")->orderBy('id', 'desc')->get();
        $reportesSugerencias = Sos::where('id_reporte', 2)->with("sucursal")->orderBy('id', 'desc')->get();
        $reportesQuejas = Sos::where('id_reporte', 3)->with("sucursal")->orderBy('id', 'desc')->get();
        $sucursal = Store::select('id  as value', 'name as label')->where("active", 1)->orderBy('name', 'ASC')->get();

        return response()->json(compact('reportesFelicitacion', 'reportesSugerencias', 'reportesQuejas', 'sucursal'));
    }
    // <!-- -------------------------------Get Resultados-------------------------------------------------- -->
    public function getReporteFelicitacion($id)
    {
        $reporte_sos = Sos::select('fecha_realizada', 'puesto_evaluador', 'comentarios', 'comentarios2', 'nombre_realizo_reporte', 'primer_apellido_realizo_reporte', 'segundo_apellido_realizo_reporte')
                            ->where('id', $id)->where('id_reporte', 1)->first();

        $fecha_realizada = $reporte_sos->fecha_realizada;
        $puesto_evaluador = $reporte_sos->puesto_evaluador;
        $comentarios = $reporte_sos->comentarios;
        $comentarios2 = $reporte_sos->comentarios2;
        $nombre_realizo_reporte = $reporte_sos->nombre_realizo_reporte;
        $primer_apellido_realizo_reporte = $reporte_sos->primer_apellido_realizo_reporte;
        $segundo_apellido_realizo_reporte = $reporte_sos->segundo_apellido_realizo_reporte;
        $categoria = 'Felicitacion';

        return response()->json(compact('reporte_sos', 'fecha_realizada', 'puesto_evaluador', 'comentarios', 'comentarios2', 'categoria',
                                        'nombre_realizo_reporte', 'primer_apellido_realizo_reporte', 'segundo_apellido_realizo_reporte'));
    }
    public function getReporteSugerencia($id)
    {
        $reporte_sos = Sos::select('fecha_realizada', 'puesto_evaluador', 'comentarios', 'comentarios2', 'comentarios3', 'nombre_realizo_reporte', 'primer_apellido_realizo_reporte', 'segundo_apellido_realizo_reporte')
                            ->where('id', $id)->where('id_reporte', 2)->first();
        
        $fecha_realizada = $reporte_sos->fecha_realizada;
        $puesto_evaluador = $reporte_sos->puesto_evaluador;
        $comentarios = $reporte_sos->comentarios;
        $comentarios2 = $reporte_sos->comentarios2;
        $comentarios3 = $reporte_sos->comentarios3;
        $nombre_realizo_reporte = $reporte_sos->nombre_realizo_reporte;
        $primer_apellido_realizo_reporte = $reporte_sos->primer_apellido_realizo_reporte;
        $segundo_apellido_realizo_reporte = $reporte_sos->segundo_apellido_realizo_reporte;
        $categoria = 'Sugerencia';

        return response()->json(compact('reporte_sos', 'fecha_realizada', 'puesto_evaluador', 'comentarios', 'comentarios2', 'comentarios3', 'categoria',
                                        'nombre_realizo_reporte', 'primer_apellido_realizo_reporte', 'segundo_apellido_realizo_reporte'));
    }
    public function getReporteQueja($id)
    {
        $reporte_sos = Sos::select('fecha_realizada', 'puesto_evaluador', 'comentarios', 'comentarios2', 'comentarios3', 'nombre_realizo_reporte', 'primer_apellido_realizo_reporte', 'segundo_apellido_realizo_reporte')
                            ->where('id', $id)->where('id_reporte', 3)->first();

        $fecha_realizada = $reporte_sos->fecha_realizada;
        $puesto_evaluador = $reporte_sos->puesto_evaluador;
        $comentarios = $reporte_sos->comentarios;
        $comentarios2 = $reporte_sos->comentarios2;
        $comentarios3 = $reporte_sos->comentarios3;
        $nombre_realizo_reporte = $reporte_sos->nombre_realizo_reporte;
        $primer_apellido_realizo_reporte = $reporte_sos->primer_apellido_realizo_reporte;
        $segundo_apellido_realizo_reporte = $reporte_sos->segundo_apellido_realizo_reporte;
        $categoria = 'Queja';

        return response()->json(compact('reporte_sos', 'fecha_realizada', 'puesto_evaluador', 'comentarios', 'comentarios2', 'comentarios3','categoria',
                                        'nombre_realizo_reporte', 'primer_apellido_realizo_reporte', 'segundo_apellido_realizo_reporte'));
    }
}