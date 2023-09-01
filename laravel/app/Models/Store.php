<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Orden;
use DateTime;

class Store extends Model
{
    use HasFactory;
    protected $table = 'stores';
    // protected $appends = ['total_paneles', 'total_dias_instalacion', 'total_dias_finalizar' ,'total_dias_cfe'];

    public function City()
    {
        return $this->belongsTo('App\Models\City', 'city_id');
    }
    public function Usuario()
    {
        return $this->belongsTo('App\Models\User', 'usuario_id');
    }
    public function Ciudad()
    {
        return $this->belongsTo('App\Models\City', 'city_id');
    }
    public function ordenes()
    {
        return $this->hasMany('App\Models\Orden', 'sucursal_id');
    }
    public function paneles()
    {
        return $this->hasMany('App\Models\Orden', 'sucursal_id');
    }
    public function getTotalProyectosCreadosMesActual(int $storeId) //Numero de proyectos mes actual
    {
        $date_prueba = strtotime(date('Y-m'));
        $date = strtotime('-1 month', strtotime(date('Y-m'))); //Trae la fecha actual la convierte en unix y le resta un mes
        $month = date('m', $date_prueba); // Agarra fechas de mes actual
        $year = date('Y', $date_prueba);  
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->whereMonth('created_at', '=', $month);
                $query->whereYear('created_at', '=', $year);
                $query->where('estatus', '!=', '0');
            }
        ])->where('id', $storeId)->first();
    
        return $result->ordenes->count();
    }
    public function getTotalProyectosCreadosMesAnterior(int $storeId) //Numero de proyectos mes actual
    {
        $date_prueba = strtotime(date('Y-m'));
        $date = strtotime('-1 month', strtotime(date('Y-m'))); //Trae la fecha actual la convierte en unix y le resta un mes
        $month = date('m', $date); // Agarra fechas de mes anterior
        $year = date('Y', $date);  
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->whereMonth('created_at', '=', $month);
                $query->whereYear('created_at', '=', $year);
                $query->where('estatus', '!=', '0');
            }
        ])->where('id', $storeId)->first();
    
        return $result->ordenes->count();
    }
    public function getTotalProyectosFinalizadosMesActual(int $storeId) //Numero de paneles instalados mes anteriro (se toman encuenta desde instalado en delante)
    {
        $date_prueba = strtotime(date('Y-m')); //Fecha actual
        $date = strtotime('-1 month', strtotime(date('Y-m'))); //Trae la fecha actual la convierte en unix y le resta un mes
        $month = date('m', $date_prueba); //Aqui agarra fechas del men anterior
        $year = date('Y', $date_prueba); 
        
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->where('ordenes.estatus', '!=', '0');
                $query->where('ordenes.estatus', '>=', '8');
                $query->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                    ->whereMonth('movimientos.created_at', '=', $month)
                    ->whereYear('movimientos.created_at', '=', $year)
                    ->where('movimientos.or_estatus', '=', '8',);
            }
        ])->where('id', $storeId)->first();

        /* error_log($result->ordenes); */

        return $result->ordenes->count();
    }
    public function getTotalProyectosFinalizadosMesAnterior(int $storeId) //Numero de paneles instalados mes anteriro (se toman encuenta desde instalado en delante)
    {
        $date_prueba = strtotime(date('Y-m')); //Fecha actual
        $date = strtotime('-1 month', strtotime(date('Y-m'))); //Trae la fecha actual la convierte en unix y le resta un mes
        $month = date('m', $date); //Aqui agarra fechas del men anterior
        $year = date('Y', $date); 
        
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->where('ordenes.estatus', '!=', '0');
                $query->where('ordenes.estatus', '>=', '8');
                $query->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                    ->whereMonth('movimientos.created_at', '=', $month)
                    ->whereYear('movimientos.created_at', '=', $year)
                    ->where('movimientos.or_estatus', '=', '8',);
            }
        ])->where('id', $storeId)->first();

        /* error_log($result->ordenes); */

        return $result->ordenes->count();
    }
    public function getTotalProyectosInstaladosMesActual(int $storeId) //Numero de proyectos instalados mes actual (se toman encuenta desde instalado en delante)
    {
        $date_prueba = strtotime(date('Y-m')); //Fecha actual
        $date = strtotime('-1 month', strtotime(date('Y-m'))); //Trae la fecha actual la convierte en unix y le resta un mes
        $month = date('m', $date_prueba); //Aqui agarra fechas del mes anterior
        $year = date('Y', $date_prueba); 
        
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->where('ordenes.estatus', '!=', '0');
                $query->where('ordenes.estatus', '>=', '4');
                $query->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                    ->whereMonth('movimientos.created_at', '=', $month)
                    ->whereYear('movimientos.created_at', '=', $year)
                    ->where('movimientos.or_estatus', '=', '5',);
            }
        ])->where('id', $storeId)->first();

        return $result->ordenes->count();
    }
    public function getTotalProyectosInstaladosMesAnterior(int $storeId) //Numero de proyectos instalados mes anterior (se toman encuenta desde instalado en delante)
    {
        $date_prueba = strtotime(date('Y-m')); //Fecha actual
        $date = strtotime('-1 month', strtotime(date('Y-m'))); //Trae la fecha actual la convierte en unix y le resta un mes
        $month = date('m', $date); //Aqui agarra fechas del mes anterior
        $year = date('Y', $date); 
        
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->where('ordenes.estatus', '!=', '0');
                $query->where('ordenes.estatus', '>=', '4');
                $query->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                    ->whereMonth('movimientos.created_at', '=', $month)
                    ->whereYear('movimientos.created_at', '=', $year)
                    ->where('movimientos.or_estatus', '=', '5',);
            }
        ])->where('id', $storeId)->first();

        return $result->ordenes->count();
    }
    public function getTotalPanelesInstaladosMesActual(int $storeId) //Numero de paneles instalados mes anteriro (se toman encuenta desde instalado en delante)
    {
        $date_prueba = strtotime(date('Y-m')); //Fecha actual
        $date = strtotime('-1 month', strtotime(date('Y-m'))); //Trae la fecha actual la convierte en unix y le resta un mes
        $month = date('m', $date_prueba); //Aqui agarra fechas del men anterior
        $year = date('Y', $date_prueba); 
        
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->where('ordenes.estatus', '!=', '0');
                $query->where('ordenes.estatus', '>=', '4');
                $query->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                    ->whereMonth('movimientos.created_at', '=', $month)
                    ->whereYear('movimientos.created_at', '=', $year)
                    ->where('movimientos.or_estatus', '=', '5',);
            }
        ])->where('id', $storeId)->first();

        return $result->ordenes->sum('no_paneles');
    }
    public function getTotalPanelesInstaladosMesAnterior(int $storeId) //Numero de paneles instalados mes anteriro (se toman encuenta desde instalado en delante)
    {
        $date_prueba = strtotime(date('Y-m')); //Fecha actual
        $date = strtotime('-1 month', strtotime(date('Y-m'))); //Trae la fecha actual la convierte en unix y le resta un mes
        $month = date('m', $date); //Aqui agarra fechas del men anterior
        $year = date('Y', $date); 
        
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->where('ordenes.estatus', '!=', '0');
                $query->where('ordenes.estatus', '>=', '4');
                $query->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                    ->whereMonth('movimientos.created_at', '=', $month)
                    ->whereYear('movimientos.created_at', '=', $year)
                    ->where('movimientos.or_estatus', '=', '5',);
            }
        ])->where('id', $storeId)->first();

        return $result->ordenes->sum('no_paneles');
    }

    //-------------------------------------------------------------------------------Tiempos de sucursal--------------------------------------------------------------------------------

    public function getAprobadoFinalizado(int $storeId) 
    {
        $date = strtotime('-3 month', strtotime(date('Y-m'))); //Fecha unix fecha actual menos 2 meses
        $month = date('m', $date); //obtenemos solo mes de $date
        $year = date('Y', $date); //obtenemos solo año de $date

        $desde = $year . '-' . $month . '-' . '01'; //contactenamos variables para obtener una fecha valida para comparacion

        $date2 = strtotime(date('Y-m'));
        $month = date('m', $date2); //obtenemos solo mes de $date2
        $year = date('Y', $date2); //obtenemos solo año de $date2

        $hasta = $year . '-' . $month . '-' . '01';

        $ConsultaAprobado = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos3', 'movimientos.or_estatus AS Estatus_Movimientos3')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('movimientos.or_estatus', '=', '3',)
                                             ->where('sucursal_id', $storeId)
                                             ->get(); //Mejor solución

        $ConsultaFinalizado = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos8', 'movimientos.or_estatus AS Estatus_Movimientos8')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('movimientos.or_estatus', '=', '8',)
                                             ->where('sucursal_id', $storeId)
                                             ->get();

        $Dif_Creacion_Aprobado = $ConsultaAprobado->map(function ($prueba){
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos3"]);
            return ['diasAprobado' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });
        
        $Dif_Creacion_Finalizado = $ConsultaFinalizado->map(function ($prueba){
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos8"]);
            return ['diasFinalizar' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });

        $Dif_Creacion_Aprobado = $Dif_Creacion_Aprobado->avg('diasAprobado');
        $Dif_Creacion_Finalizado = $Dif_Creacion_Finalizado->avg('diasFinalizar');

        $Tiempo_Aprobado_Finalizado = (string)round($Dif_Creacion_Finalizado - $Dif_Creacion_Aprobado, 1) . " Días";

        /* error_log($Tiempo_Aprobado_Finalizado); */

        return $Tiempo_Aprobado_Finalizado;
    }
    public function getAprobadoProgramado(int $storeId) //Dias promedio de Aprobado a Programado Se toman promedios de el trimestre anterior
    {
        $date = strtotime('-3 month', strtotime(date('Y-m'))); //Fecha unix fecha actual menos 2 meses
        $month = date('m', $date); //obtenemos solo mes de $date
        $year = date('Y', $date); //obtenemos solo año de $date

        $desde = $year . '-' . $month . '-' . '01'; //contactenamos variables para obtener una fecha valida para comparacion

        $date2 = strtotime(date('Y-m'));
        $month = date('m', $date2); //obtenemos solo mes de $date2
        $year = date('Y', $date2); //obtenemos solo año de $date2

        $hasta = $year . '-' . $month . '-' . '01'; //fecha con el mes actual y año 

        $ConsultaAprobado = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos3', 'movimientos.or_estatus AS Estatus_Movimientos3')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('movimientos.or_estatus', '=', '3',)
                                             ->where('sucursal_id', $storeId)
                                             ->get(); //Trae movimientos con estatus 3 Aprobado

        $ConsultaProgramado = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos4', 'movimientos.or_estatus AS Estatus_Movimientos8')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('movimientos.or_estatus', '=', '4',)
                                             ->where('sucursal_id', $storeId)
                                             ->get(); //Trae movimientos con estatus 4 Programado


        $Dif_Creacion_Aprobado = $ConsultaAprobado->map(function ($prueba){ //Saca diferencia de dia aprobado a creacion de orden
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos3"]);
            return ['diasAprobado' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });
        
        $Dif_Creacion_Progrmado = $ConsultaProgramado->map(function ($prueba){ //Saca diferencia de dia programado a creacion de orden
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos4"]);
            return ['diasProgramado' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });

        $Dif_Creacion_Aprobado = $Dif_Creacion_Aprobado->avg('diasAprobado'); //Se sacan promedios de dias de dos fechas
        $Dif_Creacion_Progrmado = $Dif_Creacion_Progrmado->avg('diasProgramado');

        $Tiempo_Aprobado_Programado = (string)round($Dif_Creacion_Progrmado - $Dif_Creacion_Aprobado, 1) . " Días"; //Se saca diferencia de dos fechas para saber el intervalo entre los 2 estatus

        return $Tiempo_Aprobado_Programado;// retorna el numero en dias
    }
    public function getAprobadoInstalado(int $storeId) //Dias promedio de Aprobado a Instakado Se toman promedios de el trimestre anterior
    {
        $date = strtotime('-3 month', strtotime(date('Y-m'))); //Fecha unix fecha actual menos 2 meses
        $month = date('m', $date); //obtenemos solo mes de $date
        $year = date('Y', $date); //obtenemos solo año de $date

        $desde = $year . '-' . $month . '-' . '01'; //contactenamos variables para obtener una fecha valida para comparacion

        $date2 = strtotime(date('Y-m'));
        $month = date('m', $date2); //obtenemos solo mes de $date2
        $year = date('Y', $date2); //obtenemos solo año de $date2

        $hasta = $year . '-' . $month . '-' . '01'; //fecha con el mes actual y año 

        $ConsultaAprobado = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos3', 'movimientos.or_estatus AS Estatus_Movimientos3')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('movimientos.or_estatus', '=', '3',)
                                             ->where('sucursal_id', $storeId)
                                             ->get(); //Trae movimientos con estatus 3 Aprobado

        $ConsultaInstalado = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos5', 'movimientos.or_estatus AS Estatus_Movimientos8')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('movimientos.or_estatus', '=', '5',)
                                             ->where('sucursal_id', $storeId)
                                             ->get(); //Trae movimientos con estatus 4 Programado


        $Dif_Creacion_Aprobado = $ConsultaAprobado->map(function ($prueba){ //Saca diferencia de dia aprobado a creacion de orden
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos3"]);
            return ['diasAprobado' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });
        
        $Dif_Creacion_Instalado = $ConsultaInstalado->map(function ($prueba){ //Saca diferencia de dia programado a creacion de orden
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos5"]);
            return ['diasInstalado' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });

        $Dif_Creacion_Aprobado = $Dif_Creacion_Aprobado->avg('diasAprobado'); //Se sacan promedios de dias de dos fechas
        $Dif_Creacion_Instalado = $Dif_Creacion_Instalado->avg('diasInstalado');

        $Tiempo_Aprobado_Instalado = (string)round($Dif_Creacion_Instalado - $Dif_Creacion_Aprobado, 1) . " Días"; //Se saca diferencia de dos fechas para saber el intervalo entre los 2 estatus

        return $Tiempo_Aprobado_Instalado;// retorna el numero en dias
    }
    public function getProgramadoInicio(int $storeId) //Dias promedio de Aprobado a Instakado Se toman promedios de el trimestre anterior
    {
        $date = strtotime('-3 month', strtotime(date('Y-m'))); //Fecha unix fecha actual menos 2 meses
        $month = date('m', $date); //obtenemos solo mes de $date
        $year = date('Y', $date); //obtenemos solo año de $date

        $desde = $year . '-' . $month . '-' . '01'; //contactenamos variables para obtener una fecha valida para comparacion

        $date2 = strtotime(date('Y-m'));
        $month = date('m', $date2); //obtenemos solo mes de $date2
        $year = date('Y', $date2); //obtenemos solo año de $date2

        $hasta = $year . '-' . $month . '-' . '01'; //fecha con el mes actual y año 

        $ConsultaTentativo_Inicio = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.fecha_instalacion AS FechaOrden_Tentativa', 'ordenes.fecha_inicio AS FechaOrden_inicio')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->whereNotNull('fecha_fin')
                                             ->whereNotNull('fecha_inicio')
                                             ->where('sucursal_id', $storeId)
                                             ->get();

        $Dif_Tentativa_Inicio = $ConsultaTentativo_Inicio->map(function ($prueba){
            $FechaOrden = new DateTime($prueba["FechaOrden_Tentativa"]);
            $FechaMovimiento = new DateTime($prueba["FechaOrden_inicio"]);
            return ['diasTentativo_Inicio' => $FechaOrden->diff($FechaMovimiento)->format('%a')];
        });

        $Tiempo_Tentativa_Inicio = (string)round($Dif_Tentativa_Inicio->avg('diasTentativo_Inicio'), 1) . " Días";

        return $Tiempo_Tentativa_Inicio;// retorna el numero en dias
    }
    public function getProcesoCFEIngresiDoc(int $storeId) //Dias promedio de Aprobado a Instakado Se toman promedios de el trimestre anterior
    {
        $date = strtotime('-3 month', strtotime(date('Y-m'))); //Fecha unix fecha actual menos 2 meses
        $month = date('m', $date); //obtenemos solo mes de $date
        $year = date('Y', $date); //obtenemos solo año de $date

        $desde = $year . '-' . $month . '-' . '01'; //contactenamos variables para obtener una fecha valida para comparacion

        $date2 = strtotime(date('Y-m'));
        $month = date('m', $date2); //obtenemos solo mes de $date2
        $year = date('Y', $date2); //obtenemos solo año de $date2

        $hasta = $year . '-' . $month . '-' . '01'; //fecha con el mes actual y año 

        $ConsultaProcesoCFE = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos6', 'movimientos.or_estatus AS Estatus_Movimientos3')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('movimientos.or_estatus', '=', '6',)
                                             ->where('sucursal_id', $storeId)
                                             ->get(); //Trae movimientos con estatus 3 Aprobado

        $ConsultaIngDocs = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos10', 'movimientos.or_estatus AS Estatus_Movimientos8')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('movimientos.or_estatus', '=', '10',)
                                             ->where('sucursal_id', $storeId)
                                             ->get(); //Trae movimientos con estatus 4 Programado


        $Dif_Creacion_ProcesoCFE = $ConsultaProcesoCFE->map(function ($prueba){ //Saca diferencia de dia aprobado a creacion de orden
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos6"]);
            return ['diasProcesoCFE' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });
        
        $Dif_Creacion_IngDocs = $ConsultaIngDocs->map(function ($prueba){ //Saca diferencia de dia programado a creacion de orden
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos10"]);
            return ['diasIngDocs' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });

        $Dif_Creacion_ProcesoCFE = $Dif_Creacion_ProcesoCFE->avg('diasProcesoCFE'); //Se sacan promedios de dias de dos fechas
        $Dif_Creacion_IngDocs = $Dif_Creacion_IngDocs->avg('diasIngDocs');

        $Tiempo_ProcesoCFE_IngDocs = (string)round($Dif_Creacion_IngDocs - $Dif_Creacion_ProcesoCFE, 1) . " Días"; //Se saca diferencia de dos fechas para saber el intervalo entre los 2 estatus

        

        return $Tiempo_ProcesoCFE_IngDocs;// retorna el numero en dias
    }
    public function getIngresoDocSIAsignado(int $storeId) //Dias promedio de ProcesoCFE a SI Asignado Se toman promedios de el trimestre anterior
    {
        $date = strtotime('-3 month', strtotime(date('Y-m'))); //Fecha unix fecha actual menos 2 meses
        $month = date('m', $date); //obtenemos solo mes de $date
        $year = date('Y', $date); //obtenemos solo año de $date

        $desde = $year . '-' . $month . '-' . '01'; //contactenamos variables para obtener una fecha valida para comparacion

        $date2 = strtotime(date('Y-m'));
        $month = date('m', $date2); //obtenemos solo mes de $date2
        $year = date('Y', $date2); //obtenemos solo año de $date2

        $hasta = $year . '-' . $month . '-' . '01'; //fecha con el mes actual y año 

        $ConsultaIngDocs = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos10', 'movimientos.or_estatus AS Estatus_Movimientos3')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('ordenes.medidor_bidireccional', 1)
                                             ->where('movimientos.or_estatus', '=', '10')
                                             ->where('sucursal_id', $storeId)
                                             ->get(); //Trae movimientos con estatus 3 Aprobado

        $ConsultaSIAsignado = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos7', 'movimientos.or_estatus AS Estatus_Movimientos8')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('ordenes.medidor_bidireccional', 1)
                                             ->where('movimientos.or_estatus', '=', '7')
                                             ->where('sucursal_id', $storeId)
                                             ->get(); //Trae movimientos con estatus 4 Programado
        

        $Dif_Creacion_IngDocs = $ConsultaIngDocs->map(function ($prueba){ //Saca diferencia de dia aprobado a creacion de orden
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos10"]);
            return ['diasIngDocs' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });
        
        $Dif_Creacion_SIAsignado = $ConsultaSIAsignado->map(function ($prueba){ //Saca diferencia de dia programado a creacion de orden
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos7"]);
            return ['diasSIAsignado' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });

        $Dif_Creacion_IngDocs = $Dif_Creacion_IngDocs->avg('diasIngDocs'); //Se sacan promedios de dias de dos fechas
        $Dif_Creacion_SIAsignado = $Dif_Creacion_SIAsignado->avg('diasSIAsignado');

        $Tiempo_IngDocs_SIAsignado = (string)round($Dif_Creacion_SIAsignado - $Dif_Creacion_IngDocs, 1) . " Días"; //Se saca diferencia de dos fechas para saber el intervalo entre los 2 estatus

        return $Tiempo_IngDocs_SIAsignado;// retorna el numero en dias
    }
    public function getInstaladoFinalizado(int $storeId) //Dias promedio de ProcesoCFE a SI Asignado Se toman promedios de el trimestre anterior
    {
        $date = strtotime('-3 month', strtotime(date('Y-m'))); //Fecha unix fecha actual menos 2 meses
        $month = date('m', $date); //obtenemos solo mes de $date
        $year = date('Y', $date); //obtenemos solo año de $date

        $desde = $year . '-' . $month . '-' . '01'; //contactenamos variables para obtener una fecha valida para comparacion

        $date2 = strtotime(date('Y-m'));
        $month = date('m', $date2); //obtenemos solo mes de $date2
        $year = date('Y', $date2); //obtenemos solo año de $date2

        $hasta = $year . '-' . $month . '-' . '01'; //fecha con el mes actual y año 

        $ConsultaInstalado = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos5', 'movimientos.or_estatus AS Estatus_Movimientos3')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('movimientos.or_estatus', '=', '5')
                                             ->where('sucursal_id', $storeId)
                                             ->get(); //Trae movimientos con estatus 3 Aprobado

        $ConsultaFinalizado = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos8', 'movimientos.or_estatus AS Estatus_Movimientos8')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('movimientos.or_estatus', '=', '8')
                                             ->where('sucursal_id', $storeId)
                                             ->get(); //Trae movimientos con estatus 4 Programado
        

        $Dif_Creacion_Instalado = $ConsultaInstalado->map(function ($prueba){ //Saca diferencia de dia aprobado a creacion de orden
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos5"]);
            return ['diasInstalado' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });
        
        $Dif_Creacion_Finalizado = $ConsultaFinalizado->map(function ($prueba){ //Saca diferencia de dia programado a creacion de orden
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos8"]);
            return ['diasFinalizar' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });

        $Dif_Creacion_Instalado = $Dif_Creacion_Instalado->avg('diasInstalado'); //Se sacan promedios de dias de dos fechas
        $Dif_Creacion_Finalizado = $Dif_Creacion_Finalizado->avg('diasFinalizar');

        $Tiempo_Instalado_Finalizado = (string)round($Dif_Creacion_Finalizado - $Dif_Creacion_Instalado, 1) . " Días"; //Se saca diferencia de dos fechas para saber el intervalo entre los 2 estatus
        
        return $Tiempo_Instalado_Finalizado;// retorna el numero en dias
    }
    public function getCreadoAprobado(int $storeId) //Dias promedio de ProcesoCFE a SI Asignado Se toman promedios de el trimestre anterior
    {
        $date = strtotime('-3 month', strtotime(date('Y-m'))); //Fecha unix fecha actual menos 2 meses
        $month = date('m', $date); //obtenemos solo mes de $date
        $year = date('Y', $date); //obtenemos solo año de $date

        $desde = $year . '-' . $month . '-' . '01'; //contactenamos variables para obtener una fecha valida para comparacion

        $date2 = strtotime(date('Y-m'));
        $month = date('m', $date2); //obtenemos solo mes de $date2
        $year = date('Y', $date2); //obtenemos solo año de $date2

        $hasta = $year . '-' . $month . '-' . '01'; //fecha con el mes actual y año 

        $ConsultaAprobado = Orden::select('ordenes.estatus', 'ordenes.id', 'ordenes.created_at AS FechaOrden_Creacion', 'movimientos.created_at AS Fecha_Movimientos3', 'movimientos.or_estatus AS Estatus_Movimientos3')
                                             ->join('movimientos', 'ordenes.id', '=', 'movimientos.orden_id')
                                             ->whereBetween('ordenes.created_at', [$desde, $hasta])
                                             ->whereIn('ordenes.estatus', array(8,14))
                                             ->where('movimientos.or_estatus', '=', '3',)
                                             ->where('sucursal_id', $storeId)
                                             ->get();
        
        $Dif_Creacion_Aprobado = $ConsultaAprobado->map(function ($prueba){
            $FechaOrden = new DateTime($prueba["FechaOrden_Creacion"]);
            $FechaMovimiento = new DateTime($prueba["Fecha_Movimientos3"]);
            return ['diasAprobado' => $FechaMovimiento->diff($FechaOrden)->format('%a')];
        });

        $Dif_Creacion_Aprobado = $Dif_Creacion_Aprobado->avg('diasAprobado');

        $Tiempo_Creacion_Aprobado = (string)round($Dif_Creacion_Aprobado, 1) . " Días"; //Se saca diferencia de dos fechas para saber el intervalo entre los 2 estatus
        
        return $Tiempo_Creacion_Aprobado;// retorna el numero en dias
    }

    //-------------------------------------------------------------------------------Tiempos de sucursal--------------------------------------------------------------------------------

    public function getEstatus(int $storeId)
    {
        $No_Estatus = array(1,11,12,13,2,3,4,18,9,17,5,6,10,7,15,16);

        for ($i = 0; $i < sizeof($No_Estatus); $i++) {
            $Numero = Orden::with('estatus')->where('sucursal_id', $storeId)->where('estatus', '=', $No_Estatus[$i])->get()->count();
            $No_Estatus[$i] = $Numero;
            /* error_log($No_Estatus[$i]); */
        }

        return $No_Estatus;
    }
    public function getTotalPaneles(int $storeId)
    {
        $date = strtotime('-1 month', strtotime(date('Y-m'))); //Trae la fecha actual la convierte en unix y le resta un mes
        $month = date('m', $date);
        $year = date('Y', $date);  
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->whereMonth('created_at', '=', $month);
                $query->whereYear('created_at', '=', $year);
            }
        ])->where('id', $storeId)->first();

        return $result->ordenes->sum('no_paneles');
    }
    public function getTotalDiasInstalacion(int $storeId)
    {
        $date = strtotime('-1 month', strtotime(date('Y-m')));
        /* $date = strtotime(date('Y-m')); */
        $month = date('m', $date);
        $year = date('Y', $date);
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->whereMonth('created_at', '=', $month);
                $query->whereYear('created_at', '=', $year);
                $query->whereNotNull('fecha_fin');
                $query->whereNotNull('fecha_inicio');
            }
        ])->where('id', $storeId)->first();
        $result = $result->ordenes->map(function ($orden) {
            return ['dias' => $orden['fecha_fin']->diff($orden['fecha_inicio'])->format('%a')];
        });

        return $result->avg('dias');
    }
    public function getTotalDiasFinalizar(int $storeId)
    {
        $date = strtotime('-1 month', strtotime(date('Y-m')));
        $month = date('m', $date);
        $year = date('Y', $date);
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->whereMonth('created_at', '=', $month);
                $query->whereYear('created_at', '=', $year);
                $query->with([
                    'movimientos' => function ($query) {
                        $query->where('or_estatus', '=', '8');
                    }
                ]);
            }
        ])->where('id', $storeId)->first();
        $result = $result->ordenes->map(function ($orden) {
            return ['diasFinalizar' => $orden['created_at']->diff($orden['movimientos.created_at'])->format('%a')];
        });
        return $result->avg('diasFinalizar');
    }
    public function getTotalDias(int $storeId)
    {
        $date = strtotime('-1 month', strtotime(date('Y-m')));
        $month = date('m', $date);
        $year = date('Y', $date);
        $result = $this->with([
            'ordenes' => function ($query) use ($month, $year) {
                $query->whereMonth('created_at', '=', $month);
                $query->whereYear('created_at', '=', $year);
                $query->where('estatus', "=", 8);
                $query->with([
                    'movimientos' => function ($query) {
                        $query->select('created_at as fecha', 'or_estatus', 'orden_id')->where('or_estatus', '=', '8');
                    }
                ]);
            }
        ])->where('id', $storeId)->first();
        
        $result = $result->ordenes->map(function ($orden) {
            return ['diasFinalizar' => $orden['created_at']->diff($orden['movimientos.fecha'])->format('%a')];
        });
                
        return $result->avg('diasFinalizar');
    }
}
