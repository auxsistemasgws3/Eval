<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Municipio extends Model
{
    use HasFactory;
    protected $table = 'municipios';
    protected $dates = ['created_at', 'updated_at'];
    public function Estado()
    {
        return $this->belongsTo('App\Models\Estado', 'estado_id');
    }
}
