<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Mail\RecargasMail;
use Illuminate\Support\Facades\Mail;
use App\Models\Sim;
use DateTime;

class EmailRecarga extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'Email:Recarga';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Enviar email recarga';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $date2 = new DateTime();
        $sim = Sim::get();
        $encontrados ="";

        for($i=0;$i<sizeof($sim);$i++){
            $date1 = new DateTime($sim[$i]->FechaRecarga);
            $tiempotrans = $date1->diff($date2);
            if(($tiempotrans->m)>=2){
                $encontrados="Numero: ".$sim[$i]->NumeroTel."| |".$encontrados;
            }
            }
            if($encontrados !=""){
                Mail::to('auxsistemas2@grupowattsolar.com')->send(new RecargasMail($encontrados));
                Mail::to('auxsistemas@grupowattsolar.com')->send(new RecargasMail($encontrados));
                Mail::to('sistemas@grupowattsolar.com')->send(new RecargasMail($encontrados));
            }
    }
}
