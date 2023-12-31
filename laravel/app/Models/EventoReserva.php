<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventoReserva extends Model
{
    use HasFactory;
    protected $table = 'eventos_reserva';
    protected $dates = [
        'created_at', 'updated_at',
    ];
}
