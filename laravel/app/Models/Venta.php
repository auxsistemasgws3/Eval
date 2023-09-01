<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
class Venta extends Model implements HasMedia
{
    use InteractsWithMedia;
    protected $table = 'ventas';
    protected $dates = ['created_at', 'updated_at', 'fecha_cotizado', 'fecha_cerrado'];
    protected $appends = ['file_cotizacion'];

    public function Usuario()
    {
        return $this->belongsTo('App\Models\User', 'usuario_id');
    }
    public function Estatus()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'estatus', 'code')
            ->where('reference_type', 'VENTA_ESTATUS');
        return $sub;
    }
    public function TipoVivienda()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'tipo_vivienda', 'code')
            ->where('reference_type', 'TIPO_DOMICILIO');
        return $sub;
    }
    public function ConsumoPromedio()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'consumo_promedio', 'code')
            ->where('reference_type', 'CONSUMO_PROMEDIO');
        return $sub;
    }
    public function TipoVenta()
    {
        $sub = $this->belongsTo('App\Models\Dictionary', 'tipo_venta', 'code')
            ->where('reference_type', 'AREA_VENTA');
        return $sub;
    }
    public function Orden()
    {
        $sub = $this->belongsTo('App\Models\Orden', 'orden_id');
        return $sub;
    }
    public function Estado()
    {
        $sub = $this->belongsTo('App\Models\Estado', 'estado');
        return $sub;
    }
    public function Municipio()
    {
        $sub = $this->belongsTo('App\Models\Municipio', 'municipio');
        return $sub;
    }
    public function getFileCotizacionAttribute()
    {
        return $this->media()->orderByDesc("created_at")->pluck('id')->first();
    }
}
