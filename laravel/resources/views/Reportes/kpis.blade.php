<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>KPI's Vacantes</title>
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
<p style="text-align: center;"><span style='text-align: center; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 17px;'><strong><span style="color: rgb(85, 57, 130);">Vacante: {{$vacantes->nombre}}</span></strong></span><span style='text-align: center; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong><span style="color: rgb(85, 57, 130);">&nbsp;</span></strong></span><em style='text-align: center; font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'></em></p>
<ul style="list-style-type: disc;">
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Departamento: </strong><em>{{$departamento->text}}</em></li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Sucursal:</strong> {{$sucursal}}</li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Numero de descartados:</strong> {{$vacantes->descartados}}</li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Comentarios:</strong> {{$vacantes->comentarios}}</li>
    <li style='font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; font-size: 14px;'><strong>Activo/Inactivo:</strong> {{$activo}}</li>
</ul>

<table id="customers">
  <tr>
    <th>Factores</th>
    <th>Candidatos</th>
  </tr>
  <tr>
    <td>Postulados</td>
    <td>{{$vacantesGrafico[0]}}</td>
  </tr>
  <tr>
    <td>Contactados</td>
    <td>{{$vacantesGrafico[1]}}</td>
  </tr>
  <tr>
    <td>Citados a entrevista</td>
    <td>{{$vacantesGrafico[2]}}</td>
  </tr>
  <tr>
    <td>Asistencia a entrevista</td>
    <td>{{$vacantesGrafico[3]}}</td>
  </tr>
  <tr>
    <td>Envio psicométricos</td>
    <td>{{$vacantesGrafico2[0]}}</td>
  </tr>
  <tr>
    <td>Segunda entrevista</td>
    <td>{{$vacantesGrafico2[1]}}</td>
  </tr>
  <tr>
    <td>Investigación laboral</td>
    <td>{{$vacantesGrafico2[2]}}</td>
  </tr>
  <tr>
    <td>Examen medico</td>
    <td>{{$vacantesGrafico2[3]}}</td>
  </tr>
  <tr>
    <td>Documentación</td>
    <td>{{$vacantesGrafico2[4]}}</td>
  </tr>
  <tr>
    <td>Contratado</td>
    <td>{{$vacantesGrafico2[5]}}</td>
  </tr>
</table>
<p></p> 
<p></p> 
<p></p> 
<p></p>
<p style="text-align: center;"><strong>Contratado:</strong></p>
<p style="text-align: center;"><strong>{{$PContratado->nombre}}</strong></p>

</body>
</html>