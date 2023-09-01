<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Venta;

class CerradoVentaEmail extends Mailable
{
    use Queueable, SerializesModels;
    public $cerrado;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Venta $cerrado)
    {
        $this->cerrado = $cerrado;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('COTIZACIÓN CERRADA GRUPO WATT SOLAR')
            ->view('mails.cerrado')
            ->text('mails.cerrado_plain');
    }
}
