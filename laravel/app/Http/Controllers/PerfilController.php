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
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class PerfilController extends Controller
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
        $roles = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'ROL')->orderBy('sort', 'ASC')->get();
        $areasventa = Dictionary::select('code as value', 'text as label')->where("active", 1)->where('reference_type', 'AREA_VENTA')->orderBy('sort', 'ASC')->get();
        $usuarios = User::with("estatus")->with("rol")->with("sucursal")->get();
        return response()->json(compact('estatus', 'sucursal', 'roles', 'areasventa', 'usuarios'));
    }
    public function getUser($id)
    {
        $user = User::where("estatus", 1)->where("id", $id)->first();
        return response()->json($user);
    }
    public function addUser(Request $request)
    {
        $validatedData = $request->validate([
            'name'       => 'required|min:1|max:256',
            'primer_apellido'       => 'required|min:1|max:256',
            'telefono'       => 'required|min:1|max:20',
            'sucursal_id'       => 'required|min:1|max:256',
            'rol_id'       => 'required|min:1|max:256',
            'email'      => 'required|email|max:256',
            'password'      => 'required|max:50'
        ]);
        $user  = new User();

        $user->name        = $request->input('name');
        $user->email       = $request->input('email');
        $user->primer_apellido   = $request->input("primerAp");
        $user->segundo_apellido   = $request->input("segundoAp");
        $user->telefono         = $request->input("tel");
        $user->ext         = $request->input("ext");
        $user->email       = $request->input("email");
        $user->sucursal_id    = $request->input("sucursal");
        $user->rol_id         = $request->input("rol");
        $user->area_ventas = $request->input('areasventa');
        if ($request->input("password") != "") {
            $user->password = Hash::make($request->input("password"));
        }
        $user->save();
        return response()->json(['status' => 'success']);
    }

    public function updateUser(Request $request)
    {
        $validatedData = $request->validate([
            'name'       => 'required|min:1|max:256',
            'primer_apellido'       => 'required|min:1|max:256',
            'telefono'       => 'required|min:1|max:20',
            'sucursal_id'       => 'required|min:1|max:256',
            'rol_id'       => 'required|min:1|max:256',
            'email'      => 'required|email|max:256',
            'password'      => 'required|min:1|max:50'
        ]);
        $user = User::where('id', '=', $request->input('id'))->first();
        $user->name        = $request->input('name');
        $user->email       = $request->input('email');
        $user->primer_apellido   = $request->input("primerAp");
        $user->segundo_apellido   = $request->input("segundoAp");
        $user->telefono         = $request->input("tel");
        $user->ext         = $request->input("ext");
        $user->email       = $request->input("email");
        $user->sucursal_id    = $request->input("sucursal");
        $user->rol_id         = $request->input("rol");
        $user->area_ventas = $request->input('areasventa');
        if ($request->input("password") != "") {
            $user->password = Hash::make($request->input("password"));
        }
        $user->save();
        $user->refresh();
        //$request->session()->flash('message', 'Successfully created role');
        return response()->json($user);
    }
}
