<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use SoftDeletes;
    use HasRoles;
    use HasFactory;

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }    

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'status'
    ];

    protected $appends = ['areas_venta_id','ventas_month'];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'ventas_month',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $dates = [
        'deleted_at'
    ];
    
    protected $guard_name = 'api';

    protected $attributes = [ 
        'menuroles' => 'user',
    ];


    public function Estatus()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'status', 'code')
            ->where('reference_type', 'estatus');
        return $sub;
    }

    public function Rol()
    {
        /*
        $sub = $this->belongsTo('App\Models\Dictionary', 'rol_id', 'code')
            ->where('reference_type', 'ROL');
            */
        $sub = $this->belongsTo('App\Models\Roles', 'rol_id', 'id');

        return $sub;
    }
    public function Sucursal()
    {
        return $this->belongsTo('App\Models\Store', 'sucursal_id');
    }

    public function Empresa()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'empresa', 'code')
        ->where('reference_type', 'empresa');
        return $sub;
    }
    public function AreasVentas()
    {
        return $this->hasManyThrough(
            'App\Models\Dictionary', // Modelo destino
            'App\Models\UserAreaventa', // Modelo intermedio
            'user_id', // Clave foránea en la tabla intermedia
            'code' ,// Clave foránea en la tabla de destino
            'id' ,// Clave primaria en la tabla de origen
            'areaventa_id' // Clave primaria en la tabla intermedia
          )->where('reference_type', 'AREA_VENTA')->where('estatus', 1)->select('code as value', 'text as label');
    }
    // public function AreasVentas()
    // {
    //     return $this->hasMany('App\Models\UserAreaventa', 'user_id', 'id')->where('estatus', 1);
    // }
    public function getAreasVentaIdAttribute()
    {
            //se comento porque nos da Error en el SERVIDOR
        //$sub = UserAreaventa::where("user_id", $this->id)->where('estatus', '1')->pluck('areaventa_id');
        //return $sub;
    }


    // public function getUserAreasVentasAttribute()
    // {
    //     return $this->hasManyThrough(
    //         'App\Models\Dictionary', // Modelo destino
    //         'App\Models\UserAreaventa', // Modelo intermedio
    //         'user_id', // Clave foránea en la tabla intermedia
    //         'code' ,// Clave foránea en la tabla de destino
    //         'id' ,// Clave primaria en la tabla de origen
    //         'id' // Clave primaria en la tabla intermedia
    //       )->where('reference_type', 'AREA_VENTA')->select('code as value', 'text as label');
    // }
    
    public function TienePerfil($profile)
    {
        if (User::where("id", $this->id)->where('rol_id', $profile)->where('estatus', 1)->first()) {
            return true;
        }
        return false;
    }
    public function getVentasMonthAttribute()
    {
        error_log($this->id);
        return DB::table('dictionaries')
        ->select('text', DB::raw('count(ventas.id) as data'), DB::raw('dictionaries.code as num'))
        ->where('reference_type', '=', 'MESES')
        ->leftJoin('ventas', function ($leftJoin) {
            $leftJoin
            ->on(DB::raw('MONTH(ventas.created_at)'), '=', 'dictionaries.code')
            ->where("ventas.usuario_id", $this->id);
        })->groupBy('num','text')->orderBy('num')
        ->get();
    }

    public function departamentos_evaluar()
    {
        return $this->hasMany('App\Models\UsuarioDepartamento', 'id_Usuario', 'no_empleado');
    
    }


}
