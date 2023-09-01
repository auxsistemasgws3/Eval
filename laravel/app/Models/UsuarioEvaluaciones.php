<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioEvaluaciones extends Model
{
    use HasFactory;
    protected $table = 'usuario_evaluaciones';
    protected $dates = ['created_at', 'updated_at'];

   
    
    public function Empresa()
    {
    $sub = $this->belongsTo('App\Models\Dictionary','Empresa','code')
    ->where('reference_type', 'EMPRESA');
    return $sub;
    }

    public function Departamento()
    {
        return $this->belongsTo('App\Models\Dictionary','Departamento','text')
        ->where('reference_type', 'DEPARTAMENTO');
    }

    public function FechaNacimiento()
    {
        $sub = $this->belongsTo('App\Models\Users','fecha_nacimiento');
        return $sub;
        
    }

    public function FechaIngreso()
    {
        $sub = $this->belongsTo('App\Models\Users','fecha_ingreso');
        
        return $sub;
    }

    public function IdLider()
    {
        $sub = $this->belongsTo('App\Models\Users','ID_Lider','id')->
        where('lider','1');
        return $sub;
    }

    public function Lider()
    {
        $sub = $this->belongsTo('App\Models\Users','lider');
        
        return $sub;
    }

    public function Activo()
    {
        $sub = $this->belongsTo('App\Models\Users','estatus');
        
        return $sub;
    }






 
}