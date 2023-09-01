<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Orden de trabajo</title>
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"> -->
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
        
            <table class="table table-bordered table-sm text-center table-desc">
            <thead>
                <tr>
                    <th colspan="2" class="text-center">
                    <img src="{{ public_path('img/brand/wattsolar-logo.png') }}"  width="120"  height="40" alt="logo" />
                    </th>
                    <th width="65%">
                        CUESTIONARIO DE INSTALACIÓN - SUCURSALES
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="3">Buen día, me comunico de Grupo Watt solar, con usted deseandole un excelente día y solicitandole unos minutos para conocer algunos datos necesarios para llevar a cabo su instalación, me permite por favor?</td> 
                </tr> 
            </tbody>
        </table>
        
        <table class="table table-bordered table-sm text-center table-desc">
            <thead>
                <tr>
                    <th bgcolor="#09aedb" colspan="2" class="text-center">
                        <p style="margin:2.2mm">INFORMACIÓN PARA INSTALACIÓN</p>
                    </th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width="55%">¿CUENTA CON SUBESTACIÓN?</td> 
                    <td width="17.5%">{{$vars_sino[0]}}</td> 
                </tr>
                <tr>
                    <td>¿DESEA QUE SU SISTEMA ESTÉ CONECTADO A LA SUBESTACIÓN?</td>
                    <td>{{$vars_sino[1]}}</td> 
                </tr>
                <tr>
                    <td>¿DE QUE CAPACIDAD ES SU SUBESTACIÓN EN KVA?</td>
                    <td>{{$encuesta->capacidad_subestacion}}</td> 
                </tr>
                <tr>
                    <td>SERVICIO EXISTENTE EN VOLTS</td>
                    <td>{{$encuesta->volts}}</td> 
                </tr>
                <tr>
                    <td>¿DONDE SE UBICA SU CENTRO DE CARGA?</td>
                    <td>{{$encuesta->ubicacion_centro}}</td> 
                </tr>
                <tr>
                    <td>TIPO DE MEDIDOR ACTUAL</td>
                    <td>{{$encuesta->medidor}}</td> 
                </tr>
                <tr>
                    <td>LUGAR DE CONCENTRACIÓN (A PARTIR DE 100 PERSONAS)</td>
                    <td>{{$vars_sino[2]}}</td> 
                </tr>
                <tr>
                    <td>¿EL DOMICILIO EN DONDE SE INSTALARA ESTA EN CONSTRUCCIÓN?</td>
                    <td>{{$vars_sino[3]}}</td> 
                </tr>
                <tr>
                    <td>UBICACIÓN DE LA INSTALACIÓN</td>
                    <td>{{$encuesta->ubicacon_instalacion}}</td> 
                </tr>
                <tr>
                    <td>¿EN QUE PISO DESEA LA INSTALACIÓN DE SU PROYECTO?</td>
                    <td>{{$encuesta->piso_instalacion}}</td> 
                </tr>
                <tr>
                    <td>METROS APROXIMADOS DE ALTURA  DEL TECHO</td>
                    <td>{{$encuesta->metros_techo}}</td> 
                </tr>
                <tr>
                    <td>¿LA INSTALACIÓN ES EN CASA HABITACIÓN O EN LOCAL COMERCIAL?</td>
                    <td>{{$encuesta->lugar_instalacion}}</td> 
                </tr> 
                <tr>
                    <td>¿CUENTA CON INTERNET EN EL DOMICILIO?</td>
                    <td>{{$vars_sino[4]}}</td> 
                </tr>
                <tr>
                    <td>UBICACIÓN DEL MODEM</td>
                    <td>{{$encuesta->ubicacion_internet}}</td> 
                </tr>
                <tr>
                    <td>PROVEEDOR DE INTERNET</td>
                    <td>{{$encuesta->proveedor_internet}}</td> 
                </tr>
                <tr>
                    <td>¿CON QUE TIPO DE TECHO CUENTA EL AREA EN LA QUE TRABAJAREMOS?</td>
                    <td>{{$encuesta->tipo_techo}}</td> 
                </tr>
                <tr>
                    <td>¿SE ENCUENTRA LIBRE DE OBSTACULOS EL AREA EN DONDE SE INSTALARAN LOS PANELES? (TINACO/EQUIPO DE REFRIGERACION O CALEFACCION/ANTENAS/BOILER SOLAR, ETC)</td>
                    <td>{{$encuesta->libre_obstaculos}}</td> 
                </tr>
                <tr>
                    <td>¿CON QUE TIPO DE IMPERMEABILIZADO CUENTA EL AREA EN LA QUE TRABAJAREMOS?</td>
                    <td>{{$encuesta->impermeabilizado}}</td> 
                </tr>
                <tr>
                    <td colspan="2">COMENTARIO</td> 
                </tr>
                <tr> 
                    <td colspan="2">{{$encuesta->comentario}}</td> 
                </tr>
                
            </tbody>
        </table>
         
        <table class="table table-bordered table-sm text-center table-desc">
            <thead>
                <tr>
                    <th bgcolor="#09aedb" colspan="2" class="text-center">
                        <p style="margin:2.2mm">INFORMACIÓN PARA TRÁMITES</p>
                    </th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width="55%">¿VA A REQUERIR CAMBIO DE NOMBRE EN SU RECIBO DE CFE?</td> 
                    <td width="17.5%">{{$vars_sino[5]}}</td> 
                </tr>
                <tr>
                    <td  colspan="2">A NOMBRE DE QUIEN QUEDARÁN LOS TRÁMITES DE CFE, ÉSTE DEBERÁ SER EL MISMO QUE EL DEL RECIBO DE CFE</td> 
                </tr>
                <tr>
                    <td width="10%">NOMBRE:</td>
                    <td width="90%">{{$encuesta->nombre}}</td> 
                </tr>
                <tr>
                    <td>PARENTESCO:</td>
                    <td>{{$encuesta->parentesco}}</td> 
                </tr>
                <tr>
                    <td>DIRECCIÓN:</td>
                    <td>{{$encuesta->direccion}}</td> 
                </tr>
                <tr>
                    <td>TELÉFONO:</td>
                    <td>{{$encuesta->telefono}}</td> 
                </tr>
                <tr>
                    <td>REPRESENTANTE LEGAL</td>
                    <td>{{$encuesta->reprentante_legal}}</td> 
                </tr>
                <tr>
                    <td style="text-align: center" bgcolor="#09aedb" colspan="2">CONTADO</td> 
                </tr>
                <tr>
                    <td colspan="2">LE COMENTO QUE EL FINIQUITO  DE SU PROYECTO DEBE DE SER LIQUIDADO AL TERMINO DE LA INSTALACION DE LOS PANELES, ESTO ES INDEPENDIENTE DE LA INSTALACION DEL MEDIDOR BIDIRECCIONAL YA QUE LOS TIEMPOS DE CFE NO DEPENDEN DE NOSOTROS. SIN EMBARGO NOSOTROS REALIZAMOS TODOS LOS TRAMITES NECESARIOS Y EL SEGUIMIENTO A LA INSTALACION DEL MISMO. </td> 
                </tr>
                <tr>
                    <td style="text-align: center" bgcolor="#09aedb" colspan="2">CRÉDITO</td> 
                </tr>
                <tr>
                    <td colspan="2">LE COMENTO QUE EL FINIQUITO  DE SU ANTICIPO DEBE DE SER LIQUIDADO ANTES DE INCIAR LA INSTALACIÓN DE LOS PANELES, SIN EMBARGO NOSOTROS REALIZAMOS TODOS LOS TRAMITES NECESARIOS Y EL SEGUIMIENTO A LA INSTALACION DE SU MEDIDOR BIDIRECCIONAL.</td> 
                </tr>
                <tr>
                    <td colspan="2">  RECUERDO QUE LOS TIEMPOS DE LA INSTALACION DEL MEDIDOR BIDIRECCIONAL ES APROXIMANDAMENTE DE UN MES A PARTIR DE QUE SE INGRESAN LOS DOCUMENTOS A LA OFICINA DE CFE CORRESPONDIENTE.  ESTO NO DEBE DE AFECTAR EL CUMPLIMIENTO DE SUS  PAGOS PROGRAMADOS,  YA QUE SON TIEMPOS DE CFE LOS QUE DETERMINAN LA INSTALACION DEL MEDIDOR BD</td> 
                </tr>
                
            </tbody>
        </table>
    </div>
</body>

</html>