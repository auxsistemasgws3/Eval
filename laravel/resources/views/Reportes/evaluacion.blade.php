<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Resultados de Evaluaciones</title>
    <style>
        /** Define the margins of your page **/
       

        body {
            font-family: sans-serif; 
        }

        header {
            font-family: sans-serif;
            position: fixed;
            top: -60px;
            left: 0px;
            right: 0px;
            height: 50px;
        }

        #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        }

        #customers td, #customers th {
        /* border: 1px solid #ddd;
        padding: 8px; */

        order: 1px solid black;
        /* border-collapse: collapse; */
        /* text-align: center; */
        }

        #customers tr:nth-child(even){
          background-color: #f2f2f2;

          order: 1px solid black;
          border-collapse: collapse;
        
        }

        #customers tr:hover {
          /* background-color: #ddd; */

          order: 1px solid black;
          border-collapse: collapse;  
        }

        #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        /* text-align: left; */
        background-color: black;
        color: white;

        
        }
    </style>

</head>
    <p style="text-align: right;"><span style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'>Fecha: {{$fecha}}</span></p>
<p style="text-align: center;"><span style='text-align: center; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 17px;'><strong><span style="color: rgb(85, 57, 130);">Evaluaciones del periodo: {{$periodo}}</span></strong></span><span style='text-align: center; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong><span style="color: rgb(85, 57, 130);">&nbsp;</span></strong></span><em style='text-align: center; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'></em></p>
<p><span style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 15px;'><strong>Resultados de la evaluaci&oacute;n entre lideres:</strong>&nbsp;</span><span style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><em>{{$usuarioEvaluado->name}} - {{$usuarioEvaluado->puesto}}</em>&nbsp;</span></p>
<ul style="list-style-type: disc;">
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Evaluaci&oacute;n l&iacute;der: </strong><em>{{$pdesempeno}}</em></li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Numero de evaluaciones recibidas:</strong> {{$NoResultadosLider}}</li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Numero de evaluaciones realizadas:</strong> {{$noEvaluacionesRealizadas}}</li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Numero de evaluaciones esperadas:</strong> {{$noEvaluacionesEsperadas}}</li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Promedio de evaluaciones:</strong> {{$promedioLider}}</li>
</ul>

<table id="customers">
  <tr>
    <th>Factores</th>
    <th>Promedio</th>
  </tr>
  <tr>
    <td>Apertura</td>
    <td>{{$promediosFactoresLider[0]}}</td>
  </tr>
  <tr>
    <td>Empatia</td>
    <td>{{$promediosFactoresLider[1]}}</td>
  </tr>
  <tr>
    <td>Pasion</td>
    <td>{{$promediosFactoresLider[2]}}</td>
  </tr>
  <tr>
    <td>Reconocimiento</td>
    <td>{{$promediosFactoresLider[3]}}</td>
  </tr>
  <tr>
    <td>Ideas</td>
    <td>{{$promediosFactoresLider[4]}}</td>
  </tr>
  <tr>
    <td>Maurez emocional</td>
    <td>{{$promediosFactoresLider[5]}}</td>
  </tr>
  <tr>
    <td>Participacion</td>
    <td>{{$promediosFactoresLider[6]}}</td>
  </tr>
  <tr>
    <td>Ejemplo</td>
    <td>{{$promediosFactoresLider[7]}}</td>
  </tr>
  <tr>
    <td>Conocimientos</td>
    <td>{{$promediosFactoresLider[8]}}</td>
  </tr>
  <tr>
    <td>Actitud</td>
    <td>{{$promediosFactoresLider[9]}}</td>
  </tr>
  <tr>
    <td>Positivo</td>
    <td>{{$promediosFactoresLider[10]}}</td>
  </tr>
  <tr>
    <td>Comunicacion asertiva</td>
    <td>{{$promediosFactoresLider[11]}}</td>
  </tr>
  <tr>
    <td>Resiliencia</td>
    <td>{{$promediosFactoresLider[12]}}</td>
  </tr>
  <tr>
    <td>Trabajo en equipo</td>
    <td>{{$promediosFactoresLider[13]}}</td>
  </tr>
  <tr>
    <td>Imagen</td>
    <td>{{$promediosFactoresLider[14]}}</td>
  </tr>
  <tr>
    <td>Enseñanza</td>
    <td>{{$promediosFactoresLider[15]}}</td>
  </tr>
  <tr>
    <td>Puntualidad</td>
    <td>{{$promediosFactoresLider[16]}}</td>
  </tr>
  <tr>
    <td>Convivencia</td>
    <td>{{$promediosFactoresLider[17]}}</td>
  </tr>
  <tr>
    <td>Respeto</td>
    <td>{{$promediosFactoresLider[18]}}</td>
  </tr>
  <tr>
    <td>Autocontrol</td>
    <td>{{$promediosFactoresLider[19]}}</td>
  </tr>
  <tr>
    <td>Procesos</td>
    <td>{{$promediosFactoresLider[20]}}</td>
  </tr>
  <tr>
    <td>KPi's</td>
    <td>{{$promediosFactoresLider[21]}}</td>
  </tr>
  <tr>
    <td>Servicio al cliente interno</td>
    <td>{{$promediosFactoresLider[22]}}</td>
  </tr>
</table>
<p></p> 
<p></p> 
<p></p> 
<p></p>
<p style="text-align: center;"><strong>______________________________</strong></p>
<p style="text-align: center;"><strong>Enterado de mi evaluaci&oacute;n</strong></p>

</body>
</html>