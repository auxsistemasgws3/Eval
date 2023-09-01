<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAreaventa extends Model
{
    use HasFactory;
    protected $table = 'user_areasventas';

    protected $fillable = [
        'user_id', 'areaventa_id', 'useralta_id', 'userbaja_id'
    ];

    public function Usuario()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
    public function UsuarioAlta()
    {
        return $this->belongsTo('App\Models\User', 'useralta_id');
    }
    public function UsuarioBaja()
    {
        return $this->belongsTo('App\Models\User', 'userbaja_id');
    }
    public function AreaVenta()
    {
         $sub = $this->belongsTo('App\Models\Dictionary', 'areaventa_id' , 'code')
        ->where('reference_type', 'AREA_VENTA'); 
        return $sub;
    }
    public function AreaVentaFormat()
    {
         $sub = $this->belongsTo('App\Models\Dictionary', 'areaventa_id' , 'code')->select(['code', 'text'] )
        ->where('reference_type', 'AREA_VENTA'); 
        return $sub;
    }
    
    
}
