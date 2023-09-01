<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\DB;
use App\Models\Menurole;
use App\Models\UsuarioDepartamento;
use App\Models\UsuarioEavaluaciones;
use App\Models\RoleHierarchy;
use App\Models\Store;
use App\Models\City;
use App\Models\Dictionary;
use App\Models\User;
use App\Models\UserAreaventa;
use App\Models\Roles;
use App\Models\Evaluaciones;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class SettingsController extends Controller
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
    public function index()
    {
        $you = auth()->user()->id;
        $users = DB::table('users')
            ->select('users.id', 'users.name', 'users.email', 'users.menuroles as roles', 'users.status', 'users.email_verified_at as registered')
            ->whereNull('deleted_at')
            ->get();
        return response()->json(compact('users', 'you'));
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function Stores()
    {
        $stores = Store::where("active", 1)->orderBy('code', 'ASC')->with('City')->get();
        $cities = City::select('id as value', 'name as label')->where("active", 1)->orderBy('name', 'ASC')->get();
        return response()->json(compact('stores', 'cities'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $store = Store::where("active", 1)->where("id", $id)->with('City')->first();
        return response()->json($store);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function addStore(Request $request)
    {
        $request->validate([
            'name' => 'required|min:1|max:50',
            'code' => 'required|min:1|max:50',
            'city_id' => 'required|min:1|max:50',
            'street_address' => 'required|min:1|max:50',
            'number_address' => 'required|min:1|max:50',
            'colony_address' => 'required|min:1|max:50',
            'cp_address' => 'required|min:1|max:6',
            'color' => 'required|min:1|max:50',
        ]);
        $store = new Store();
        $store->name = $request->input("name");
        $store->code = $request->input("code");
        $store->city_id = $request->input("city_id");
        $store->street_address = $request->input("street_address");
        $store->number_address = $request->input("number_address");
        $store->colony_address = $request->input("colony_address");
        $store->cp_address = $request->input("cp_address");
        $store->color = $request->input("color");
        $store->save();
        $updateStore = Store::where('id', '=', $store->id)->with('City')->first();
        //$request->session()->flash('message', 'Successfully created role');
        return response()->json($updateStore);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function updateStore(Request $request)
    {
        $request->validate([
            'id'   => 'required',
            'name' => 'required|min:1|max:50',
            'code' => 'required|min:1|max:50',
            'city_id' => 'required|min:1|max:50',
            'street_address' => 'required|min:1|max:50',
            'number_address' => 'required|min:1|max:50',
            'colony_address' => 'required|min:1|max:50',
            'cp_address' => 'required|min:1|max:6',
            'color' => 'required|min:1|max:50',
        ]);
        $store = Store::where('id', '=', $request->input('id'))->with('City')->first();
        $store->name = $request->input("name");
        $store->code = $request->input("code");
        $store->city_id = $request->input("city_id");
        $store->street_address = $request->input("street_address");
        $store->number_address = $request->input("number_address");
        $store->colony_address = $request->input("colony_address");
        $store->cp_address = $request->input("cp_address");
        $store->color = $request->input("color");
        $store->save();
        $store->refresh();
        //$request->session()->flash('message', 'Successfully created role');
        return response()->json($store);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroyStore($id)
    {
        $store = Store::where('id', '=', $id)->first();
        $store->active = 0;
        $store->save();
        return response()->json(['status' => true]);
    }

    public function Users()
    {
        $estatus = Dictionary::select('code as value', 'text as label')->where("reference_type", 'estatus')->orderBy('sort', 'ASC')->get();
        $sucursal = Store::select('id  as value', 'name as label')->where("active", 1)->orderBy('name', 'ASC')->get();
        $roles = Roles::select('id as value', 'name as label')->where("active", 1)->get();
        $areasventa = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'AREA_VENTA')->orderBy('sort', 'ASC')->get();
        $usuarios = User::where('estatus', 1)->with("estatus")->with("rol")->with("sucursal")->with('AreasVentas')->get();
        $jefeInmediato = User::selectRaw("id AS value, CONCAT(name, ' ', primer_apellido , ' ', segundo_apellido) label")->orderBy('name', 'ASC')->get();
        $user = Auth::user();
        $departamentos = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'DEPARTAMENTO')->orderBy('sort', 'ASC')->get();
        $empresa = Dictionary::select('code as value','text as label')->where("active", 1)->where('reference_type', 'EMPRESA')->orderBy('sort', 'ASC')->get();
        $meses = Dictionary::select('code', 'text')->where('reference_type', 'MESES')->orderBy('sort', 'ASC')->get();

       

        $departamentosEvaluar = array();
        $usuariosSinContestar = array();
        $año = date("Y"); //Obtenemos año actual
        $mes_anterior = date('m', strtotime('-1 month'));
        intval($mes_anterior);

        $Fechahoy = date("Y-m-d");

        $periodoAnterior = $meses[$mes_anterior-1]->text . " - " . $año;

        error_log($periodoAnterior);

        $allUsers = User::select('id', 'name', 'email')->get();

        for($i = 0; $i < sizeof($allUsers); $i++){
            $evaluacionesRealizadasDep = Evaluaciones::select('id_evaluacion', 'nombre_evaluado', 'periodo_evaluacion',)->where('id_realizo_evaluacion', $allUsers[$i]->id)->where('id_evaluacion', 4)->where('periodo_evaluacion', $periodoAnterior)->get()->count();

            if($evaluacionesRealizadasDep < 10){
                array_push($usuariosSinContestar, $allUsers[$i]);
            }
        }

        return response()->json(compact('jefeInmediato', 'departamentos','empresa', 'estatus', 'sucursal', 'roles', 'areasventa', 'usuarios', 'user', 'usuariosSinContestar'));
    }
    public function getUser($id)
    {
        $user = User::where("estatus", 1)->where("id", $id)
        ->with("rol" ,"sucursal")->first();

        $departamentosEvalUsuario = UsuarioDepartamento:: select('id_Departamento')->where('id_Usuario', $id)->with('Departamento')->get();

        return response()->json(compact('user','departamentosEvalUsuario'));
    }
    public function addUser(Request $request)
    {
        $validatedData = $request->validate([
            'name'       => 'required|min:1|max:256',
            'primer_apellido'       => 'required|min:1|max:256',
            'numero_empleado'       => 'required|min:1|max:256',
            'puesto'       => 'required|min:1|max:256',
            'fecha_ingreso'       => 'required|min:1|max:256',
            'fecha_nacimiento'       => 'required|min:1|max:256',
            'telefono'       => 'required|min:1|max:20',
            'sucursal'       => 'required|min:1|max:256',
            'rol'       => 'required|min:1|max:256',
            'email'      => 'required|email|max:256',
            'id_departamento'      => 'required|min:1|max:256',
            'id_empresa'      => 'required|min:1|max:256',
            'jefe_inmediato'      => 'required|min:1|max:256',
            'password'      => 'required|max:50'
        ]);
        $rol = $request->input("rol");
       
    
        
       
     
        


        $area_ventas = array();
       
        if ($request->input('areas_ventas.value')) {
            array_push($area_ventas, $request->input('areas_ventas.value'));
        } else {
            $area_ventas = $request->input('areas_ventas.*.value');
        }
        $rol_menu = Dictionary::where("code", $rol)->where("active", 1)->where('reference_type', 'ROL')->first();
        $roles_menu = Roles::where("id", $rol)->where("active", 1)->first();

        $user  = new User();
        $user->name        = $request->input('name');
        $user->email       = $request->input('email');
        $user->correo_empresarial       = $request->input('correo_empresarial');
        $user->correo_personal       = $request->input('correo_personal');
        $user->primer_apellido   = $request->input("primer_apellido");
        $user->segundo_apellido   = $request->input("segundo_apellido");
        $user->no_empleado   = $request->input("numero_empleado");
        $user->puesto              = $request->input("puesto");
        $user->fecha_ingreso   = $request->input("fecha_ingreso");
        $user->fecha_nacimiento   = $request->input("fecha_nacimiento");
        $user->telefono         = $request->input("telefono");
        $user->ext         = $request->input("ext");
        $user->email       = $request->input("email");
        $user->id_departamento       = $request->input("id_departamento");
        $user->id_empresa       = $request->input("id_empresa");
        $user->jefe_inmediato       = $request->input("jefe_inmediato");
        $user->sucursal_id    = $request->input("sucursal");
        $user->rol_id         = $request->input("rol");
        $user->menuroles       = $roles_menu->name;

        
        //$user->menuroles       = $rol_menu->text;
        if ($request->input("password") != "") {
            $user->password = Hash::make($request->input("password"));
        }
        if ($rol == "8") {
            $user->tipo_venta_id =  $request->input('areas_ventas.value');
            $user->comision_porcentaje =  $request->input('comision_porcentaje');
            $user->comision_monto =  $request->input('comision_monto');
        }     

        $user->save();    
        
        $user->refresh();

        $departamentos_Evaluar = $request->input('departamentos_Evaluar');
        $depachecados = array();  


        for ($i=0,$count=0; $i < sizeof($departamentos_Evaluar); $i++) { 
            if (sizeof($departamentos_Evaluar[$i])==3) {
                $depachecados[$i]=$departamentos_Evaluar[$i];
            }
        }
        
        
        error_log(sizeof($depachecados));      
     
     if(sizeof($depachecados)!=0 ){
            
                           
            foreach($depachecados as $key=>$value){
      
                $deptE = new UsuarioDepartamento();
                $deptE->id_Usuario = $user->id;
                
                $deptE->id_Departamento = $value['value'];
                    

                $deptE->save();
            }           
           
        };     
       
       if ($rol == "8" || $rol == "7") {
            foreach ($area_ventas as $av) {
                $UserAreaventa = new UserAreaventa();
                $UserAreaventa->user_id = $user->id;
                $UserAreaventa->areaventa_id = $av;
                $UserAreaventa->useralta_id = Auth::user()->id;
                $UserAreaventa->save();
                error_log($UserAreaventa);
            }
        }
        $user = User::where('id', $user->id)->with("estatus")->with("rol")->with("sucursal")->with('AreasVentas')->with('departamentos_Evaluar')->first();
        return response()->json($user);
    }

    public function updateUser(Request $request)
    {
        $validatedData = $request->validate([
            'name'       => 'required|min:1|max:256',
            'primer_apellido'       => 'required|min:1|max:256',
            'numero_empleado'       => 'required|min:1|max:256',
            'puesto'       => 'required|min:1|max:256',
            'fecha_ingreso'       => 'required|min:1|max:256',
            'fecha_nacimiento'       => 'required|min:1|max:256',
            'telefono'       => 'required|min:1|max:20',
            'sucursal'       => 'required|min:1|max:256',
            'rol'       => 'required|min:1|max:256',
            'email'      => 'required|email|max:256',
            'id_departamento'      => 'required|min:1|max:256',
            'id_empresa'      => 'required|min:1|max:256',
            'jefe_inmediato'      => 'required|min:1|max:256',
        ]);
        $rol = $request->input("rol");
        if ($rol == "8") {
            $request->validate([
                'areas_ventas'       => 'required|min:1|max:256',
                'comision_porcentaje'       => 'required|min:1|max:50',
                // 'comision_monto'       => 'required|min:1|max:50',
            ]);
        }
        $area_ventas = array();
        if ($request->input('areas_ventas.value')) {
            array_push($area_ventas, $request->input('areas_ventas.value'));
        } else {
            $area_ventas = $request->input('areas_ventas.*.value');
        }
        $roles_menu = Roles::where("id", $rol)->where("active", 1)->first();

        //$departamentos_Evaluar = array();
        $departamentos_Evaluar = $request->input('departamentos_Evaluar');
        $depachecados = array();
        foreach ($departamentos_Evaluar as $key=>$value) {
            if ($value['checado'] ==1) {
                $depachecados[] = $value;
            };
        };


       


        $userDeptEval = UsuarioDepartamento::where('id_Usuario', '=', $request->input('id'))->get();
        $tamano = sizeof($userDeptEval); 
        

        error_log("Hola");

        if(sizeof($depachecados)!=0 ){           

            
           UsuarioDepartamento::where('id_Usuario',$request->input('id'))->delete();
            
                           
            foreach($depachecados as $key=>$value){
                error_log($value['value']);
                $deptE = new UsuarioDepartamento();
                $deptE->id_Usuario = $request->input('id');
                
                $deptE->id_Departamento = $value['value'];
                    

                $deptE->save();
            }           
           
        };


       

        $user = User::where('id', '=', $request->input('id'))->first();
        $user->name        = $request->input('name');
        $user->email       = $request->input('email');
        $user->correo_empresarial       = $request->input('correo_empresarial');
        $user->correo_personal       = $request->input('correo_personal');
        $user->primer_apellido   = $request->input("primer_apellido");
        $user->segundo_apellido   = $request->input("segundo_apellido");
        $user->no_empleado   = $request->input("numero_empleado");
        $user->puesto              = $request->input("puesto");
        $user->fecha_ingreso   = $request->input("fecha_ingreso");
        $user->fecha_nacimiento   = $request->input("fecha_nacimiento");
        $user->telefono         = $request->input("telefono");
        $user->ext         = $request->input("ext");
        $user->email       = $request->input("email");
        $user->id_departamento       = $request->input("id_departamento");
        $user->id_empresa       = $request->input("id_empresa");
        $user->jefe_inmediato       = $request->input("jefe_inmediato");
        $user->sucursal_id    = $request->input("sucursal");
        $user->rol_id         = $rol;
        $user->menuroles       = $roles_menu->name;

       

        error_log($request->input("jefe_inmediato"));
        
        if($request->estatus == 1){$user->estatus = "1";} else {$user->estatus = "0";}

        if ($request->input("password") != "") {
            $user->password = Hash::make($request->input("password"));
        }
        if ($rol == "8") {
            $user->tipo_venta_id =  $request->input('areas_ventas.value');
            $user->comision_porcentaje =  $request->input('comision_porcentaje');
            // $user->comision_monto =  $request->input('comision_monto');


        }

        
        $user->save();
        $user->refresh();
        //error_log($rol);
        UserAreaventa::where('estatus', 1)->where('user_id', $user->id)->update(['estatus' => 0], ['userbaja_id' => Auth::user()->id]);
        if ($rol == "8" || $rol == "7") {
            foreach ($area_ventas as $av) {
                $UserAreaventa = new UserAreaventa();
                $UserAreaventa->user_id = $user->id;
                $UserAreaventa->areaventa_id = $av;
                $UserAreaventa->useralta_id = Auth::user()->id;
                $UserAreaventa->save();
                //error_log($UserAreaventa);
            }
        }
        //error_log(json_encode($area_ventas));
        $user = User::where('id', $request->input('id'))->with("estatus")->with("rol")->with("sucursal")->with('AreasVentas')->with('departamentos_Evaluar')->first();
        return response()->json($user);
    }
}
