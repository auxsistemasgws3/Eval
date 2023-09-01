<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Folio extends Model
{
    use HasFactory;
    protected $table = 'folios';
    protected $dates = ['created_at', 'updated_at'];
}
