<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Venta;

class CapturaVentaEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The demo object instance.
     *
     * @var Cotizacion
     */
    public $captura;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Venta $captura)
    {
        $this->captura = $captura;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('CAPTURA GRUPO WATT SOLAR')
            ->view('mails.captura')
            ->text('mails.captura_plain');
    }
}
