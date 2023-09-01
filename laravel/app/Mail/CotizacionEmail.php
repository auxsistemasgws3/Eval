<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Models\Venta;

class CotizacionEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The demo object instance.
     *
     * @var Cotizacion
     */
    public $cotizacion;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Venta $cotizacion)
    {
        $this->cotizacion = $cotizacion;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $venta = Venta::where('id', $this->cotizacion->id )->first();
        $media = $venta->getMedia('cotizaciones')->where('id',$venta->file_cotizacion)->first();
        return $this->subject('COTIZACIÓN GRUPO WATT SOLAR')
            ->view('mails.cotizacion')
            ->text('mails.cotizacion_plain')
            ->attach($media->getPath(), [
                  'as' => $media->file_name,
                  'mime' => $media->mime_type,
          ])
          ;
    }
 
}
