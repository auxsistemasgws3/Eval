<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Dictionary extends Model
{
    use HasFactory;
    protected $fillable = [];
    protected $appends = ['month'];
    protected $hidden = ['month'];
    protected $table = 'dictionaries';

    public function getMonthAttribute()
    {
        return DB::table('dictionaries')
        ->select('text', DB::raw('count(ventas.id) as data'), DB::raw('dictionaries.code as num'))
        ->where('reference_type', '=', 'MESES')
        ->leftJoin('ventas', function ($leftJoin) {
            $leftJoin
            ->on(DB::raw('MONTH(ventas.created_at)'), '=', 'dictionaries.code')
            ->where("ventas.tipo_venta", $this->code);
        })->groupBy('num','text')->orderBy('num')
        ->get();

        
        // return $this->belongsTo('App\Models\Venta', 'code' , 'tipo_venta');
        // return $this->hasMany('App\Models\Venta', 'tipo_venta' , 'code');
        // $fecha=strtotime('-1 month',strtotime(date('Y-m')));
        // $sub = Venta::selectRaw('count(*) as data, MONTH(created_at) as month')
        // ->where("tipo_venta", '5')
        // ->groupby('month')->get();
        // $sub =  $this->hasMany('App\Models\Venta', 'tipo_venta' , 'code')
        // ->selectRaw('count(*) as data, MONTH(created_at) as month')
        // ->groupby('month');
        // ->where("estatus",">=",6)
        // ->where("estatus","!=",9)
        //     ->selectRaw("AVG(DATEDIFF((select created_at from movimientos where orden_id=ordenes.id and or_estatus=7), (select created_at from movimientos where orden_id=ordenes.id and or_estatus=6))) as total")
        //     ->whereMonth('ordenes.created_at', '=', date ( 'm' ,$fecha) )
        //     ->whereYear('ordenes.created_at', '=', date ( 'Y' ,$fecha) )
        //     ->groupby('sucursal_id')->first();
        // return $sub;
    }
}
