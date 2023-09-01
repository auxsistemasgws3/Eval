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
<p><span style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 15px;'><strong>Resultados de:</strong>&nbsp;</span><span style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><em>{{$usuarioEvaluado->name}} - {{$usuarioEvaluado->puesto}}</em>&nbsp;</span></p>
<ul style="list-style-type: disc;">
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Evaluaci&oacute;n Desempeño: </strong><em>{{$pdesempeno}}</em></li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Numero de evaluaciones realizadas:</strong> {{$noEvaluacionesRealizadas}}</li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Numero de evaluaciones esperadas:</strong> {{$noEvaluacionesEsperadas}}</li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Promedio:</strong> {{$resultadosDesempenoPromedio}}</li>
</ul>

<table id="customers">
  <tr>
    <th>Factores</th>
    <th>Promedio</th>
  </tr>
  <tr>
    <td>Calidad</td>
    <td>{{$promediosFactoresLider[0]}}</td>
  </tr>
  <tr>
    <td>Responsabilidad</td>
    <td>{{$promediosFactoresLider[1]}}</td>
  </tr>
  <tr>
    <td>Conocimiento del puesto</td>
    <td>{{$promediosFactoresLider[2]}}</td>
  </tr>
  <tr>
    <td>Cooperacion</td>
    <td>{{$promediosFactoresLider[3]}}</td>
  </tr>
  <tr>
    <td>Puntualidad</td>
    <td>{{$promediosFactoresLider[4]}}</td>
  </tr>
  <tr>
    <td>Relaciones interpersonales</td>
    <td>{{$promediosFactoresLider[5]}}</td>
  </tr>
  <tr>
    <td>Iniciativa</td>
    <td>{{$promediosFactoresLider[6]}}</td>
  </tr>
  <tr>
    <td>Organizacion</td>
    <td>{{$promediosFactoresLider[7]}}</td>
  </tr>
  <tr>
    <td>Uniforme</td>
    <td>{{$promediosFactoresLider[8]}}</td>
  </tr>
  <tr>
    <td>Servicio al cliente</td>
    <td>{{$promediosFactoresLider[9]}}</td>
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