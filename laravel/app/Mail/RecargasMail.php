<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use ArrayObject;
use App\Models\Sim;
use DateTime;

class RecargasMail extends Mailable
{
    use Queueable, SerializesModels;

    public $subject = "Departamento Sistemas";
    public $recarga;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($recarga)
    {
        $this->recarga = $recarga;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mails.recarga');
    }
}
