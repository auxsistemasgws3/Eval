<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Orden de servicio</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <style>
        html {
            padding: 0;
            padding-top: 3mm;
            margin: 0;
            margin-top: 3mm;
        }

        body {
            font-family: sans-serif;
        }

        .table tbody td {
            font-size: 2.8mm;
            text-align: left;
            padding-left: 1mm;
        }

        table tr th {
            vertical-align: middle;
        }

        .table {
            vertical-align: middle;
            margin-bottom: 4mm;
        }

        .table-desc tr th,
        b {
            font-size: 3mm;

        }
        .table-bordered td,
        .table-bordered th {
            border: 1px solid #202020;
            border-bottom-width: 1px;
        }
        .table thead th {
            vertical-align: bottom;
            border-bottom: 1px solid #202020;
            border-bottom-width: 1px;
        }
        .table-sm td,
        .table-sm th {
            padding: .1rem;
        }

        img {
            height: 9mm;
            padding-top: 2mm;
        }

        hr {
            color: #202020;
            background: #202020;
            margin: 0 1cm;
        }
    </style>
</head>

<body>
    <div class="container-fluid">
        <table class="table table-bordered table-sm">
            <thead>
                <tr>
                    <th width="15%" class="text-center ">
                        <img src="{{ storage_path('app/public/brand/wattsolar-logo.png') }}" alt="logo" />
                    </th>
                    <th colspan="3"  width="65%" class="text-center">
                        <p style="margin:2.2mm">Orden de servicio</p>
                    </th>
                    <th colspan="2" width="20%" class="text-center">
                        {{$ordenservicio->Estatus->text}}
                    </th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr>
                    <td width="15%" class="bg-success text-center font-weight-bolder">Lugar:</td>
                    <td width="65%" colspan="3">{{$orden->sucursal->name}}</td>
                    <td width="10%" class="bg-success text-center font-weight-bolder">Folio:</td>
                    <td width="10%" > {{$ordenservicio->folio}}</td>
                </tr>
                <tr>
                    <td class="bg-success text-center font-weight-bolder">Cliente:</td>
                    <td colspan="3">{{$ordenservicio->orden->nombre_cliente}}</td>
                    <td class="bg-success text-center font-weight-bolder">Proyecto:</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="bg-success text-center font-weight-bolder">Domicilio:</td>
                    <td colspan="3">{{$ordenservicio->orden->calle}} {{$ordenservicio->orden->numero}} {{$ordenservicio->orden->colonia}} cp. {{$ordenservicio->orden->cp}}</td>
                    <td class="bg-success text-center font-weight-bolder">Teléfono:</td>
                    <td>{{$ordenservicio->orden->telefono}}</td>
                </tr>
                <tr>
                    <td class="bg-success text-center font-weight-bolder">Atendio:</td>
                    <td colspan="3"></td>
                    <td class="bg-success text-center font-weight-bolder">Fecha:</td>
                    <td>{{date('d/m/Y', strtotime($ordenservicio->created_at))  }}</td>
                </tr>
                <tr>
                    <td width="25%" colspan="2" class="bg-success text-center font-weight-bolder">Observaciones</td>
                    <td width="25%" class="bg-success" ></td>
                    <td width="25%" class="bg-success" ></td>
                    <td width="25%" colspan="2" class="bg-success text-center font-weight-bolder">Solución que se aplica</td>
                </tr>
                <tr >
                    <td colspan="2" class="text-left">
                        {{$ordenservicio->observaciones}}
                        
                    </td>
                    <td>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                    </td>
                    <td></td>
                    <td colspan="2"></td>
                </tr>
            </tbody>
        </table>
        <table width="100%">
            <tr>
                <td width="50%"  class="text-center">
                    <br>
                    <br>
                    <br>
                    <br>
                    <hr>
                    <b>Nombre y firma de quien atendio</b><br>
                    <b>Técnico / Colaborador</b>
                </td>
                <td width="50%" class="text-center">
                    <br>
                    <br>
                    <br>
                    <br>
                    <hr>
                    <b>Nombre y firma conformidad</b><br>
                    <b>Cliente</b>
                </td>
            </tr>
        </table>
       
    </div>
</body>

</html>