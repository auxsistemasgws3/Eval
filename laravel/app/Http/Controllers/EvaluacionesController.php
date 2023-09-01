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
use App\Models\UsuarioDepartamento;
use App\Models\EvaluacionesRelaciones;
use App\Models\EvaluacionesRelacionesLideres;
use App\Models\Users;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class EvaluacionesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    protected $table = 'evaluaciones_departamento';
   
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function lider(){
        return $this->belongsTo('App\Models\Users', 'id_dictionaries', 'id_departamento')->where('lider',);
    }
   
    
    public function getUser()
    {   
        $user = Auth::user();

        //$id_empresa = $user->id_empresa;


        
        $id_departamento = $user->id_departamento;
        $lider = $user->lider;
        

        error_log("Id de la empresa en la que labora");
        //error_log($id_empresa);

        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();
        $año = date("Y");
        $Anterior = strtotime('-1 month', strtotime(date('Y-m')));
        $mesAnterior = substr(date('m', $Anterior), 1);

        $mes_anterior = date('m', strtotime('-1 month'));
        intval($mes_anterior);

        $periodo1 = $meses[$mes_anterior-1]->text . " - " . $año;

        

        // $relaciones = EvaluacionesRelaciones:: select('RELACIONES')->where('id', '=', $user->id_departamento)->get();
        // $exploderelaciones = explode('*', $relaciones);
        // $departamentosEvaluar=$exploderelaciones[1];
        // $idRelaciones = explode(',', $departamentosEvaluar);

        $idRelaciones = UsuarioDepartamento::select('id_Departamento')->where('id_Usuario', $user->id)->get();

        

        // for($e = 0; $e < (sizeof($idRelaciones)); $e++){
        //  error_log($idRelaciones);
        // }

        // $relacioneslideres = EvaluacionesRelacionesLideres:: select('RELACIONES')
        // ->where('id', '=', $user->id_departamento)
        // ->get();
        // $exploderelacioneslideres = explode('*', $relacioneslideres);
        // $departamentosEvaluarLideres=$exploderelacioneslideres[1];
        // $idRelacioneslideres = explode(',', $departamentosEvaluarLideres);

       

        $idRelacioneslideres = UsuarioDepartamento::select('id_Departamento')->where('id_Usuario', $user->id)->get();      
        
        

        // error_log("Las relaciones de los lideres, con el metodo nuevo");
        // error_log($idRelacioneslideres);


        $departamentosEvaluados= Evaluaciones::select('nombre_evaluado')
        ->where('id_evaluacion', 4)
        ->where('periodo_evaluacion', $periodo1)
        ->where('id_realizo_evaluacion', $user->id)        
        ->orderBy('created_at', 'ASC')
        ->get();
        $Evaluados = array();
        for($d = 0; $d < (sizeof($departamentosEvaluados)); $d++){
            $nameEvaluados = $departamentosEvaluados[$d]->nombre_evaluado;
            array_push($Evaluados, $nameEvaluados);
        }

        //hii
        
        $departamentosAEvaluar = EvaluacionesDepartamento::select('name')->where('active', 1)->whereIn('id_dictionaries', $idRelaciones)->orderBy('code', 'ASC')->get();
        error_log("Departamentos a evaluar");
        error_log($departamentosAEvaluar);
        //$departamentosAEvaluar = UsuarioDepartamento::select('id_Departamento')->get();
        
        $Evaluar = array();
        for($e = 0; $e < (sizeof($departamentosAEvaluar)); $e++){
            
            $nameEvaluar = $departamentosAEvaluar[$e]->name;
            array_push($Evaluar, $nameEvaluar);
        }
        $resultado = array();

        error_log($Evaluar[0]);

        $resultado = array_diff($Evaluar, $Evaluados);


        //  for($x=0;count($Evaluar);$x++){
        //     error_log($Evaluar[$x]);
        //  }
        //  error_log(" jjjjjjjjjjjjjjjjjjjjjjjjj");
         
        //  for($x=0;count($Evaluado);$x++){
        //     error_log($Evaluado[$x]);
        //  }
        //  error_log(" jjjjjjjjjjjjjjjjjjjjjjjjj");
         
        //  for($x=0;count($resultado);$x++){
        //     error_log($resultado[$x]);
        //  }
        //  error_log(" jjjjjjjjjjjjjjjjjjjjjjjjj");
        // $primapellido = getEvaluacionesDepartamento::select('reference_type')->where('active', 1)->get();
        //vane
        //$liderdepartameto = EvaluacionesDepartamento::join('id_dictionaries','id_departamento')->where('lider',1)->get();
        
        //('id_dictionaries', 'id_departamento')->where('lider',1)
        //select('evaluaciones_departamento','users')->
        //vane

        /*$numerocolaboradores = DB::table('users', 't1')
        ->select('t1.jefe_inmediato',
        DB::raw('count(t2.id) as numerocolaboradores'))
        ->join('users as t2', 't2.id', '=', 't1.jefe_inmediato')
        ->groupBy('t1.jefe_inmediato');
        */

        
       
        $departamentos_lst = EvaluacionesDepartamento::where('active', 1)->whereIn('name', $resultado)->whereIn('id_dictionaries', $idRelaciones)->with('lider')->orderBy('code', 'ASC')->get();
        error_log("Lista de departamentos a evaluar");
        error_log($departamentos_lst[0]);
        $lideresEvaluados = Evaluaciones::select('id_evaluado', 'nombre_evaluado', 'calificacion_promedio', 'periodo_evaluacion', 'puesto_evaluado')
        ->where('id_evaluacion', 6)->where('periodo_evaluacion', '=', $periodo1)
        ->where('id_realizo_evaluacion', $user->id)
        ->orderBy('created_at', 'ASC')
        ->get();

        $lideresEvaluadosArray = array();
        for($x = 0; $x < (sizeof($lideresEvaluados)); $x++){
            $idEvaluados = $lideresEvaluados[$x]->id_evaluado;
            array_push($lideresEvaluadosArray, $idEvaluados);
        }

        $lideresPorEvaluar = Users::select('id')
        ->whereIn('id_departamento', $idRelacioneslideres)
        ->orderBy('id', 'ASC')
        ->where('estatus', 1)
        ->get();


        
        $lideresPorEvaluarArray = array();
        for($y = 0; $y < (sizeof($lideresPorEvaluar)); $y++){
            $idPorEvaluar = $lideresPorEvaluar[$y]->id;
            array_push($lideresPorEvaluarArray, $idPorEvaluar);
     
        }

        $resultadoLideresEvaluar = array();
        $resultadoLideresEvaluar = array_diff($lideresPorEvaluarArray, $lideresEvaluadosArray);
        
        $lideresAEvaluar = Users::selectraw("id AS value, id, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) label, id_departamento, sucursal_id, puesto")
        ->whereIn('id', $resultadoLideresEvaluar)
        ->whereIn('id_departamento', $idRelacioneslideres)
        ->orderBy('id', 'ASC')
        ->where('estatus', 1)
        ->where('lider', 1)
        ->get();
    
        $usuariosEvaluados= Evaluaciones::select('id_evaluado', 'nombre_evaluado', 'calificacion_promedio', 'periodo_evaluacion', 'puesto_evaluado')
        ->where('id_evaluacion', 1)
        ->where('periodo_evaluacion', '=', $periodo1)
        ->where('id_realizo_evaluacion', $user->id)
        ->orderBy('created_at', 'ASC')
        ->get();

        $usuariosEvaluar = User::select('id')
        ->where('jefe_inmediato', $user->id)
        ->where('estatus', 1)
        ->orderBy('created_at', 'ASC')
        ->get();
        
        //
        $idEvaluararray = array();
        for($v = 0; $v < (sizeof($usuariosEvaluar)); $v++){
            $push = $usuariosEvaluar[$v]->id;
            array_push($idEvaluararray, $push);
        }

        //Hello............................................................................................

        $idEvaluados = Evaluaciones::select('id_evaluado')->where('id_evaluacion', 1)->where('periodo_evaluacion', '=', $periodo1)->where('id_realizo_evaluacion', $user->id)->orderBy('created_at', 'ASC')->get();
        $idEvaluadosarray = array();
        for($z = 0; $z < (sizeof($idEvaluados)); $z++){
            $push = $idEvaluados[$z]->id_evaluado;
            array_push($idEvaluadosarray, $push);
        }
        
        $Evaluadosarray = array();
        $Evaluadosarray = array_diff($idEvaluararray, $idEvaluadosarray);
 
        $usuariosEvaluar = User::selectraw("id AS value, id, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) label, id_departamento, sucursal_id, puesto")
        ->whereIn('id', $Evaluadosarray)
        ->where('jefe_inmediato', $user->id)
        ->orderBy('created_at', 'ASC')->get();
        
        $evaluacionesRealizadas = Evaluaciones::select('id_evaluacion', 'nombre_evaluado', 'periodo_evaluacion')->where('id_realizo_evaluacion', $user->id)->where('periodo_evaluacion', $periodo1)->get();

        $liderEvaluados= Evaluaciones::select('nombre_evaluado', 'calificacion_promedio', 'periodo_evaluacion', 'puesto_evaluado')->where('id_evaluacion', 2)->where('periodo_evaluacion', $periodo1)->where('id_realizo_evaluacion', $user->id)->orderBy('created_at', 'ASC')->get();
        $grupoEvaluados= Evaluaciones::select('nombre_evaluado', 'calificacion_promedio', 'periodo_evaluacion', 'puesto_evaluado')->where('id_evaluacion', 5)->where('periodo_evaluacion', $periodo1)->where('id_realizo_evaluacion', $user->id)->orderBy('created_at', 'ASC')->get();

        
        return response()->json(compact('user', 'lider', 'id_departamento', 'usuariosEvaluar', 'usuariosEvaluados', 'departamentos_lst', 'evaluacionesRealizadas', 'liderEvaluados', 'grupoEvaluados', 'mes_anterior', 'lideresAEvaluar'));
             
    }





    public function getQuestionsDesempeno($id)
    {
        $questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DESEMPENO')->where('active', 1)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::where('reference_type', 'DESEMPENO')->where('active', 1)->orderBy('sort', 'ASC')->count();
        $departamentos_lst = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DEPARTAMENTO')->orderBy('code', 'ASC')->get();
        
        error_log("La lista de los departamentos de getQuestionsDesempeno:");
        error_log($departamentos_lst);
        
        $usuarioEvaluar = User::where('id', $id)
        ->orderBy('created_at', 'ASC')->get();


        error_log($usuarioEvaluar);
        error_log("La lista de los usuarios a Evaluar");

        $usuarios = User::selectRaw("id AS value, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) label")
        ->where('estatus', '1')
        ->orderBy('created_at', 'ASC')->get();


        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();
        $año = date("Y"); //Obtenemos año actual

        $mes_anterior = date('m', strtotime('-1 month'));
        intval($mes_anterior);

        $periodo1 = $meses[$mes_anterior-1]->text . " - " . $año;

        $Fechahoy = date("Y-m-d");

        $periodos =  array();
        array_push($periodos, $periodo1);

        return response()->json(compact('departamentos_lst', 'no_questions', 'questions', 'usuarios', 'usuarioEvaluar', 'periodos', 'Fechahoy',));
    }
    public function getQuestionsEntreLideres($id)
    {
        $questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'EVALUACION LIDERES')->where('active', 1)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::where('reference_type', 'EVALUACION LIDERES')->where('active', 1)->orderBy('sort', 'ASC')->count();
        $departamentos_lst = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DEPARTAMENTO')->orderBy('code', 'ASC')->get();
        $usuarios = User::selectRaw("id AS value, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) label")->where('estatus', '1')->orderBy('created_at', 'ASC')->get();

        error_log("La lista de los departamentos de getQuestionsEntreLideres:");
        error_log($departamentos_lst);


        $usuarioEvaluar = User::where('id', $id)->orderBy('created_at', 'ASC')->get();
        
        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();

        
        $año = date("Y"); //Obtenemos año actual

        $mes_anterior = date('m', strtotime('-1 month'));
        intval($mes_anterior);

        $periodo1 = $meses[$mes_anterior-1]->text . " - " . $año;

        $Fechahoy = date("Y-m-d");

        $periodos =  array();
        array_push($periodos, $periodo1);

        return response()->json(compact('departamentos_lst', 'no_questions', 'questions', 'usuarios', 'usuarioEvaluar', 'periodos', 'Fechahoy'));
    }
    public function getQuestionsLider($id)
    {
        $questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'LIDER')->where('active', 1)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::where('reference_type', 'LIDER')->where('active', 1)->orderBy('sort', 'ASC')->count();
        $departamentos_lst = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DEPARTAMENTO')->orderBy('code', 'ASC')->get();  
        
        error_log("La lista de los departamentos de getQuestionsLider:");
        error_log($departamentos_lst);
        
        $usuarioEvaluar = User::where('id', $id)->orderBy('created_at', 'ASC')->get();
        $usuarios = User::selectRaw("id AS value, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) label")->where('estatus', '1')->orderBy('created_at', 'ASC')->get();

        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();
        $año = date("Y"); //Obtenemos año actual

        $mes_anterior = date('m', strtotime('-1 month'));
        intval($mes_anterior);

        $periodo1 = $meses[$mes_anterior-1]->text . " - " . $año;

        $Fechahoy = date("Y-m-d");

        $periodos =  array();
        array_push($periodos, $periodo1);

        $user = Auth::user();

        $desempenoValidacion = Evaluaciones::select("id")->where('id_evaluado', $user->id)->where('id_evaluacion', 1)->where('periodo_evaluacion', $periodo1)->first();

        return response()->json(compact('departamentos_lst', 'no_questions', 'questions', 'usuarios', 'usuarioEvaluar', 'periodos', 'Fechahoy', 'desempenoValidacion'));
    }
    public function getQuestionsGrupal($id)
    {
        $user = Auth::user();
        $questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'GRUPAL')->where('active', 1)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::where('reference_type', 'GRUPAL')->where('active', 1)->orderBy('sort', 'ASC')->count();
        $departamentos_lst = Dictionary::select('code as value', 'text as label')->where('code', $user->id_departamento)->where('reference_type', 'DEPARTAMENTO')->orderBy('code', 'ASC')->get();
        $usuarioEvaluar = User::where('id_departamento', $user->id_departamento)->where('supervisor', 1)->orderBy('created_at', 'ASC')->get();
        
        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();
        $año = date("Y"); //Obtenemos año actual

        $mes_anterior = date('m', strtotime('-1 month'));
        intval($mes_anterior);

        $periodo1 = $meses[$mes_anterior-1]->text . " - " . $año;

        $Fechahoy = date("Y-m-d");

        $periodos =  array();
        array_push($periodos, $periodo1);

        return response()->json(compact('departamentos_lst', 'no_questions', 'questions', 'usuarioEvaluar', 'periodos', 'Fechahoy',));
    }
    public function getQuestionsClimaLaboral($id)
    {
        $questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'CLIMA LABORAL')->where('active', 1)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::where('reference_type', 'CLIMA LABORAL')->where('active', 1)->orderBy('sort', 'ASC')->count();
        $departamentos_lst = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DEPARTAMENTO')->orderBy('code', 'ASC')->get();
        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();
        $usuarioEvaluar = User::where('id', $id)->orderBy('created_at', 'ASC')->get();
        $usuarios = User::selectRaw("id AS value, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) label")->where('estatus', '1')->orderBy('created_at', 'ASC')->get();

        $Fechahoy = date("Y-m-d");
        $año = date("Y");
        $mesActual = date("m");
        $periodos =  array();

        if ($mesActual > 6){
        $periodo1 = $meses[0]->text . " - " . $meses[5]->text . " - " . $año;
        array_push($periodos, $periodo1);
        }else{
        $periodo2 = $meses[6]->text . " - " . $meses[11]->text . " - " . $año;
        array_push($periodos, $periodo2);
        }

        return response()->json(compact('departamentos_lst', 'no_questions', 'questions', 'usuarios', 'usuarioEvaluar', 'periodos', 'Fechahoy',));
    }
    public function getQuestionsDepartamento($id)
    {
        $user = Auth::user();
        $departamentoActivo = EvaluacionesDepartamento::where('active', 1)->where('code', $id)->first();
        error_log($departamentoActivo);
        $questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DEPARTAMENTOS')->where('active', 1)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::where('reference_type', 'DEPARTAMENTOS')->where('active', 1)->orderBy('sort', 'ASC')->count();
        /* $departamentos_lst = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DEPARTAMENTO')->orderBy('code', 'ASC')->get(); */
        $usuarioEvaluar = User::where('id', $user->id)->orderBy('created_at', 'ASC')->get();
        $usuarios = User::selectRaw("id AS value, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) label")->where('estatus', '1')->orderBy('created_at', 'ASC')->get();

        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();
        $año = date("Y"); //Obtenemos año actual

        $mes_anterior = date('m', strtotime('-1 month'));
        intval($mes_anterior);

        $periodo1 = $meses[$mes_anterior-1]->text . " - " . $año;

        $Fechahoy = date("Y-m-d");

        $periodos =  array();
        array_push($periodos, $periodo1);

        return response()->json(compact('usuarioEvaluar', 'departamentoActivo', 'no_questions', 'questions', 'usuarios', 'periodos', 'Fechahoy',));
    }
    public function addEvaluacion(Request $request)
    {
        $validatedData = $request->validate([
            'comentarios'       => 'required|min:50|max:1500'
        ]);

        $user = Auth::user();

        $respuestas = $request->input("respuestas");

  

        $comprEvaluacionRealizada = Evaluaciones::where('id_realizo_evaluacion', $user->id)
                                                ->where('periodo_evaluacion', $request->input("periodo_evaluacion"))
                                                ->where('nombre_evaluado', $request->input("nombre_evaluado"))
                                                ->where('id_evaluacion', $request->input("id_evaluacion"))
                                                ->get()
                                                ->count();

        
        if($comprEvaluacionRealizada == 0){

            $resultados_evaluacion = new Evaluaciones();

            $resultados_evaluacion->id_realizo_evaluacion = $user->id;
            $resultados_evaluacion->id_evaluacion = $request->input("id_evaluacion");
            $resultados_evaluacion->nombre_evaluado = $request->input("nombre_evaluado");
            $resultados_evaluacion->id_evaluado = $request->input("id_evaluado");
            $resultados_evaluacion->periodo_evaluacion = $request->input("periodo_evaluacion");
            $resultados_evaluacion->fecha_realizada = $request->input("fecha_realizada");
            $resultados_evaluacion->id_departamento = $request->input("id_departamento");
            $resultados_evaluacion->id_jefe_inmediato = $request->input("id_jefe_inmediato");
            $resultados_evaluacion->puesto_evaluado = $request->input("puesto_evaluado");
            $resultados_evaluacion->id_sucursal = $request->input("id_sucursal");
            $resultados_evaluacion->comentarios = $request->input("comentarios");
            $resultados_evaluacion->comentarios2 = $request->input("comentarios2");
            $resultados_evaluacion->comentarios3 = $request->input("comentarios3");
            $resultados_evaluacion->retroalimentacion = $request->input("retroalimentacionOtorgada");

            $factores_no = "";
            $suma = "";

            for($i = 0; $i < sizeof($respuestas); $i++){
                $numeroFactor = $i + 1;
                $factores_no = "fac_" . "$numeroFactor";

                $resultados_evaluacion->$factores_no = $respuestas[$i];

                $suma = intval($suma) + intval($respuestas[$i]);
            }

            $promedio = $suma * (100/(5*sizeof($respuestas)));
            $resultados_evaluacion->calificacion_promedio = $promedio;
            $resultados_evaluacion->save();

            return response()->json($resultados_evaluacion);
        }else{
            return response()->json(['errorSA' => 'Ya realizaste esta encuesta.'], 401);
        }

    }
    public function AddEvaluacionDep(Request $request)
    {
        $validatedData = $request->validate([
             'comentarios'       => 'required|min:50|max:1500'
         ]);

        $user = Auth::user();

        $id_evaluacionDep = $request->input("id_evaluacionDep");
        $respuestas = $request->input("respuestas");

   
    
        $comprEvaluacionRealizada = Evaluaciones::where('id_realizo_evaluacion', $user->id)
                                                ->where('periodo_evaluacion', $request->input("periodo_evaluacion"))
                                                ->where('nombre_evaluado', $request->input("nombre_evaluado"))
                                                ->where('id_evaluacion', 4)
                                                ->get()
                                                ->count();
        if($comprEvaluacionRealizada == 0){
            $depEvaluado = EvaluacionesDepartamento::select('name')->where('active', 1)->where('code', $id_evaluacionDep)->first();

            $resultados_evaluacion = new Evaluaciones();

            $resultados_evaluacion->id_realizo_evaluacion = $user->id;
            $resultados_evaluacion->id_evaluacion = 4;
            $resultados_evaluacion->nombre_evaluado = $depEvaluado->name;
            $resultados_evaluacion->periodo_evaluacion = $request->input("periodo_evaluacion");
            $resultados_evaluacion->fecha_realizada = $request->input("fecha_realizada");
            $resultados_evaluacion->id_sucursal = $request->input("id_sucursal");
            $resultados_evaluacion->comentarios = $request->input("comentarios");
            
            $factores_no = "";
            $suma = "";

            for($i = 0; $i < sizeof($respuestas); $i++){
                $numeroFactor = $i + 1;
                $factores_no = "fac_" . "$numeroFactor";

                $resultados_evaluacion->$factores_no = $respuestas[$i];

                $suma = intval($suma) + intval($respuestas[$i]);
            }

            $promedio = $suma * (100/(5*sizeof($respuestas)));
            $resultados_evaluacion->calificacion_promedio = $promedio;
            $resultados_evaluacion->save();

            return response()->json($resultados_evaluacion);
        }else{
            return response()->json(['errorSA' => 'Ya realizaste esta encuesta.'], 401);
        }
        
    }
    public function getQuestionsDesempenoEdit($id)
    {
        $questionsReference_Type = "DESEMPENO";
        $questions = Dictionary::where('reference_type', $questionsReference_Type)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DESEMPENO')->orderBy('sort', 'ASC')->count();
        $questionsType = "Desempeño";


        return response()->json(compact('no_questions', 'questions', 'questionsType', 'questionsReference_Type',));
    }
    public function getQuestionsLiderEdit($id)
    {
        $questionsReference_Type = "LIDER";
        $questions = Dictionary::where('reference_type', $questionsReference_Type)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'LIDER')->orderBy('sort', 'ASC')->count();
        $questionsType = "Lider";

        return response()->json(compact('no_questions', 'questions', 'questionsType', 'questionsReference_Type',));
    }
    public function getQuestionsGrupalEdit($id){
        $questionsReference_Type = "GRUPAL";
        $questions = Dictionary::where('reference_type', $questionsReference_Type)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'GRUPAL')->orderBy('sort', 'ASC')->count();
        $questionsType = "Grupal";

        return response()->json(compact('no_questions', 'questions', 'questionsType', 'questionsReference_Type',));
    }
    public function getQuestionsEntreLideresEdit($id){
        $questionsReference_Type = "EVALUACION LIDERES";
        $questions = Dictionary::where('reference_type', $questionsReference_Type)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'EVALUACION LIDERES')->orderBy('sort', 'ASC')->count();
        $questionsType = "Evaluación entre Lideres";

        return response()->json(compact('no_questions', 'questions', 'questionsType', 'questionsReference_Type',));
    }
    public function getQuestionsClimaLaboralEdit($id)
    {
        $questionsReference_Type = "CLIMA LABORAL";
        $questions = Dictionary::where('reference_type', $questionsReference_Type)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'CLIMA LABORAL')->orderBy('sort', 'ASC')->count();
        $questionsType = "Clima Laboral";

        return response()->json(compact('no_questions', 'questions', 'questionsType', 'questionsReference_Type',));
    }
    public function getQuestionsDepartamentoEdit($id)
    {
        $questionsReference_Type = "DEPARTAMENTOS";
        $questions = Dictionary::where('reference_type', $questionsReference_Type)->orderBy('sort', 'ASC')->get();
        $no_questions = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DESEMPENO')->orderBy('sort', 'ASC')->count();
        $questionsType = "Departamento";

        return response()->json(compact('no_questions', 'questions', 'questionsType', 'questionsReference_Type',));
    }
    public function getQuestions($id)
    {
        $question = Dictionary::where('id', $id)->first();

        return response()->json(compact('question'));
    }
    public function updateQuestions(Request $request)
    {
        $request->validate([
            'id' => 'required|min:1|max:30',
            'text' => 'required|min:1|max:500',
            'active' => 'required|min:1|max:30',
            'code' => 'required|min:1|max:30',
            'reference_type' => 'required|min:1|max:30',
        ]);
        
        $updateQuestion = Dictionary::where('id', '=', $request->input("id"))->first();
        $updateQuestion->text = $request->input("text");
        $updateQuestion->active = $request->input("active");
        $updateQuestion->save();

        $question = ($request->input("text"));
        return response()->json(compact('question'));
    }
    public function addQuestions(Request $request)
    {
        $request->validate([
            'text' => 'required|min:1|max:500',
            'active' => 'required|min:1|max:30',
            'questionsReference_Type' => 'required|min:1|max:30',
        ]);

        $No_questions = intval(Dictionary::where('reference_type', $request->input("questionsReference_Type"))->count());

        $updateQuestion =  new Dictionary;
        $updateQuestion->text = $request->input("text");
        $updateQuestion->reference_type = $request->input("questionsReference_Type");
        $updateQuestion->code = $No_questions + 1;
        $updateQuestion->sort = $No_questions + 1;
        $updateQuestion->save();

        $question = ($request->input("text"));
        return response()->json(compact('question'));
    }
    public function getEvaluacionesDepartamento()
    {
        $departamento = EvaluacionesDepartamento::orderBy('name', 'ASC')->get();

        return response()->json(compact('departamento'));
    }
    public function activarDepartamento($id)
    {
        $activarDepartamento = EvaluacionesDepartamento::where('id', '=', $id)->first();
        $activarDepartamento->active = 1;
        $activarDepartamento->save();

        $departamento = EvaluacionesDepartamento::orderBy('name', 'ASC')->get();

        return response()->json(compact('departamento'));
    }
    public function desactivarDepartamento($id)
    {
        $activarDepartamento = EvaluacionesDepartamento::where('id', '=', $id)->first();
        $activarDepartamento->active = 0;
        $activarDepartamento->save();

        $departamento = EvaluacionesDepartamento::orderBy('name', 'ASC')->get();

        return response()->json(compact('departamento'));
    }
    public function Resultados()
    {
        $usuarios = User::where("estatus", 1)->with("rol")->with("sucursal")->get();
        $sucursal = Store::select('id  as value', 'name as label')->where("active", 1)->orderBy('name', 'ASC')->get();
        $periodosDiferentes = Evaluaciones::select('periodo_evaluacion as label', 'periodo_evaluacion as value',)->distinct()->get();
        $departamentos_lst = EvaluacionesDepartamento::where('active', 1)->orderBy('code', 'ASC')->with('lider')->get();
        $lideres = User::where("estatus", 1)->where("lider", 1)->with("rol")->with("sucursal")->get();

        return response()->json(compact('usuarios', 'sucursal', 'periodosDiferentes', 'departamentos_lst', 'lideres'));
    }
     public function getDesempenoValidacion($periodos_lst)
     {
        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();
        $año = date("Y"); //Obtenemos año actual
        $Anterior = strtotime('-1 month', strtotime(date('Y-m')));
        $mesAnterior = substr(date('m', $Anterior), 1);

        $mes_anterior = date('m', strtotime('-1 month'));
        intval($mes_anterior);

        $periodo1 = $meses[$mes_anterior-1]->text . " - " . $año;

        $desempenoValidacion = Evaluaciones::select("id")->where('id_evaluacion', 1)->where('periodo_evaluacion', $periodo1)->first();

     

        return response()->json(compact('desempenoValidacion'));
    }
    public function getSincontestar($periodo)
    {
        $noUsuarios = Users::select('id')->orderBy('id', 'ASC')->where('estatus', 1)->count();
        $id = Users::select('id')->where('estatus', 1)->get();

        $allUsuarios = array();

        for($i = 0; $i < $noUsuarios; $i++){
        $usuarios = Users::select('id')->where('id', $id[$i]->id)->where('estatus', 1)->first();
        $departamento = Users::select('id_departamento')->where('id', $id[$i]->id)->where('estatus', 1)->first();        
        $correo = Users::selectRaw("email")->where('id', $id[$i]->id)->where('estatus', 1)->first();
        $id_sucursal = Users::selectRaw("sucursal_id")->where('id', $id[$i]->id)->where('estatus', 1)->first();
        $sucursal = Store::select('name')->where('id', $id_sucursal->sucursal_id)->first();

        if($departamento->id_departamento != 10){
        $relacionesevaluadores = EvaluacionesRelaciones:: select('RELACIONES')->where('id', '=', $departamento->id_departamento)->get();
        $explodeevaluadores = explode('*', $relacionesevaluadores);
        $departamentosAEvaluar = $explodeevaluadores[1];
        $idRelacionesEvaluados = explode(',', $departamentosAEvaluar);
        $noEvaluacionesEsperadas = Dictionary::where("reference_type", 'DEPARTAMENTO')->whereIn('code', $idRelacionesEvaluados)->where('active', 1)->orderBy('created_at', 'ASC')->count();  
        $noEvaluacionesRealizadas = Evaluaciones:: where('id_realizo_evaluacion', $id[$i]->id)->where('id_evaluacion', 4)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->count();
        $poEvaluacionesRealizadas = round(($noEvaluacionesRealizadas*100)/$noEvaluacionesEsperadas);
        }

        //$idUsuario = $id[$i];

        if($poEvaluacionesRealizadas == 0){

        //$Usuarios = array("idUsuario"=>$idUsuario->id, "usuarios"=>$usuarios->label, "correo"=>$correo->email, "sucursal"=>$sucursal->name, "poEvaluacionesRealizadas"=>$poEvaluacionesRealizadas);
        //$Usuarios = array("idUsuario"=>$idUsuario->id);
        //$usuario0 = json_encode($usuarios);
        array_push($allUsuarios, $usuarios->id);
        }
        
        // $object = json_encode($Usuarios);
    }
    $usuariosSinContestar = json_encode($allUsuarios);
    $usuariosSinContestar = explode('[', $usuariosSinContestar);
    $usuariosSinContestar=$usuariosSinContestar[1];
    $usuariosSinContestar = explode(']', $usuariosSinContestar);
    $usuariosSinContestar=$usuariosSinContestar[0];
    $explodeevaluadores = explode(',', $usuariosSinContestar);
    $usuariosSinContestar = User::select('name', 'primer_apellido', 'segundo_apellido', 'email', 'puesto')->wherein('id', $explodeevaluadores)->get();

    


    // for($x = 0; $x < sizeof($allUsuarios); $x++){
    //     error_log($allUsuarios[$x]);
    // }

    //$usuariosSinContestar = Users::whereIn('id', $$allUsuarios[]->id)->where('estatus', 1)->orderBy('created_at', 'ASC')->get();

    //error_log($usuariosSinContestar);

  
    // $resultado = json_encode($allUsuarios);
    // error_log($resultado);

    // $usuariosConteo = Users::
    //         join('resultados_evaluaciones', 'users.id', '=', 'resultados_evaluaciones.id_realizo_evaluacion')
    //         ->select('users.id as id', 'users.name', 'users.email', DB::raw('count(id_realizo_evaluacion) as conteo'))
    //         ->where('periodo_evaluacion', $periodo)
    //         ->where('users.estatus', 1)
    //         ->groupBy('users.id', 'users.name', 'users.email')
    //         ->get();
    // error_log($usuariosConteo);
    return response()->json(compact('usuariosSinContestar'));

    
    }
    public function getMostrarResultados($periodo){ 
            $departamentos_lst = EvaluacionesDepartamento::where('active', 1)->orderBy('code', 'ASC')->get(); 

            $numerocolaboradores = DB::table('users', 't1')
            ->select('t1.jefe_inmediato',
            DB::raw('count(t2.id) as numerocolaboradores'))
            ->join('users as t2', 't2.id', '=', 't1.jefe_inmediato')
            ->groupBy('t1.jefe_inmediato'); 

            $numerojefes = DB::table('users', 't1')
            ->select('t1.id',  DB::raw('count(t2.id) as numerojefes'))
            ->join('users as t2', 't2.id', '=', 't1.jefe_inmediato')
            ->groupBy('t1.id');   

            $evaluaciongrupal = DB::table('users', 't1')
            ->select('t1.id_departamento', DB::raw('count(t1.id) as evaluaciongrupal'))
            ->where('t1.supervisor' , '=', '1')
            ->groupBy('t1.id_departamento'); 

    

            $usuariosRespuestas = DB::table('users')
            ->select('users.id','users.name',
            'users.primer_apellido',
            'users.segundo_apellido',
            'users.email',
            DB::raw('count(resultados_evaluaciones.id_evaluacion) EVALUACIONESHECHAS'),
            'stores.name as sucursal',   
            'evaluaciones_relaciones.numero_evaluaciones',
            'numerocolaboradores.numerocolaboradores',
            'numerojefes.numerojefes',
            'evaluaciongrupal.evaluaciongrupal',
            DB::raw('CONCAT(count(resultados_evaluaciones.id_evaluacion),"-", evaluaciones_relaciones.numero_evaluaciones
            + CASE WHEN numerocolaboradores.numerocolaboradores IS NULL THEN 0 ELSE numerocolaboradores.numerocolaboradores END
            + CASE WHEN numerojefes.numerojefes IS NULL THEN 0 ELSE numerojefes.numerojefes END
            + CASE WHEN evaluaciongrupal.evaluaciongrupal IS NULL THEN 0 ELSE evaluaciongrupal.evaluaciongrupal END ) as evaluaciones')
            )
            ->join('resultados_evaluaciones', 'resultados_evaluaciones.id_realizo_evaluacion', '=', 'users.id')
            ->join('stores', 'stores.id', '=', 'users.sucursal_id')
            ->join('evaluaciones_relaciones', 'evaluaciones_relaciones.code', '=', 'users.id_departamento')
            ->leftJoinSub($numerocolaboradores, 'numerocolaboradores', function ($join)
            {
                $join->on('numerocolaboradores.jefe_inmediato', '=', 'users.id');
            }) 
            ->leftJoinSub($numerojefes, 'numerojefes', function ($join)
            {
                $join->on('numerojefes.id', '=', 'users.id');
            })  
            ->leftJoinSub($evaluaciongrupal, 'evaluaciongrupal', function ($join)
            {
                $join->on('evaluaciongrupal.id_departamento', '=', 'users.id_departamento');
            })  
            ->where('resultados_evaluaciones.periodo_evaluacion' , '=', $periodo) 
            ->groupBy('users.id','users.name','users.primer_apellido','users.segundo_apellido','users.email','stores.name','evaluaciones_relaciones.numero_evaluaciones'
            ,'numerocolaboradores.numerocolaboradores','numerojefes.numerojefes','evaluaciongrupal.evaluaciongrupal')
            ->orderBy('users.name')->get();

        return response()->json(compact('usuariosRespuestas','departamentos_lst'));
    }
    public function addSancion($id, $periodo)
    {
        $evaluacion = Evaluaciones::where('periodo_evaluacion', $periodo)->where('id_evaluado', $id)->first();
        $calificacion = $evaluacion->calificacion_promedio;

        $newcalificacion = $calificacion - 10;

        $evaluacion->calificacion_promedio = $newcalificacion;
        $evaluacion->save();

    }
    public function getResultados($id, $periodo)
    {
        $sumaPromedios = 0;
        $sumafactores = 0;
        $promFactores = 0;
        $resultadosDesempenoPromedio = 0;
        $FactoresDesempeno =  array();
        $FactoresLabelsDesempeno =  array();
        $promediosFactoresLider =  array();
        $promediosFactoresLabelsLider =  array();
        $promedioLider = 0;


        $resultadosDesempeno = Evaluaciones::where('id_evaluado', $id)->where('id_evaluacion', 1)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->first();
        $resultadosLider = Evaluaciones::where('id_evaluado', $id)->where('id_evaluacion', 2)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->get(); 
        $NoResultadosLider = Evaluaciones::where('id_evaluado', $id)->where('id_evaluacion', 2)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->count();
        $usuarioEvaluado = User::selectRaw("id, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) name, id_departamento, sucursal_id, puesto")->where('id', $id)->first();
        $comentarios = Evaluaciones::select("comentarios", "created_at", )->where('id_evaluado', $id)->where('periodo_evaluacion', $periodo)->where('id_evaluacion', 1)
            ->orwhere('id_evaluado', $id)->where('periodo_evaluacion', $periodo)->where('id_evaluacion', 2)
            ->orderBy('created_at', 'ASC')->get();
        $retroalimentacionObtenida = Evaluaciones::select("retroalimentacion")->where('id_realizo_evaluacion', $id)->where('periodo_evaluacion', $periodo)->first();

        $noEvaluacionesRealizadas = Evaluaciones:: where('id_realizo_evaluacion', $id)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->count();
       
        $relacionesevaluadores = EvaluacionesRelaciones:: select('RELACIONES')->where('id', '=', $usuarioEvaluado->id_departamento)->get();
        $explodeevaluadores = explode('*', $relacionesevaluadores);
        $departamentosAEvaluar=$explodeevaluadores[1];
        $idRelacionesEvaluados = explode(',', $departamentosAEvaluar);
        $noEvaluacionesEsperadas = Dictionary::where("reference_type", 'DEPARTAMENTO')->whereIn('code', $idRelacionesEvaluados)->where('active', 1)->orderBy('created_at', 'ASC')->count();  

        $poEvaluacionesRealizadas = round(($noEvaluacionesRealizadas*100)/$noEvaluacionesEsperadas);

        for($i = 0; $i < sizeof($resultadosLider); $i++){
            $sumaPromedios = $resultadosLider[$i]->calificacion_promedio + $sumaPromedios;
        }

        $no_questionsLider = Dictionary::select('code as value', 'text as label')->where('reference_type', 'LIDER')->where('active', 1)->orderBy('sort', 'ASC')->count();
        $questionsLider = Dictionary::select('text')->where('reference_type', 'LIDER')->where('active', 1)->orderBy('sort', 'ASC')->get();

        if($NoResultadosLider != 0){

            for($i = 0; $i < $no_questionsLider; $i++){
                $factor = explode(".", $questionsLider[$i]->text);
                $factorConsulta = "fac_" . ($i+1);
                array_push($promediosFactoresLabelsLider, $factor[0]);
    
                $sumafactores = 0;
                
                for($j = 0; $j < sizeof($resultadosLider); $j++){
                    $sumafactores = $resultadosLider[$j]->$factorConsulta + $sumafactores;
                }
    
                $promFactores = round($sumafactores/sizeof($resultadosLider),2);
    
                array_push($promediosFactoresLider, $promFactores);
            }

            $promedioLider = round($sumaPromedios/sizeof($resultadosLider),2);
        }

        if($resultadosDesempeno == NULL){
            $resultadosDesempeno = 0; 
        }else{
            $resultadosDesempenoPromedio = $resultadosDesempeno->calificacion_promedio;

            $no_questionsDesempeno = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DESEMPENO')->where('active', 1)->orderBy('sort', 'ASC')->count();
            $questionsDesempeno = Dictionary::select('text')->where('reference_type', 'DESEMPENO')->where('active', 1)->orderBy('sort', 'ASC')->get();

            for($i = 0; $i < $no_questionsDesempeno; $i++){
                $factor = explode(".", $questionsDesempeno[$i]->text);
                $factorConsulta = "fac_" . ($i+1);
                array_push($FactoresLabelsDesempeno, $factor[0]);

                $FactorDesem = $resultadosDesempeno->$factorConsulta;
                array_push($FactoresDesempeno, $FactorDesem);
            }
        }

        $resultadosDiferentes = Evaluaciones::select('periodo_evaluacion as label')->distinct()->get();
     

        return response()->json(compact('poEvaluacionesRealizadas', 'noEvaluacionesRealizadas', 'noEvaluacionesEsperadas', 'comentarios', 'resultadosDesempenoPromedio', 'resultadosLider', 'usuarioEvaluado', 'periodo', 'NoResultadosLider', 'promedioLider', 'promediosFactoresLider', 'promediosFactoresLabelsLider', 'FactoresDesempeno', 'FactoresLabelsDesempeno', 'retroalimentacionObtenida'));
    }
    public function imprimirEvaluacion($id, $periodo)
    {
        $sumaPromedios = 0;
        $sumafactores = 0;
        $promFactores = 0;
        $resultadosDesempenoPromedio = 0;
        $FactoresDesempeno =  array();
        $FactoresLabelsDesempeno =  array();
        $promediosFactoresLider =  array();
        $promediosFactoresLabelsLider =  array();
        $promedioLider = 0;

        $resultadosDesempeno = Evaluaciones::where('id_evaluado', $id)->where('id_evaluacion', 1)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->first();
        $resultadosLider = Evaluaciones::where('id_evaluado', $id)->where('id_evaluacion', 2)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->get(); 
        $NoResultadosLider = Evaluaciones::where('id_evaluado', $id)->where('id_evaluacion', 2)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->count();
        $usuarioEvaluado = User::selectRaw("id, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) name, id_departamento, sucursal_id, puesto")->where('id', $id)->first();
        $comentarios = Evaluaciones::select("comentarios", "created_at", )->where('id_evaluado', $id)->where('periodo_evaluacion', $periodo)->where('id_evaluacion', 1)
            ->orwhere('id_evaluado', $id)->where('periodo_evaluacion', $periodo)->where('id_evaluacion', 2)
            ->orderBy('created_at', 'ASC')->get();
        $retroalimentacionObtenida = Evaluaciones::select("retroalimentacion")->where('id_realizo_evaluacion', $id)->where('periodo_evaluacion', $periodo)->first();

        $noEvaluacionesRealizadas = Evaluaciones:: where('id_realizo_evaluacion', $id)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->count();
       
        $relacionesevaluadores = EvaluacionesRelaciones:: select('RELACIONES')->where('id', '=', $usuarioEvaluado->id_departamento)->get();
        $explodeevaluadores = explode('*', $relacionesevaluadores);
        $departamentosAEvaluar=$explodeevaluadores[1];
        $idRelacionesEvaluados = explode(',', $departamentosAEvaluar);
        $noEvaluacionesEsperadas = Dictionary::where("reference_type", 'DEPARTAMENTO')->whereIn('code', $idRelacionesEvaluados)->where('active', 1)->orderBy('created_at', 'ASC')->count();  

        $poEvaluacionesRealizadas = round(($noEvaluacionesRealizadas*100)/$noEvaluacionesEsperadas);

        for($i = 0; $i < sizeof($resultadosLider); $i++){
            $sumaPromedios = $resultadosLider[$i]->calificacion_promedio + $sumaPromedios;
        }

        $no_questionsLider = Dictionary::select('code as value', 'text as label')->where('reference_type', 'LIDER')->where('active', 1)->orderBy('sort', 'ASC')->count();
        $questionsLider = Dictionary::select('text')->where('reference_type', 'LIDER')->where('active', 1)->orderBy('sort', 'ASC')->get();
        $pdesempeno = "";
        if($NoResultadosLider != 0){

            for($i = 0; $i < $no_questionsLider; $i++){
                $factor = explode(".", $questionsLider[$i]->text);
                $factorConsulta = "fac_" . ($i+1);
                array_push($promediosFactoresLabelsLider, $factor[0]);
    
                $sumafactores = 0;
                
                for($j = 0; $j < sizeof($resultadosLider); $j++){
                    $sumafactores = $resultadosLider[$j]->$factorConsulta + $sumafactores;
                }
    
                $promFactores = round($sumafactores/sizeof($resultadosLider),2);
    
                array_push($promediosFactoresLider, $promFactores);
            }

            $promedioLider = round($sumaPromedios/sizeof($resultadosLider),2);

            if($promedioLider == 100){
                $pdesempeno = "Extraordinario";
            }else if($promedioLider >= 95){
                $pdesempeno = "Excelente";
            }else if($promedioLider >= 85){
                $pdesempeno = "Notable";
            }else if($promedioLider >= 80){
                $pdesempeno = "Aceptable";
            }else{
                $pdesempeno = "Insuficiente";
            }
        }else{
            if($resultadosDesempenoPromedio == 100){
                $pdesempeno = "Extraordinario";
            }else if($resultadosDesempenoPromedio >= 95){
                $pdesempeno = "Excelente";
            }else if($resultadosDesempenoPromedio >= 85){
                $pdesempeno = "Notable";
            }else if($resultadosDesempenoPromedio >= 80){
                $pdesempeno = "Aceptable";
            }else{
                $pdesempeno = "Insuficiente";
            }
        }

        if($resultadosDesempeno == NULL){
            $resultadosDesempeno = 0; 
        }else{
            $resultadosDesempenoPromedio = $resultadosDesempeno->calificacion_promedio;

            $no_questionsDesempeno = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DESEMPENO')->where('active', 1)->orderBy('sort', 'ASC')->count();
            $questionsDesempeno = Dictionary::select('text')->where('reference_type', 'DESEMPENO')->where('active', 1)->orderBy('sort', 'ASC')->get();

            for($i = 0; $i < $no_questionsDesempeno; $i++){
                $factor = explode(".", $questionsDesempeno[$i]->text);
                $factorConsulta = "fac_" . ($i+1);
                array_push($FactoresLabelsDesempeno, $factor[0]);

                $FactorDesem = $resultadosDesempeno->$factorConsulta;
                array_push($FactoresDesempeno, $FactorDesem);
            }
        }
        $fecha = date("d-m-Y");
        if($NoResultadosLider != 0){
            $resultadosDesempenoPromedio = $promedioLider;
        }else{
            $promediosFactoresLider =  $FactoresDesempeno;
                  if($resultadosDesempenoPromedio == 100){
                $pdesempeno = "Extraordinario";
            }else if($resultadosDesempenoPromedio >= 95){
                $pdesempeno = "Excelente";
            }else if($resultadosDesempenoPromedio >= 85){
                $pdesempeno = "Notable";
            }else if($resultadosDesempenoPromedio >= 80){
                $pdesempeno = "Aceptable";
            }else{
                $pdesempeno = "Insuficiente";
            }
        }
        $pdf = \PDF::loadView('Reportes.evaluacionnormal',compact('noEvaluacionesEsperadas', 'pdesempeno','promediosFactoresLider','fecha','periodo','usuarioEvaluado','noEvaluacionesRealizadas','resultadosDesempenoPromedio'));
        return $pdf->download('Evaluacion ' .$usuarioEvaluado->name.' '.$periodo.'.pdf');
    }
    public function imprimirEvaluacionLider($id, $periodo){
        $sumaPromedios = 0;
        $usuarioEvaluado = User::selectRaw("id, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) name, id_departamento, sucursal_id, puesto")->where('id', $id)->first();          
        $noEvaluacionesRealizadas = Evaluaciones:: where('id_realizo_evaluacion', $id)->where('id_evaluacion', 6)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->count();
        $relacionesevaluadores = EvaluacionesRelaciones:: select('RELACIONES')->where('id', '=', $usuarioEvaluado->id_departamento)->get();
        $explodeevaluadores = explode('*', $relacionesevaluadores);
        $departamentosAEvaluar=$explodeevaluadores[1];
        $promediosFactoresLider =  array();
        $promediosFactoresLabelsLider =  array();
        $idRelacionesEvaluados = explode(',', $departamentosAEvaluar);
        $NoResultadosLider = Evaluaciones::where('id_evaluado', $id)->where('id_evaluacion', 6)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->count();
        $noEvaluacionesEsperadas = Dictionary::where("reference_type", 'DEPARTAMENTO')->whereIn('code', $idRelacionesEvaluados)->where('active', 1)->orderBy('created_at', 'ASC')->count(); 
        $fecha = date("d-m-Y");
        $resultadosLider = Evaluaciones::where('id_evaluado', $id)->where('id_evaluacion', 6)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->get();
        for($i = 0; $i < sizeof($resultadosLider); $i++){
            $sumaPromedios = $resultadosLider[$i]->calificacion_promedio + $sumaPromedios;
        }
        $promedioLider = round($sumaPromedios/sizeof($resultadosLider),2);
        // ,'datos', 'labels',',
        $pdesempeno = "";
        if($promedioLider == 100){
            $pdesempeno = "Extraordinario";
        }else if($promedioLider >= 95){
            $pdesempeno = "Excelente";
        }else if($promedioLider >= 85){
            $pdesempeno = "Notable";
        }else if($promedioLider >= 80){
            $pdesempeno = "Aceptable";
        }else{
            $pdesempeno = "Insuficiente";
        }
        $no_questionsLider = Dictionary::select('code as value', 'text as label')->where('reference_type', 'EVALUACION LIDERES')->where('active', 1)->orderBy('sort', 'ASC')->count();
        $questionsLider = Dictionary::select('text')->where('reference_type', 'EVALUACION LIDERES')->where('active', 1)->orderBy('sort', 'ASC')->get();
        if($NoResultadosLider != 0){

            for($i = 0; $i < $no_questionsLider; $i++){
                $factor = explode(".", $questionsLider[$i]->text);
                $factorConsulta = "fac_" . ($i+1);
                array_push($promediosFactoresLabelsLider, $factor[0]);
    
                $sumafactores = 0;
                
                for($j = 0; $j < sizeof($resultadosLider); $j++){
                    $sumafactores = $resultadosLider[$j]->$factorConsulta + $sumafactores;
                }
    
                $promFactores = round($sumafactores/sizeof($resultadosLider),2);
                array_push($promediosFactoresLider, $promFactores);
            }
            $promedioLider = round($sumaPromedios/sizeof($resultadosLider),2);
        }
        $pdf = \PDF::loadView('Reportes.evaluacion',compact('promediosFactoresLider','usuarioEvaluado','noEvaluacionesRealizadas','noEvaluacionesEsperadas','fecha','promedioLider','periodo','pdesempeno','NoResultadosLider'));
        return $pdf->download('Evaluacion Lider ' .$usuarioEvaluado->name.' '.$periodo.'.pdf');
    }
    public function getResultadosLider($id, $periodo)
    {
        $sumaPromedios = 0;
        $sumafactores = 0;
        $promFactores = 0;
        $promediosFactoresLider =  array();
        $promediosFactoresLabelsLider =  array();
        $promedioLider = 0;

        $resultadosLider = Evaluaciones::where('id_evaluado', $id)->where('id_evaluacion', 6)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->get(); 
        $NoResultadosLider = Evaluaciones::where('id_evaluado', $id)->where('id_evaluacion', 6)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->count();
        $usuarioEvaluado = User::selectRaw("id, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) name, id_departamento, sucursal_id, puesto")->where('id', $id)->first();
        $comentarios = Evaluaciones::select("comentarios", "created_at", )->where('id_evaluado', $id)->where('periodo_evaluacion', $periodo)->where('id_evaluacion', 6)
            ->orwhere('id_evaluado', $id)->where('periodo_evaluacion', $periodo)->where('id_evaluacion', 6)
            ->orderBy('created_at', 'ASC')->get();
        
        $noEvaluacionesRealizadas = Evaluaciones:: where('id_realizo_evaluacion', $id)->where('id_evaluacion', 6)->where('periodo_evaluacion', $periodo)->orderBy('created_at', 'ASC')->count();
        
        $relacionesevaluadores = EvaluacionesRelaciones:: select('RELACIONES')->where('id', '=', $usuarioEvaluado->id_departamento)->get();
        $explodeevaluadores = explode('*', $relacionesevaluadores);
        $departamentosAEvaluar=$explodeevaluadores[1];
        $idRelacionesEvaluados = explode(',', $departamentosAEvaluar);
        $noEvaluacionesEsperadas = Dictionary::where("reference_type", 'DEPARTAMENTO')->whereIn('code', $idRelacionesEvaluados)->where('active', 1)->orderBy('created_at', 'ASC')->count();  

        $poEvaluacionesRealizadas = round(($noEvaluacionesRealizadas*100)/$noEvaluacionesEsperadas);

        for($i = 0; $i < sizeof($resultadosLider); $i++){
            $sumaPromedios = $resultadosLider[$i]->calificacion_promedio + $sumaPromedios;
        }

        $no_questionsLider = Dictionary::select('code as value', 'text as label')->where('reference_type', 'EVALUACION LIDERES')->where('active', 1)->orderBy('sort', 'ASC')->count();
        $questionsLider = Dictionary::select('text')->where('reference_type', 'EVALUACION LIDERES')->where('active', 1)->orderBy('sort', 'ASC')->get();

        if($NoResultadosLider != 0){

            for($i = 0; $i < $no_questionsLider; $i++){
                $factor = explode(".", $questionsLider[$i]->text);
                $factorConsulta = "fac_" . ($i+1);
                array_push($promediosFactoresLabelsLider, $factor[0]);
    
                $sumafactores = 0;
                
                for($j = 0; $j < sizeof($resultadosLider); $j++){
                    $sumafactores = $resultadosLider[$j]->$factorConsulta + $sumafactores;
                }
    
                $promFactores = round($sumafactores/sizeof($resultadosLider),2);
                array_push($promediosFactoresLider, $promFactores);
            }

            $promedioLider = round($sumaPromedios/sizeof($resultadosLider),2);
        }

        $resultadosDiferentes = Evaluaciones::select('periodo_evaluacion as label')->distinct()->get();

        return response()->json(compact('poEvaluacionesRealizadas', 'noEvaluacionesRealizadas', 'noEvaluacionesEsperadas', 'comentarios',  'usuarioEvaluado', 'periodo', 'NoResultadosLider', 'promedioLider', 'promediosFactoresLider', 'promediosFactoresLabelsLider'));
    }
    public function getResultadosDep($idDep, $periodoDep)
    {
       
        $departamentoEvaluado = EvaluacionesDepartamento::where('code', $idDep)->where('active', 1)->orderBy('created_at', 'ASC')->first();
        $resultadosDepartamento = Evaluaciones::where('nombre_evaluado', $departamentoEvaluado->name)->where('id_evaluacion', 4)->where('periodo_evaluacion', $periodoDep)->orderBy('created_at', 'ASC')->get();
        $noResultadosDepartamento = Evaluaciones::where('nombre_evaluado', $departamentoEvaluado->name)->where('id_evaluacion', 4)->where('periodo_evaluacion', $periodoDep)->orderBy('created_at', 'ASC')->count();  
        $comentarios = Evaluaciones::select("comentarios", "created_at")->where('nombre_evaluado', $departamentoEvaluado->name)->where('id_evaluacion', 4)->where('periodo_evaluacion', $periodoDep)->orderBy('created_at', 'ASC')->get();

        
        $relacionesevaluadores = EvaluacionesRelaciones:: select('RELACIONES')->where('id', '=', $departamentoEvaluado->id_dictionaries)->get();
        $explodeevaluadores = explode('*', $relacionesevaluadores);
        $departamentosEvaluadores=$explodeevaluadores[1];
        $idRelacionesEvaluadores = explode(',', $departamentosEvaluadores);
        $noEvaluacionesDepartamento = Users::whereIn('id_departamento', $idRelacionesEvaluadores)->where('estatus', 1)->orderBy('created_at', 'ASC')->count();  

        $sumaPromedios = 0;
        $sumafactores = 0;
        $promFactores = 0;
        $promediosFactores =  array();
        $promediosFactoresLabels =  array();

        if($noResultadosDepartamento != 0){

            for($i = 0; $i < sizeof($resultadosDepartamento); $i++){
                $sumaPromedios = $resultadosDepartamento[$i]->calificacion_promedio + $sumaPromedios;
            }
    
            $no_questionsDepartamento = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DEPARTAMENTOS')->where('active', 1)->orderBy('sort', 'ASC')->count();
            $questionsDepartamento = Dictionary::select('text')->where('reference_type', 'DEPARTAMENTOS')->where('active', 1)->orderBy('sort', 'ASC')->get();
    
            for($i = 0; $i < $no_questionsDepartamento; $i++){
                $factor = explode(".", $questionsDepartamento[$i]->text);
                $factorConsulta = "fac_" . ($i+1);
                array_push($promediosFactoresLabels, $factor[0]);
    
                $sumafactores = 0;
                
                for($j = 0; $j < sizeof($resultadosDepartamento); $j++){
                    $sumafactores = $resultadosDepartamento[$j]->$factorConsulta + $sumafactores;
                }
    
                $promFactores = round($sumafactores/sizeof($resultadosDepartamento),2);
    
                array_push($promediosFactores, $promFactores);
            }

            $promedioDepartamento = round($sumaPromedios/sizeof($resultadosDepartamento),2);
        }

        $resultadosDiferentes = Evaluaciones::select('periodo_evaluacion as label')->distinct()->get();

        return response()->json(compact('comentarios', 'noEvaluacionesDepartamento', 'noResultadosDepartamento', 'departamentoEvaluado', 'resultadosDepartamento', 'periodoDep', 'promedioDepartamento', 'promediosFactores', 'promediosFactoresLabels'));
    }
    public function imprimirEvaluacionDepa($idDep, $periodoDep)
    {
       
        $departamentoEvaluado = EvaluacionesDepartamento::where('code', $idDep)->where('active', 1)->orderBy('created_at', 'ASC')->first();
        $resultadosDepartamento = Evaluaciones::where('nombre_evaluado', $departamentoEvaluado->name)->where('id_evaluacion', 4)->where('periodo_evaluacion', $periodoDep)->orderBy('created_at', 'ASC')->get();
        $noResultadosDepartamento = Evaluaciones::where('nombre_evaluado', $departamentoEvaluado->name)->where('id_evaluacion', 4)->where('periodo_evaluacion', $periodoDep)->orderBy('created_at', 'ASC')->count();  
        $comentarios = Evaluaciones::select("comentarios", "created_at")->where('nombre_evaluado', $departamentoEvaluado->name)->where('id_evaluacion', 4)->where('periodo_evaluacion', $periodoDep)->orderBy('created_at', 'ASC')->get();

        
        $relacionesevaluadores = EvaluacionesRelaciones:: select('RELACIONES')->where('id', '=', $departamentoEvaluado->id_dictionaries)->get();
        $explodeevaluadores = explode('*', $relacionesevaluadores);
        $departamentosEvaluadores=$explodeevaluadores[1];
        $idRelacionesEvaluadores = explode(',', $departamentosEvaluadores);
        $noEvaluacionesDepartamento = Users::whereIn('id_departamento', $idRelacionesEvaluadores)->where('estatus', 1)->orderBy('created_at', 'ASC')->count();  

        $sumaPromedios = 0;
        $sumafactores = 0;
        $promFactores = 0;
        $promediosFactores =  array();
        $promediosFactoresLabels =  array();

        if($noResultadosDepartamento != 0){

            for($i = 0; $i < sizeof($resultadosDepartamento); $i++){
                $sumaPromedios = $resultadosDepartamento[$i]->calificacion_promedio + $sumaPromedios;
            }
    
            $no_questionsDepartamento = Dictionary::select('code as value', 'text as label')->where('reference_type', 'DEPARTAMENTOS')->where('active', 1)->orderBy('sort', 'ASC')->count();
            $questionsDepartamento = Dictionary::select('text')->where('reference_type', 'DEPARTAMENTOS')->where('active', 1)->orderBy('sort', 'ASC')->get();
    
            for($i = 0; $i < $no_questionsDepartamento; $i++){
                $factor = explode(".", $questionsDepartamento[$i]->text);
                $factorConsulta = "fac_" . ($i+1);
                array_push($promediosFactoresLabels, $factor[0]);
    
                $sumafactores = 0;
                
                for($j = 0; $j < sizeof($resultadosDepartamento); $j++){
                    $sumafactores = $resultadosDepartamento[$j]->$factorConsulta + $sumafactores;
                }
    
                $promFactores = round($sumafactores/sizeof($resultadosDepartamento),2);
    
                array_push($promediosFactores, $promFactores);
            }

            $promedioDepartamento = round($sumaPromedios/sizeof($resultadosDepartamento),2);
        }
        $pdesempeno = "";
        if($promedioDepartamento == 100){
            $pdesempeno = "Extraordinario";
        }else if($promedioDepartamento >= 95){
            $pdesempeno = "Excelente";
        }else if($promedioDepartamento >= 85){
            $pdesempeno = "Notable";
        }else if($promedioDepartamento >= 80){
            $pdesempeno = "Aceptable";
        }else{
            $pdesempeno = "Insuficiente";
        }
        $fecha = date("d-m-Y");
        $pdf = \PDF::loadView('Reportes.evaluaciondepa',compact('promediosFactores','departamentoEvaluado','noResultadosDepartamento','noEvaluacionesDepartamento','fecha','promedioDepartamento','periodoDep','pdesempeno'));
        return $pdf->download('Evaluacion ' .$departamentoEvaluado->name.' '.$periodoDep.'.pdf');
    }
    public function getResultadosClima($periodoCli)
    {
        $resultadosClima = Evaluaciones::where('id_evaluacion', 3)->where('periodo_evaluacion', $periodoCli)->orderBy('created_at', 'ASC')->get();
        $noResultadosClima = Evaluaciones::where('id_evaluacion', 3)->where('periodo_evaluacion', $periodoCli)->orderBy('created_at', 'ASC')->count();
        $comentarios = Evaluaciones::select("comentarios", "created_at")->where('id_evaluacion', 3)->where('periodo_evaluacion', $periodoCli)->orderBy('created_at', 'ASC')->get();
        $comentarios2 = Evaluaciones::select("comentarios2", "created_at")->where('id_evaluacion', 3)->where('periodo_evaluacion', $periodoCli)->orderBy('created_at', 'ASC')->get();
        $comentarios3 = Evaluaciones::select("comentarios3", "created_at")->where('id_evaluacion', 3)->where('periodo_evaluacion', $periodoCli)->orderBy('created_at', 'ASC')->get();

        $sumaPromedios = 0;
        $sumafactores = 0;
        $promFactores = 0;
        $promediosFactores =  array();
        $promediosFactoresLabels =  array();

        if($noResultadosClima != 0){

            for($i = 0; $i < sizeof($resultadosClima); $i++){
                $sumaPromedios = $resultadosClima[$i]->calificacion_promedio + $sumaPromedios;
            }
    
            $no_questionsClima = Dictionary::select('code as value', 'text as label')->where('reference_type', 'CLIMA LABORAL')->where('active', 1)->orderBy('sort', 'ASC')->count();
            $questionsClima = Dictionary::select('text')->where('reference_type', 'CLIMA LABORAL')->where('active', 1)->orderBy('sort', 'ASC')->get();
    
            for($i = 0; $i < $no_questionsClima; $i++){
                $factor = explode(".", $questionsClima[$i]->text);
                $factorConsulta = "fac_" . ($i+1);
                array_push($promediosFactoresLabels, $factor[0]);
    
                $sumafactores = 0;
                
                for($j = 0; $j < sizeof($resultadosClima); $j++){
                    $sumafactores = $resultadosClima[$j]->$factorConsulta + $sumafactores;
                }
    
                $promFactores = round($sumafactores/sizeof($resultadosClima),2);
    
                array_push($promediosFactores, $promFactores);
            }

            $promedioClima = round($sumaPromedios/sizeof($resultadosClima),2);
        }

        $resultadosDiferentes = Evaluaciones::select('periodo_evaluacion as label')->distinct()->get();

        return response()->json(compact('comentarios', 'comentarios2', 'comentarios3', 'noResultadosClima', 'resultadosClima', 'periodoCli', 'promedioClima', 'promediosFactores', 'promediosFactoresLabels',));
    }
    public function getResultadosGrupalContabilidad($periodoCli)
    {
        $resultadosGrupal = Evaluaciones::where('id_evaluacion', 5)->where('id_departamento', 2)->where('periodo_evaluacion', $periodoCli)->orderBy('created_at', 'ASC')->get();
        $noResultadosGrupal = Evaluaciones::where('id_evaluacion', 5)->where('id_departamento', 2)->where('periodo_evaluacion', $periodoCli)->orderBy('created_at', 'ASC')->count();
        $comentarios = Evaluaciones::select("comentarios", "created_at")->where('id_departamento', 2)->where('id_evaluacion', 5)->where('periodo_evaluacion', $periodoCli)->orderBy('created_at', 'ASC')->get();

        $sumaPromedios = 0;
        $sumafactores = 0;
        $promFactores = 0;
        $promediosFactores =  array();
        $promediosFactoresLabels =  array();

        if($noResultadosGrupal != 0){

            for($i = 0; $i < sizeof($resultadosGrupal); $i++){
                $sumaPromedios = $resultadosGrupal[$i]->calificacion_promedio + $sumaPromedios;
            }
    
            $no_questionsGrupal = Dictionary::select('code as value', 'text as label')->where('reference_type', 'GRUPAL')->where('active', 1)->orderBy('sort', 'ASC')->count();
            $questionsGrupal = Dictionary::select('text')->where('reference_type', 'GRUPAL')->where('active', 1)->orderBy('sort', 'ASC')->get();
    
            for($i = 0; $i < $no_questionsGrupal; $i++){
                $factor = explode(".", $questionsGrupal[$i]->text);
                $factorConsulta = "fac_" . ($i+1);
                array_push($promediosFactoresLabels, $factor[0]);
    
                $sumafactores = 0;
                
                for($j = 0; $j < sizeof($resultadosGrupal); $j++){
                    $sumafactores = $resultadosGrupal[$j]->$factorConsulta + $sumafactores;
                }
    
                $promFactores = round($sumafactores/sizeof($resultadosGrupal),2);
    
                array_push($promediosFactores, $promFactores);
            }

            $promedioGrupal = round($sumaPromedios/sizeof($resultadosGrupal),2);
        }

        $resultadosDiferentes = Evaluaciones::select('periodo_evaluacion as label')->distinct()->get();

        return response()->json(compact('comentarios', 'noResultadosGrupal', 'resultadosGrupal', 'periodoCli', 'promedioGrupal', 'promediosFactores', 'promediosFactoresLabels',));
    }
    public function getResultadosGrupalLogisticaSoporte($periodoCli)
    {
        $resultadosGrupal = Evaluaciones::where('id_evaluacion', 5)->where('periodo_evaluacion', $periodoCli)->where('id_departamento', 9)->orwhere('id_departamento', 4)->where('id_evaluacion', 5)->where('periodo_evaluacion', $periodoCli)->orderBy('created_at', 'ASC')->get();
        $noResultadosGrupal = Evaluaciones::where('id_evaluacion', 5)->where('periodo_evaluacion', $periodoCli)->where('id_departamento', 9)->orwhere('id_departamento', 4)->where('id_evaluacion', 5)->where('periodo_evaluacion', $periodoCli)->orderBy('created_at', 'ASC')->count();
        $comentarios = Evaluaciones::select("comentarios", "created_at")->where('id_evaluacion', 5)->where('periodo_evaluacion', $periodoCli)->where('id_departamento', 9)->orwhere('id_departamento', 4)->where('id_evaluacion', 5)->where('periodo_evaluacion', $periodoCli)->orderBy('created_at', 'ASC')->get();

        $sumaPromedios = 0;
        $sumafactores = 0;
        $promFactores = 0;
        $promediosFactores =  array();
        $promediosFactoresLabels =  array();

        if($noResultadosGrupal != 0){

            for($i = 0; $i < sizeof($resultadosGrupal); $i++){
                $sumaPromedios = $resultadosGrupal[$i]->calificacion_promedio + $sumaPromedios;
            }
    
            $no_questionsGrupal = Dictionary::select('code as value', 'text as label')->where('reference_type', 'GRUPAL')->where('active', 1)->orderBy('sort', 'ASC')->count();
            $questionsGrupal = Dictionary::select('text')->where('reference_type', 'GRUPAL')->where('active', 1)->orderBy('sort', 'ASC')->get();
    
            for($i = 0; $i < $no_questionsGrupal; $i++){
                $factor = explode(".", $questionsGrupal[$i]->text);
                $factorConsulta = "fac_" . ($i+1);
                array_push($promediosFactoresLabels, $factor[0]);
    
                $sumafactores = 0;
                
                for($j = 0; $j < sizeof($resultadosGrupal); $j++){
                    $sumafactores = $resultadosGrupal[$j]->$factorConsulta + $sumafactores;
                }
    
                $promFactores = round($sumafactores/sizeof($resultadosGrupal),2);
    
                array_push($promediosFactores, $promFactores);
            }

            $promedioGrupal = round($sumaPromedios/sizeof($resultadosGrupal),2);
        }

        $resultadosDiferentes = Evaluaciones::select('periodo_evaluacion as label')->distinct()->get();

        return response()->json(compact('comentarios', 'noResultadosGrupal', 'resultadosGrupal', 'periodoCli', 'promedioGrupal', 'promediosFactores', 'promediosFactoresLabels',));
    }
}