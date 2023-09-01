<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Models\Users;
use DateTime;
use Illuminate\Support\Str;

class EmailCumple extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'Email:Cumple';

    /**
     * The console command description.
     *
     * @var string
     * 
     */
    protected $description = 'Enviar email cumpleaños';

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
        $date = new DateTime();
        $fechahoy = Carbon::today();
        $today = now(); 

        // $fecha_nacimiento = Users::whereDay('fecha_nacimiento', '=', '$today')->whereMonth('fecha_nacimiento', '=', '$today')->get();
        //Se trae los nombres y la fecha de cumpleanos de cada usuario
        $persona_cumple = Users::select('name','primer_apellido','segundo_apellido')
        ->whereMonth('fecha_nacimiento', '=', $today->month)
        ->whereDay('fecha_nacimiento', '=', $today->day)->get();
        //error_log($nombre_cumple);

        //Recorre la cadena para elimina los caracteres especiales y agregarle comas
       foreach($persona_cumple as $user){
            //$persona_cumple = strtoupper($user->name);
            $remplazo_caracteres = preg_replace('([^A-Za-z0-9 ])', ' ', $persona_cumple);
            $remplazo_name = preg_replace('(name)', ',', $remplazo_caracteres);
            $nombre_cumple = preg_replace('([a-z])', ' ', $remplazo_name);
            //error_log($nombre_cumple);
       }
 
       //Se trae el usuario con la empresa a la que pertenece 
        $empresa_usuario = Users::select('id_empresa','name')
        ->whereMonth('fecha_nacimiento', '=', $today->month)
        ->whereDay('fecha_nacimiento', '=', $today->day)->get();


        $countGWS = substr_count($empresa_usuario, '1'); //GRUPO WATT SOLAR
       
        $countMS = substr_count($empresa_usuario, '2'); //MAYORISTA PANELES SOLARES


        $fecha_nacimiento = Users::whereMonth('fecha_nacimiento', '=', $today->month)->whereDay('fecha_nacimiento', '=', $today->day)->get();

        $empresa = 0;
        $directory = "";
        if($countGWS > 0 && $countMS > 0){

            if (count($fecha_nacimiento) > 0) {
                Mail::send('mails/cumple', compact('nombre_cumple'), function ($mail) {
                    $mail->from('energiasolar@grupowattsolar.com');
                    $mail->to('auxsistemas@grupowattsolar.com');
                    $mail->subject("Feliz Cumpleaños!!!");
                    $mail->headers = array(
                        'From' => 'Departamento de Recursos Humanos'
                    );
                });             
            }
            

        }elseif($countGWS > 0 && $countMS == 0) {
            
            if (count($fecha_nacimiento) > 0) {
                Mail::send('mails/cumplegws', compact('nombre_cumple'), function ($mail) {
                    $mail->from('energiasolar@grupowattsolar.com');
                    $mail->to('auxsistemas@grupowattsolar.com');
                    $mail->subject("Feliz Cumpleaños!!!");
                    $mail->headers = array(
                        'From' => 'Departamento de Recursos Humanos'
                    );
                });             
            }


        }elseif($countMS > 0 && $countGWS == 0){

            if (count($fecha_nacimiento) > 0) {
                error_log(" lo envie");
                Mail::send('mails/cumplemps', compact('nombre_cumple'), function ($mail) {
                    $mail->from('energiasolar@grupowattsolar.com');
                    $mail->to('auxsistemas@grupowattsolar.com');
                    $mail->subject("Feliz Cumpleaños!!!");
                    $mail->headers = array(
                        'From' => 'Departamento de Recursos Humanos'
                    );
                });             
            }
           
        }


}
}
?>
