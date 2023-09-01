<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EvaluacionesDepartamento extends Model
{
    use HasFactory;
    protected $table = 'evaluaciones_departamento';
    protected $dates = ['created_at', 'updated_at'];
//Hii
public function lider(){
    return $this->belongsTo('App\Models\Users', 'id_dictionaries', 'id_departamento')->where('lider',1);
}


}
