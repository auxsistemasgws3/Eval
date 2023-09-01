<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluaciones extends Model
{
    use HasFactory;
    protected $table = 'resultados_evaluaciones';
    protected $dates = ['created_at', 'updated_at'];
}
