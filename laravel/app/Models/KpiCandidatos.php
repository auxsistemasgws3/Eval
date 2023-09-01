<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KpiCandidatos extends Model
{
    use HasFactory;
    protected $table = 'kpi_candidatos';
    protected $dates = ['created_at', 'updated_at'];

    public function Sucursal()
    {
        return $this->belongsTo('App\Models\Store', 'sucursal_id');
    }
    public function Vacante()
    {
        return $this->belongsTo('App\Models\KpiVacantes', 'vacante');
    }
    public function Estatus()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'estatus_id', 'code')
            ->where('reference_type', 'KPI_ESTATUS');
        return $sub;
    }
    public function Plataforma()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'plataforma', 'code')
            ->where('reference_type', 'PLATAFORMA');
        return $sub;
    }
    public function Proceso()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'estatus', 'code')
            ->where('reference_type', 'ESTATUS');
        return $sub;
    }
    public function Departamento()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'departamento', 'code')
            ->where('reference_type', 'DEPARTAMENTO');
        return $sub;
    }
    
}
