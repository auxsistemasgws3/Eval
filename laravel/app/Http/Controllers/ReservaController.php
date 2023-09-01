<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\DB;
use App\Models\EventoReserva;
use Illuminate\Support\Facades\Auth;
use DateTime;

class ReservaController extends Controller
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
    public function index() //Obtener de base de datos request, sucursales y estatus
    {
       $eventos = EventoReserva::select('id', 'titulo as title', 'fecha_inicio as start', 'fecha_fin as end',  'color as backgroundColor')->where("active", 1)->get();
       $user = Auth::user();
       return response()->json(compact('eventos','user'));
    }
    public function eliminarC() //Obtener de base de datos request, sucursales y estatus
    {
       $date = new DateTime();
       $eventosE = EventoReserva::select('id', 'titulo', 'fecha_inicio', 'fecha_fin')->where('fecha_inicio','>=',$date)->where("active", 1) ->orderBy('fecha_inicio', 'ASC')->get();
       return response()->json(compact('eventosE'));
    }
    public function eliminarE($fecha) //Obtener de base de datos request, sucursales y estatus
    {
        $date = new DateTime($fecha);
        $dateini = $date->format('d')."-".$date->format('m')."-".$date->format('Y')." 00:00:00";
        $date1=date("Y-m-d H:i:s",strtotime($dateini));
        $dateini = $date->format('d')."-".$date->format('m')."-".$date->format('Y')." 23:59:59";
        $date2=date("Y-m-d H:i:s",strtotime($dateini));

       $eventosE = EventoReserva::select('id', 'titulo', 'fecha_inicio', 'fecha_fin')->where('fecha_inicio','>=',$date1)->where('fecha_inicio','<=',$date2)->where("active", 1) ->orderBy('fecha_inicio', 'ASC')->get();

       return response()->json(compact('eventosE'));
    }
    public function eliminarR(Request $request)
    {
       $id = $request->input("id");
       $eventos = EventoReserva::where("id", $id)->first();
       $eventos->active = 0;
       $eventos->save();
       return response()->json(compact('eventos'));
    }
    public function calcularDias(Request $request)
    {
        $request->validate([                            //Validamos que se nos hayan enviado todos los parametros necesarios para la creacion 
            'fecha_inicio' => 'required|min:1|max:50',  //del nuestro evento
            'dias_totales' => 'required|min:1|max:50',
        ]);
        $fecha_inicio = explode("/", $request->input("fecha_inicio")); //Dividimos fecha para poder dar formato valido para SQL
        $fecha_inicio = $fecha_inicio[2]."-".$fecha_inicio[1]."-".$fecha_inicio[0]; //Damos valor a la variable

        $fecha_final = date('Y-m-d',strtotime(($fecha_inicio. '+'. ($request->input("dias_totales")-1).'day')));

        $diasEventos = array();

        for($i = 0; $i <= ($request->input("dias_totales")-1); $i++){
            $dias = date('Y-m-d',strtotime(($fecha_inicio)));
            array_push($diasEventos, $dias);
            /* error_log($diasEventos[$i]); */
        }

        $rangoEvento = 'De: '.$diasEventos[0].' A: '.$diasEventos[((sizeof($diasEventos))-1)];

        /* error_log($rangoEvento); */

        return response()->json(compact('diasEventos', 'rangoEvento',));
    }
    public function verificarDias(Request $request)
    {

        $request->validate([                            //Validamos que se nos hayan enviado todos los parametros necesarios para la creacion 
            /* 'fecha_inicio' => 'required|min:1|max:50', */  //del nuestro evento
            /* 'hora_inicio' => 'required|min:1|max:50', */
            'diasEvento' => 'required|min:1|max:50',
            'dias_totales' => 'required|min:1|max:50',
            /* 'sucursal' => 'required|min:1|max:50', */
        ]);

        $fechas_inicio = $request->input("diasEvento");
        $horas_inicio = $request->input("horasinicio");
        $horas_fin =  $request->input("horasfin");
        $sala = $request->input("sala");
        $merge = array();
        $mensaje = "";
        $sumaConflictos = 0;

            for($i = 0; $i < $request->input("dias_totales"); $i++ ){

                $fechas_inicio_hora =  $fechas_inicio[$i].' '.$horas_inicio[$i].':00';
                $fechas_fin_hora =  $fechas_inicio[$i].' '.$horas_fin[$i].':00';
 
                 $eventos_contador = EventoReserva::where(function($query) use ($fechas_inicio_hora,$sala){
                                    $query->where('fecha_inicio', '<=', $fechas_inicio_hora)
                                          ->where('fecha_fin', '>', $fechas_inicio_hora)
                                          ->where('active', 1)
                                          ->where('sala',$sala);
                                                                            })
                            ->orWhere(function($query) use ($fechas_fin_hora,$sala){
                                    $query->where('fecha_inicio', '<', $fechas_fin_hora)
                                          ->where('fecha_fin', '>=', $fechas_fin_hora)
                                          ->where('active', 1)
                                          ->where('sala',$sala);
                                                                            })
                            ->orWhere(function($query) use ($fechas_inicio_hora,$fechas_fin_hora,$sala){
                                     $query->where('fecha_inicio', '>=', $fechas_inicio_hora)
                                           ->where('fecha_fin', '<=', $fechas_fin_hora)
                                           ->where('active', 1)
                                           ->where('sala',$sala);
                                                                             })
                                                     ->count();
                 $sumaConflictos = $sumaConflictos + $eventos_contador; 
            }

            if( $sumaConflictos == 0){
                $mensaje = "Sala reservada";
                for($i = 0; $i < $request->input("dias_totales"); $i++ ){
                $evento = new EventoReserva(); 
        
                $fechas_inicio_hora =  $fechas_inicio[$i].' '.$horas_inicio[$i].':00';
                $fechas_fin_hora =  $fechas_inicio[$i].' '.$horas_fin[$i].':00';

                $evento->titulo = "Sala ".$sala.": ".Auth::user()->name." ".Auth::user()->primer_apellido;
                $evento->fecha_inicio = $fechas_inicio_hora;
                $evento->fecha_fin = $fechas_fin_hora;
                if($sala == 1){
                $evento->color = "#58ae0c";
                }
                if($sala == 2){
                    $evento->color = "#0062c5";
                }
                $evento->sala = $sala;
                $evento->active = 1;
                $evento->usuario_alta = Auth::user()->id;
                if(strtotime($horas_fin[$i].':00') < strtotime("20:00:00") ){
                    $evento->save();     
               }else{
                  $mensaje = "Reserva fuera del horario laboral";  
                  $sumaConflictos = 1;
               }             
                }
            }else{
                $mensaje = "La sala esta ocupada en esa fecha";

                $eventos = EventoReserva::where(function($query) use ($fechas_inicio_hora,$sala){
                    $query->where('fecha_inicio', '<=', $fechas_inicio_hora)
                          ->where('fecha_fin', '>', $fechas_inicio_hora)
                          ->where('active', 1)
                          ->where('sala',$sala);
                                                            })
            ->orWhere(function($query) use ($fechas_fin_hora,$sala){
                    $query->where('fecha_inicio', '<', $fechas_fin_hora)
                          ->where('fecha_fin', '>=', $fechas_fin_hora)
                          ->where('active', 1)
                          ->where('sala',$sala);
                                                            })
            ->orWhere(function($query) use ($fechas_inicio_hora,$fechas_fin_hora,$sala){
                     $query->where('fecha_inicio', '>=', $fechas_inicio_hora)
                           ->where('fecha_fin', '<=', $fechas_fin_hora)
                           ->where('active', 1)
                           ->where('sala',$sala);
                                                             })
                              ->orderBy('fecha_inicio', 'ASC')
                              ->get();

    for($w=0;$w<count($eventos);$w++){
        array_push($merge, $eventos[$w]);   
    }  
            }
        
       return response()->json(compact('merge', 'mensaje', 'sumaConflictos',));
    }
 
}
