<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sos extends Model
{
    use HasFactory;
    protected $table = 'reportes_sos';
    protected $dates = ['created_at', 'updated_at'];

    public function Sucursal()
    {
        return $this->belongsTo('App\Models\Store', 'id_sucursal');
    }
}
