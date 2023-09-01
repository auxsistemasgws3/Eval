<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class ArchivosOrden extends Model
{
    use HasFactory;
    protected $fillable = [
        'orden_id',
        'Referencia',
        'Instalacion_terminada',
        'INE_frente_titular',
        'INE_detras_titular',
        'INE_frente_aval',
        'INE_detras_aval',
        'INE_frente_recibo_cfe',
        'INE_detras_recibo_cfe',
        'Recibo_cfe',
        'INF_equipos',
        'Cotizacion',
        'PDF_cotizacion',
        'Financiamiento',
        'CORRIDA_pagos',
    ];
}