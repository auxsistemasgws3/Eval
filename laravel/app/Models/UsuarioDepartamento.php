<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioDepartamento extends Model
{
    use HasFactory;
    protected $table = 'usuario_departamento';
    protected $dates = ['updated_at','created_at',];
    protected $fillable = ['id_Usuario','id_Departamento'];

    

    public function Usuario()
    {
        return $this->belongsTo('App\Models\User','id');
    }

    public function Departamento()
    {
        return $this->belongsTo('App\Models\Dictionary','id_Departamento','code')
        ->where('reference_type', 'DEPARTAMENTO');
    }



}
