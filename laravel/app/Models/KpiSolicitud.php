<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KpiSolicitud extends Model
{
    use HasFactory;
    protected $table = 'solicitudes_kpi';
    protected $dates = ['created_at', 'updated_at'];

    public function Sucursal()
    {
        return $this->belongsTo('App\Models\Store', 'ubicacion_definicion');
    }

    public function Departamento()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'departamento_definicion', 'code')
            ->where('reference_type', 'DEPARTAMENTO');
        return $sub;
    }
}
