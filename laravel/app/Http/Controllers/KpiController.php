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
use App\Models\Users;
use App\Models\KpiCandidatos;
use App\Models\KpiVacantes;
use App\Models\KpiSolicitud;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use DateTime;


class KpiController extends Controller
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
    
    // <!-- -------------------------------Index-------------------------------------------------- -->
    public function getKpi()
    {   
        $user = Auth::user();
        $vacantes = KpiVacantes::where('estatus', 1)->with("sucursal")->with("estatus")->orderBy('id', 'DESC')->get();
        $candidatos = KpiCandidatos::with("sucursal")->with("estatus")->with("vacante")->orderBy('id', 'DESC')->get();
        $historialvacantes = KpiVacantes::where('estatus', 0)->with("sucursal")->with("estatus")->orderBy('id', 'DESC')->get();
        $historialcandidatos = KpiCandidatos::where('estatus', 0)->with("sucursal")->with("estatus")->with("vacante")->orderBy('id', 'DESC')->get();
        $Fechahoy = date("Y-m-d");
        $departamentos = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'DEPARTAMENTO')->orderBy('sort', 'ASC')->get();
        $sucursal = Store::select('id  as value', 'name as label')->where("active", 1)->orderBy('name', 'ASC')->get();
        $puestos = KpiVacantes::select('id  as value', 'nombre as label')->where('estatus', 1)->get();
        $plataformas = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'PLATAFORMA')->orderBy('sort', 'ASC')->get();
        $estatus = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'ESTATUS')->orderBy('sort', 'ASC')->get();
        $proceso = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_ESTATUS')->orderBy('sort', 'ASC')->get();
        $solicitudes = KpiSolicitud::with("sucursal")->with("departamento")->orderBy('id', 'DESC')->get();

        $requerimientos = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_REQUERIMIENTO')->orderBy('sort', 'ASC')->get();
        $motivo = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_MOTIVO')->orderBy('sort', 'ASC')->get();
        $puesto = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_TIPO_PUESTO')->orderBy('sort', 'ASC')->get();
        $escolaridad = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_ESCOLARIDAD')->orderBy('sort', 'ASC')->get();
        $sexo = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_SEXO')->orderBy('sort', 'ASC')->get();
        $estadoCivil = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_ESTADO_CIVIL')->orderBy('sort', 'ASC')->get();

        return response()->json(compact('vacantes', 'candidatos', 'historialvacantes', 'historialcandidatos', 'Fechahoy', 'departamentos', 'sucursal', 'puestos', 'plataformas',
         'estatus', 'proceso', 'solicitudes', 'requerimientos', 'motivo', 'puesto', 'escolaridad', 'sexo', 'estadoCivil'));
    }

    public function getSolicitudPersonal()
    {
        $user = Auth::user();
        $Fechahoy = date("d-m-Y");
        $departamentos = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'DEPARTAMENTO')->orderBy('sort', 'ASC')->get();
        $sucursal = Store::select('id  as value', 'name as label')->where("active", 1)->orderBy('name', 'ASC')->get();
        $requerimientos = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_REQUERIMIENTO')->orderBy('sort', 'ASC')->get();
        $motivo = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_MOTIVO')->orderBy('sort', 'ASC')->get();
        $puesto = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_TIPO_PUESTO')->orderBy('sort', 'ASC')->get();
        $escolaridad = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_ESCOLARIDAD')->orderBy('sort', 'ASC')->get();
        $sexo = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_SEXO')->orderBy('sort', 'ASC')->get();
        $estadoCivil = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'KPI_ESTADO_CIVIL')->orderBy('sort', 'ASC')->get();
         
        return response()->json(compact('user', 'Fechahoy', 'departamentos', 'sucursal', 'requerimientos', 'motivo', 'puesto', 'escolaridad', 'sexo', 'estadoCivil'));
    }
    // <!-- -------------------------------add-------------------------------------------------- -->
    public function addVacante(Request $request)
    {
        $user = Auth::user();
        $Fechahoy = date("Y-m-d H:i:s"); 

            $kpi_Vacantes = new KpiVacantes();
            $kpi_Vacantes->nombre = $request->input("nombreVacante");
            $kpi_Vacantes->departamento = $request->input("departamento");
            $kpi_Vacantes->sucursal_id = $request->input("sucursal");
            $kpi_Vacantes->estatus = 1;
            $kpi_Vacantes->descartados = 0;

            $kpi_Vacantes->save();
        return response()->json($kpi_Vacantes);
    }
    public function addCandidato(Request $request)
    {
        $user = Auth::user();
        $Fechahoy = date("Y-m-d H:i:s"); 

            $kpi_Candidatos = new KpiCandidatos();

            $kpi_Candidatos->nombre = $request->input("nombreCandidato");
            $kpi_Candidatos->telefono = $request->input("telefono");
            $kpi_Candidatos->departamento = $request->input("departamento");
            $kpi_Candidatos->vacante = $request->input("puesto");
            $kpi_Candidatos->sucursal_id = $request->input("sucursal");
            $kpi_Candidatos->estatus_id = 1;
            $kpi_Candidatos->estatus = 1;
            $kpi_Candidatos->plataforma = $request->input("plataforma");

            $kpi_Candidatos->save();

        return response()->json($kpi_Candidatos);
    }
    public function createKpi(Request $request)
    {
        $user = Auth::user();
        $Fechahoy = date("Y-m-d H:i:s"); 

        error_log('Entra');
            $solicitudes_kpi = new KpiSolicitud();
            $solicitudes_kpi->fecha = $request->input("solicitantefecha");
            $solicitudes_kpi->nombre_solicitante = $request->input("solicitantenombre");
            $solicitudes_kpi->puesto_solicitante = $request->input("solicitantepuesto");
        
            $solicitudes_kpi->tipo_especificaciones = $request->input("especificacionestipo");
            $solicitudes_kpi->motivo_especificaciones = $request->input("especificacionesmotivo");
            $solicitudes_kpi->persona_sustituir = $request->input("especificacionespersonaSustituir");
        
            $solicitudes_kpi->tipo_definicion = $request->input("definiciontipo");
            $solicitudes_kpi->nombre_definicion = $request->input("definicionnombre");
            $solicitudes_kpi->departamento_definicion = $request->input("definiciondepartamento");
            $solicitudes_kpi->ubicacion_definicion = $request->input("definicionubicacion");
            $solicitudes_kpi->horario = $request->input("definicionhorario");
            $solicitudes_kpi->funciones = $request->input("definicionfunciones");
        
            $solicitudes_kpi->escolaridad = $request->input("perfilescolaridad");
            $solicitudes_kpi->idiomas = $request->input("perfilidiomas");
            $solicitudes_kpi->perfil_equipo = $request->input("perfilequipo");
            $solicitudes_kpi->perfil_sistema = $request->input("perfilsistema");
            $solicitudes_kpi->experiencia = $request->input("perfilexperiencia");
            $solicitudes_kpi->sexo = $request->input("perfilsexo");
            $solicitudes_kpi->estadoCivil = $request->input("perfilestadoCivil");
            $solicitudes_kpi->edad = $request->input("perfiledad");
        
            $solicitudes_kpi->habilidades_comprension = $request->input("habilidadescomprension");
            $solicitudes_kpi->habilidades_seguimiento = $request->input("habilidadesseguimiento");
            $solicitudes_kpi->habilidades_objetividad = $request->input("habilidadesobjetividad");
            $solicitudes_kpi->habilidades_manejo = $request->input("habilidadesmanejo");
            $solicitudes_kpi->habilidades_negociacion = $request->input("habilidadesnegociacion");
            $solicitudes_kpi->habilidades_decisiones = $request->input("habilidadesdecisiones");
            $solicitudes_kpi->habilidades_poder = $request->input("habilidadespoder");
            $solicitudes_kpi->habilidades_palabra = $request->input("habilidadespalabra");
            $solicitudes_kpi->habilidades_dominio = $request->input("habilidadesdominio");
            $solicitudes_kpi->habilidades_asertividad = $request->input("habilidadesasertividad");
            $solicitudes_kpi->habilidades_iniciativa = $request->input("habilidadesiniciativa");
            $solicitudes_kpi->habilidades_creatividad = $request->input("habilidadescreatividad");
            $solicitudes_kpi->habilidades_resultados = $request->input("habilidadesresultados");
            $solicitudes_kpi->habilidades_adaptable = $request->input("habilidadesadaptable");
            $solicitudes_kpi->habilidades_logico = $request->input("habilidadeslogico");
            $solicitudes_kpi->habilidades_concentracion = $request->input("habilidadesconcentracion");
            $solicitudes_kpi->habilidades_equipo = $request->input("habilidadesequipo");
            $solicitudes_kpi->habilidades_estres = $request->input("habilidadesestres");
       
            $solicitudes_kpi->actitudes_responsable = $request->input("actitudesresponsable");
            $solicitudes_kpi->actitudes_empatico = $request->input("actitudesempatico");
            $solicitudes_kpi->actitudes_emprendedor = $request->input("actitudesemprendedor");
            $solicitudes_kpi->actitudes_colaborador = $request->input("actitudescolaborador");
            $solicitudes_kpi->actitudes_normas = $request->input("actitudesnormas");
            $solicitudes_kpi->actitudes_comentarios = $request->input("actitudescomentarios");

            $solicitudes_kpi->save();

        return response()->json($solicitudes_kpi);
    }

    // <!-- -------------------------------Get-------------------------------------------------- -->
    public function getCandidato($id)
    {
        //$candidato = KpiCandidatos::where('id', $id)->with("Sucursal")->with("Vacante")->with("Estatus")->with("Plataforma")->with("Proceso")->with("Departamento")->first();
        $candidato = KpiCandidatos::where('id', $id)->first();

        return response()->json(compact('candidato'));
    }
    public function getVacante($id)
    {
        $vacantes = KpiVacantes::where('id', $id)->first();

        $Postulados = $vacantes->descartados;
        $Contactado = KpiCandidatos::where('vacante', $id)->count(); //1
        $Contratado = KpiCandidatos::where('estatus_id', 11)->where('vacante', $id)->count(); //11
        $Documentacion = KpiCandidatos::where('estatus_id', 9)->where('vacante', $id)->count() + $Contratado; //9

        $ExamenMedico = KpiCandidatos::where('estatus_id', 8)->where('vacante', $id)->count() + $Documentacion; //8

        $InvestigacionLaboral = KpiCandidatos::where('estatus_id', 6)->where('vacante', $id)->count() + $ExamenMedico; //6

        $SegundaEntrevista = KpiCandidatos::where('estatus_id', 5)->where('vacante', $id)->count() + $InvestigacionLaboral; //5

        $EnvioPsicometrico  = KpiCandidatos::where('estatus_id', 4)->where('vacante', $id)->count() + $SegundaEntrevista; //4

        $AsistenciaEntrevista = KpiCandidatos::where('estatus_id', 3)->where('vacante', $id)->count() + $EnvioPsicometrico; //3

        $CitadoEntrevista = KpiCandidatos::where('estatus_id', 2)->where('vacante', $id)->count() + $AsistenciaEntrevista; //2

        $fecha = $vacantes->fecha;
        $date1 = new DateTime($fecha);
        $date2 = new DateTime("now");
        $diff = $date1->diff($date2);

        $vacantesGrafico =  array();
        array_push($vacantesGrafico, $Postulados, $Contactado, $CitadoEntrevista, $AsistenciaEntrevista);

        $vacantesGrafico2 =  array();
        array_push($vacantesGrafico2, $EnvioPsicometrico, $SegundaEntrevista, $InvestigacionLaboral, $ExamenMedico, $Documentacion, $Contratado);

        $labels = array('Postulados', 'Contactado', 'Citado a entrevista', 'Asistencia a entrevista');
        $labels2 = array('Envio psicométricos', 'Segunda entrevista', 'Investigación laboral', 'Examen medico', 'Documentación', 'Contratado');

        return response()->json(compact('vacantes', 'vacantesGrafico', 'vacantesGrafico2', 'labels', 'labels2'));
    }
    public function imprimirkpi($id)
    {
        $vacantes = KpiVacantes::where('id', $id)->with('sucursal')->first();

        $Postulados = $vacantes->descartados;
        $Contactado = KpiCandidatos::where('vacante', $id)->count(); //1
        $Contratado = KpiCandidatos::where('estatus_id', 11)->where('vacante', $id)->count(); //11
        $Documentacion = KpiCandidatos::where('estatus_id', 9)->where('vacante', $id)->count() + $Contratado; //9

        $ExamenMedico = KpiCandidatos::where('estatus_id', 8)->where('vacante', $id)->count() + $Documentacion; //8

        $InvestigacionLaboral = KpiCandidatos::where('estatus_id', 6)->where('vacante', $id)->count() + $ExamenMedico; //6

        $SegundaEntrevista = KpiCandidatos::where('estatus_id', 5)->where('vacante', $id)->count() + $InvestigacionLaboral; //5

        $EnvioPsicometrico  = KpiCandidatos::where('estatus_id', 4)->where('vacante', $id)->count() + $SegundaEntrevista; //4

        $AsistenciaEntrevista = KpiCandidatos::where('estatus_id', 3)->where('vacante', $id)->count() + $EnvioPsicometrico; //3

        $CitadoEntrevista = KpiCandidatos::where('estatus_id', 2)->where('vacante', $id)->count() + $AsistenciaEntrevista; //2

        $fecha = $vacantes->fecha;
        $date1 = new DateTime($fecha);
        $date2 = new DateTime("now");
        $diff = $date1->diff($date2);

        $vacantesGrafico =  array();
        array_push($vacantesGrafico, $Postulados, $Contactado, $CitadoEntrevista, $AsistenciaEntrevista);

        $vacantesGrafico2 =  array();
        array_push($vacantesGrafico2, $EnvioPsicometrico, $SegundaEntrevista, $InvestigacionLaboral, $ExamenMedico, $Documentacion, $Contratado);

        $labels = array('Postulados', 'Contactado', 'Citado a entrevista', 'Asistencia a entrevista');
        $labels2 = array('Envio psicométricos', 'Segunda entrevista', 'Investigación laboral', 'Examen medico', 'Documentación', 'Contratado');

        $departamento = Dictionary::where('code',$vacantes->departamento)->where("active", 1)->where('reference_type', 'DEPARTAMENTO')->orderBy('sort', 'ASC')->first();
        $activo = "Activo";
        if($vacantes->estatus == 0){
            $activo = "Inactivo";
        }
        $sucursal = $vacantes->sucursal->name;
        $fecha = date("d-m-Y");
        $PContratado = KpiCandidatos::where('estatus_id', 11)->where('vacante', $id)->first(); 
        $pdf = \PDF::loadView('Reportes.kpis',compact('PContratado','vacantesGrafico','vacantesGrafico2','departamento','vacantes','fecha','activo','sucursal'));
  
        return $pdf->download('Kpis ' .$vacantes->nombre.'.pdf');
    }
    public function getSolicitud($id)
    {
        $solicitud = KpiSolicitud::where('id', $id)->first();

        return response()->json(compact('solicitud'));
    }
    // <!-- -------------------------------post-------------------------------------------------- -->
    public function updateCandidato(Request $request)  
    {
        $kpi_Candidatos = KpiCandidatos::where('id', '=', $request->input('id'))->first();
        $kpi_Candidatos->nombre = $request->input("nombre");
        $kpi_Candidatos->telefono = $request->input("telefono");
        $kpi_Candidatos->departamento = $request->input("departamento");
        $kpi_Candidatos->vacante = $request->input("puesto");
        $kpi_Candidatos->sucursal_id = $request->input("sucursal");
        $kpi_Candidatos->estatus_id = $request->input("proceso");
        $kpi_Candidatos->estatus = $request->input("estatus");
        $kpi_Candidatos->plataforma = $request->input("plataforma");
        $kpi_Candidatos->comentarios = $request->input("comentarios");

        $kpi_Candidatos->save();
        
        return response()->json($kpi_Candidatos);
    }
    public function updateContratacion(Request $request)  
    {
        error_log('Entra updateContratacion');
        $kpi_Candidatos = KpiCandidatos::where('id', '=', $request->input('id'))->first();
        $kpi_Candidatos->nombre = $request->input("nombre");
        $kpi_Candidatos->telefono = $request->input("telefono");
        $kpi_Candidatos->departamento = $request->input("departamento");
        $kpi_Candidatos->vacante = $request->input("puesto");
        $kpi_Candidatos->sucursal_id = $request->input("sucursal");
        $kpi_Candidatos->estatus_id = 11;
        $kpi_Candidatos->estatus = 0;
        $kpi_Candidatos->plataforma = $request->input("plataforma");
        $kpi_Candidatos->comentarios = $request->input("comentarios");

        $kpi_Candidatos->save();

        $kpi_Vacantes = KpiVacantes::where('id', '=', $request->input('puesto'))->first();
        $kpi_Vacantes->estatus = 0;
        $kpi_Vacantes->comentarios = $request->input("comentarios");

        $kpi_Vacantes->save();

        return response()->json($kpi_Candidatos);
    }
    public function updateVacante(Request $request)  
    {
        $user = Auth::user();
        $Fechahoy = date("Y-m-d H:i:s");

        $kpi_Vacantes = KpiVacantes::where('id', '=', $request->input('id'))->first();
        $kpi_Vacantes->nombre = $request->input("nombre");
        $kpi_Vacantes->departamento = $request->input("departamento");
        $kpi_Vacantes->sucursal_id = $request->input("sucursal");
        $kpi_Vacantes->estatus = $request->input("estatus");
        $kpi_Vacantes->descartados = $request->input("descartados");
        $kpi_Vacantes->comentarios = $request->input("comentarios");

        $kpi_Vacantes->save();
        return response()->json($kpi_Vacantes);
    }
}