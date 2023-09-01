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
<p style="text-align: center;"><span style='text-align: center; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 17px;'><strong><span style="color: rgb(85, 57, 130);">Evaluaciones del periodo: {{$periodoDep}}</span></strong></span><span style='text-align: center; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong><span style="color: rgb(85, 57, 130);">&nbsp;</span></strong></span><em style='text-align: center; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'></em></p>
<p><span style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 15px;'><strong>Resultados de:</strong>&nbsp;</span><span style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><em>{{$departamentoEvaluado->name}}</em>&nbsp;</span></p>
<ul style="list-style-type: disc;">
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Evaluaci&oacute;n Departamento: </strong><em>{{$pdesempeno}}</em></li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Numero de evaluaciones realizadas:</strong> {{$noResultadosDepartamento}}</li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Numero de evaluaciones esperadas:</strong> {{$noEvaluacionesDepartamento}}</li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Promedio:</strong> {{$promedioDepartamento}}</li>
</ul>

<table id="customers">
  <tr>
    <th>Factores</th>
    <th>Promedio</th>
  </tr>
  <tr>
    <td>Conocimiento</td>
    <td>{{$promediosFactores[0]}}</td>
  </tr>
  <tr>
    <td>Comunicacion</td>
    <td>{{$promediosFactores[1]}}</td>
  </tr>
  <tr>
    <td>Rapidez</td>
    <td>{{$promediosFactores[2]}}</td>
  </tr>
  <tr>
    <td>Trabajo en equipo</td>
    <td>{{$promediosFactores[3]}}</td>
  </tr>
  <tr>
    <td>Auto-conocimiento</td>
    <td>{{$promediosFactores[4]}}</td>
  </tr>
  <tr>
    <td>Receptivo</td>
    <td>{{$promediosFactores[5]}}</td>
  </tr>
  <tr>
    <td>Enseñanza</td>
    <td>{{$promediosFactores[6]}}</td>
  </tr>
  <tr>
    <td>Empatia</td>
    <td>{{$promediosFactores[7]}}</td>
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