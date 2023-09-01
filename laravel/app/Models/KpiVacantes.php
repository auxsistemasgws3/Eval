<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KpiVacantes extends Model
{
    use HasFactory;
    protected $table = 'kpi_vacantes';
    protected $dates = ['created_at', 'updated_at'];

    public function Sucursal()
    {
        return $this->belongsTo('App\Models\Store', 'sucursal_id');
    }

    public function Estatus()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'estatus', 'code')
            ->where('reference_type', 'ESTATUS');
        return $sub;
    }
}
