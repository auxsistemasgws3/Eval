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
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use ArrayObject;

class MejoresResultadosController extends Controller
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
    
    public function getMejoresResultados()
    {
        $user = Auth::user();
        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();
        $usuariosEvaluar = User::selectRaw("id AS value, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) label, id_departamento, sucursal_id, puesto")->where('jefe_inmediato', $user->id)->orderBy('created_at', 'ASC')->get();
        $departamentos_lst = EvaluacionesDepartamento::where('active', 1)->where('id_dictionaries', '!=', $user->id_departamento)->orderBy('code', 'ASC')->get();
        $periodosDiferentes = Evaluaciones::select('periodo_evaluacion as label', 'periodo_evaluacion as value',)->distinct()->get();

        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();
        $año = date("Y"); //Obtenemos año actual

        $mes_anterior = date('m', strtotime('-1 month'));
        intval($mes_anterior);

        $Fechahoy = date("Y-m-d");

        $periodoAnterior = $meses[$mes_anterior-1]->text . " - " . $año;
        
        $top5Desemp = Evaluaciones::select('id', 'nombre_evaluado', 'calificacion_promedio', 'id_departamento',)->where('id_evaluacion', 1)->where('periodo_evaluacion', $periodoAnterior)->orderBy('calificacion_promedio', 'DESC')->skip(0)->take(10)->get();
        $down10Desemp = Evaluaciones::select('id', 'nombre_evaluado', 'calificacion_promedio', 'id_departamento',)->where('id_evaluacion', 1)->where('periodo_evaluacion', $periodoAnterior)->orderBy('calificacion_promedio', 'ASC')->skip(0)->take(10)->get();

        $departamentos = EvaluacionesDepartamento::select('code', 'name', 'id_dictionaries')->where('active', 1)->orderBy('code', 'ASC')->get();
        $sumaPromedio = 0;
        $promedioDep = 0; 
        $promedioLider = 0;
        $promediosDepartamentos =  array();
        $promediosLideres =  array();
        $Top3Dep =  array();
        $Down5Dep =  array();
        $Top3Lider =  array();
        $Down5Lider =  array();
        $promediosEntreLideres = array();
        $Top3EntreLider = array();
  

        for($i = 0; $i < sizeof($departamentos); $i++){
            $evaluacionesDep = Evaluaciones::select('id', 'nombre_evaluado', 'calificacion_promedio', 'id_departamento',)->where('nombre_evaluado', $departamentos[$i]->name)->where('id_evaluacion', 4)->where('periodo_evaluacion', $periodoAnterior)->get();
        error_log(sizeof($evaluacionesDep));

            if (sizeof($evaluacionesDep) > 0){
            for($j = 0; $j < sizeof($evaluacionesDep); $j++){
                $sumaPromedio =  $sumaPromedio + $evaluacionesDep[$j]->calificacion_promedio;
            }
        

            $promedioDep = round($sumaPromedio/(sizeof($evaluacionesDep)),2);
        
            $promediosDepartamentos[$i][0] = $promedioDep;
            $promediosDepartamentos[$i][1] = $departamentos[$i]->name;

            $sumaPromedio = 0;
        }
        }

        rsort($promediosDepartamentos); //Ordena de Mayor a menor el array dado

        for($q = 0; $q < sizeof($promediosDepartamentos); $q++){
            $Top3Dep[$q][0] = $promediosDepartamentos[$q][0];
            $Top3Dep[$q][1] = $promediosDepartamentos[$q][1];
            $Down5Dep[$q][0] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-($q+1)][0];
            $Down5Dep[$q][1] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-($q+1)][1];

        }
        // $Top3Dep[0][0] = $promediosDepartamentos[0][0];
        // $Top3Dep[0][1] = $promediosDepartamentos[0][1];
        // $Top3Dep[1][0] = $promediosDepartamentos[1][0];
        // $Top3Dep[1][1] = $promediosDepartamentos[1][1];
        // $Top3Dep[2][0] = $promediosDepartamentos[2][0];
        // $Top3Dep[2][1] = $promediosDepartamentos[2][1];

        // $Down5Dep[0][0] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-1][0];
        // $Down5Dep[0][1] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-1][1];
        // $Down5Dep[1][0] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-2][0];
        // $Down5Dep[1][1] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-2][1];
        // $Down5Dep[2][0] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-3][0];
        // $Down5Dep[2][1] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-3][1];
        // $Down5Dep[3][0] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-4][0];
        // $Down5Dep[3][1] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-4][1];
        // $Down5Dep[4][0] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-5][0];
        // $Down5Dep[4][1] = $promediosDepartamentos[((sizeof($promediosDepartamentos)))-5][1];


        $resultadosLider = Evaluaciones::select("nombre_evaluado")->where('id_evaluacion', 2)->where('periodo_evaluacion', 'LIKE','%'.$periodoAnterior.'%')->distinct()->get();

        for($i = 0; $i < sizeof($resultadosLider); $i++){
            $evaluacionesLider = Evaluaciones::select('id', 'nombre_evaluado', 'calificacion_promedio', 'id_departamento',)->where('nombre_evaluado', $resultadosLider[$i]->nombre_evaluado)->where('id_evaluacion', 2)->where('periodo_evaluacion', 'LIKE','%'.$periodoAnterior.'%')->get();

            for($j = 0; $j < sizeof($evaluacionesLider); $j++){
                $sumaPromedio =  $sumaPromedio + $evaluacionesLider[$j]->calificacion_promedio;
            }
            $promedioLider = round($sumaPromedio/(sizeof($evaluacionesLider)),2);

            $promediosLideres[$i][0] = $promedioLider;
            $promediosLideres[$i][1] = $resultadosLider[$i]->nombre_evaluado;

            $sumaPromedio = 0;
        }

        rsort($promediosLideres);
    
        for($q = 0; $q < sizeof($promediosLideres); $q++){
            $Top3Lider[$q][0] = $promediosLideres[$q][0];
            $Top3Lider[$q][1] = $promediosLideres[$q][1];
            $Down5Lider[$q][0] = $promediosLideres[((sizeof($promediosLideres)))-($q+1)][0];
            $Down5Lider[$q][1] = $promediosLideres[((sizeof($promediosLideres)))-($q+1)][1];
        }
        // $Top3Lider[0][0] = $promediosLideres[0][0];
        // $Top3Lider[0][1] = $promediosLideres[0][1];
        // $Top3Lider[1][0] = $promediosLideres[1][0];
        // $Top3Lider[1][1] = $promediosLideres[1][1];
        // $Top3Lider[2][0] = $promediosLideres[2][0];
        // $Top3Lider[2][1] = $promediosLideres[2][1];
        // $Top3Lider[3][0] = $promediosLideres[3][0];
        // $Top3Lider[3][1] = $promediosLideres[3][1];
        // $Top3Lider[4][0] = $promediosLideres[4][0];
        // $Top3Lider[4][1] = $promediosLideres[4][1];
        // $Top3Lider[5][0] = $promediosLideres[5][0];
        // $Top3Lider[5][1] = $promediosLideres[5][1];
        // $Top3Lider[6][0] = $promediosLideres[6][0];
        // $Top3Lider[6][1] = $promediosLideres[6][1];
        // $Top3Lider[7][0] = $promediosLideres[7][0];
        // $Top3Lider[7][1] = $promediosLideres[7][1];
        // $Top3Lider[8][0] = $promediosLideres[8][0];
        // $Top3Lider[8][1] = $promediosLideres[8][1];
        // $Top3Lider[9][0] = $promediosLideres[9][0];
        // $Top3Lider[9][1] = $promediosLideres[9][1];

        // $Down5Lider[0][0] = $promediosLideres[((sizeof($promediosLideres)))-1][0];
        // $Down5Lider[0][1] = $promediosLideres[((sizeof($promediosLideres)))-1][1];
        // $Down5Lider[1][0] = $promediosLideres[((sizeof($promediosLideres)))-2][0];
        // $Down5Lider[1][1] = $promediosLideres[((sizeof($promediosLideres)))-2][1];
        // $Down5Lider[2][0] = $promediosLideres[((sizeof($promediosLideres)))-3][0];
        // $Down5Lider[2][1] = $promediosLideres[((sizeof($promediosLideres)))-3][1];
        // $Down5Lider[3][0] = $promediosLideres[((sizeof($promediosLideres)))-4][0];
        // $Down5Lider[3][1] = $promediosLideres[((sizeof($promediosLideres)))-4][1];
        // $Down5Lider[4][0] = $promediosLideres[((sizeof($promediosLideres)))-5][0];
        // $Down5Lider[4][1] = $promediosLideres[((sizeof($promediosLideres)))-5][1];

        $resultadosEntreLider = Evaluaciones::select("nombre_evaluado")->where('id_evaluacion', 6)->where('periodo_evaluacion', 'LIKE','%'.$periodoAnterior.'%')->distinct()->get();

        for($i = 0; $i < sizeof($resultadosEntreLider); $i++){
            $evaluacionesEntreLider = Evaluaciones::select('id', 'nombre_evaluado', 'calificacion_promedio', 'id_departamento',)->where('nombre_evaluado', $resultadosEntreLider[$i]->nombre_evaluado)->where('id_evaluacion', 6)->where('periodo_evaluacion', 'LIKE','%'.$periodoAnterior.'%')->get();

            for($j = 0; $j < sizeof($evaluacionesEntreLider); $j++){
                $sumaPromedio =  $sumaPromedio + $evaluacionesEntreLider[$j]->calificacion_promedio;
            }
            $promedioEntreLider = round($sumaPromedio/(sizeof($evaluacionesEntreLider)),2);

            $promediosEntreLideres[$i][0] = $promedioEntreLider;
            $promediosEntreLideres[$i][1] = $resultadosEntreLider[$i]->nombre_evaluado;

            $sumaPromedio = 0;
        }

        rsort($promediosEntreLideres);
    
        for($q = 0; $q < sizeof($promediosEntreLideres); $q++){
        $Top3EntreLider[$q][0] = $promediosEntreLideres[$q][0];
        $Top3EntreLider[$q][1] = $promediosEntreLideres[$q][1];
        }
        // $Top3EntreLider[0][0] = $promediosEntreLideres[0][0];
        // $Top3EntreLider[0][1] = $promediosEntreLideres[0][1];
        // $Top3EntreLider[1][0] = $promediosEntreLideres[1][0];
        // $Top3EntreLider[1][1] = $promediosEntreLideres[1][1];
        // $Top3EntreLider[2][0] = $promediosEntreLideres[2][0];
        // $Top3EntreLider[2][1] = $promediosEntreLideres[2][1];
        // $Top3EntreLider[3][0] = $promediosEntreLideres[3][0];
        // $Top3EntreLider[3][1] = $promediosEntreLideres[3][1];
        // $Top3EntreLider[4][0] = $promediosEntreLideres[4][0];
        // $Top3EntreLider[4][1] = $promediosEntreLideres[4][1];

        return response()->json(compact('user', 'usuariosEvaluar', 'departamentos_lst', 'periodosDiferentes', 'periodoAnterior',
        'promediosLideres', 'promediosDepartamentos', 'Top3Dep', 'Down5Dep', 'Top3Lider', 'Top3EntreLider', 'Down5Lider', 'top5Desemp', 'down10Desemp',));
    }
}
