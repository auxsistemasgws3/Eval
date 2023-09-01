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
        
            <table width="100%" class="table table-bordered table-sm text-center table-desc">
            <thead>
                <tr>
                    <th width="65%" class="text-center">
                    <img src="{{ storage_path('app/public/brand/wattsolar-logo.png') }}"  width="120"  height="40" alt="logo" />
                    </th>
                    <th width="15%">
                        Fecha:
                    </th>
                    <th width="30%">
                    {{$fechacompleta}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th bgcolor="#09aedb" colspan="6" class="text-center">
                        <p style="margin:2.2mm height:30px"><font size=4>ACUERDO DE INSTALACIÓN</font></p>
                    </th> 
                </tr>
                 <tr>
                    <td class="text-center" colspan="3"><font size=1>HAGO CONSTAR QUE SE ME EXPLICÓ LUGAR Y FORMA RESPECTO AL MONTAJE DE PANELES, MISMO QUE AUTORIZO , ESTANDO CONSCIENTE QUE CUALQUIER MODIFICACIÓN CAUSARÁ UN GASTO ADICIONAL, AL MONTO INICIAL DEL PROYECTO, EL CUAL CORRERÁ POR 
                                          MI CUENTA Y DEBERÁ LIQUIDARSE AL DEL TÉRMINO DE LA INSTALACIÓN.</font></td> 
                </tr>
                <tr>
                    <th width="35%">Tecnico en instalacion</th>
                    <th width="65%" colspan="3">No. Contrato</th>  
                </tr>
                <tr height="30">
                    <td width="35%"></td>
                    <th width="65%" colspan="3">{{$orden->no_contrato}}</th>  
                </tr>
            </tbody>
        </table>

        <table width="100%" class="table table-bordered table-sm text-center table-desc" >
            <thead>

            </thead>
            <tbody>
                <tr>
                    <td width="30%"><font size=2>Numero de paneles instalados:</font></td>
                    <th width="30%"><font size=2>{{$orden->no_paneles}}</font></th>
                    <!-- <th width="45%">gsrgvrs</th>  -->   
                </tr>

                <tr>
                    <td><font size=2>Capacidad de los panales:</font></td>
                    <th><font size=2>{{$orden->potencia_panel}}</font></th> 
                </tr>

                <tr>
                    <td><font size=2>Numero de inversores instalados:</font></td>
                    <th ><font size=2>{{$orden->cantidad_inversor}}</font></th>
                    <th class="text-center"><font size=2>Tecnico en instalacion</font></th> 
                </tr>

                <tr>
                    <td><font size=2>Capacidad del inversor:</font></td>
                    <th ><font size=2>{{$orden->capacidad_inversor}}</font></th>
                    <th class="text-center"><font size=2>Nombre completo y firma</font></th> 
                </tr>
            </tbody>
        </table>
        
    <br>
    <br>
    <br>
        
        <table width="100%" class="table table-bordered table-sm text-center table-desc">
            <thead>
                <tr>
                    <th bgcolor="#09aedb" colspan="6" class="text-center">
                        <p style="margin:2.2mm height:20px">ENCUESTA DE CALIDAD PARA EVALUAR LA ATENCIÓN DE SUCURSAL Y EQUIPO DE INSTALACIONES</p>
                    </th> 
                </tr>
            </thead>
            <tbody style="height:1000px">
                <tr>
                    <th style="margin:2.2mm height:20px" colspan="6">En la escala del 1 a 5 dónde 5 es excelente, 4 bueno, 3 regular, 2 malo y 1 pésimo, POR FAVOR COLOQUE UN 'X' EN LA OPCIÓN QUE NOS CALIFIQUE.</th> 
                </tr>
                <tr>
                    <td width="75%"><font size=2>¿Usted considera que los instaladores le brindaron información clara y precisa sobre el funcionamiento de su sistema fotovoltaico?</font></td> 
                    <th width="5%">1.____</th>
                    <th width="5%">2.____</th>
                    <th width="5%">3.____</th>
                    <th width="5%">4.____</th>
                    <th width="5%">5.____</th> 
                </tr>
                <tr>
                    <td width="75%"><font size=2>¿Qué tan respetuosos fueron nuestros instaladores?</font></td> 
                    <th width="5%">1.____</th>
                    <th width="5%">2.____</th>
                    <th width="5%">3.____</th>
                    <th width="5%">4.____</th>
                    <th width="5%">5.____</th> 
                </tr>
                <tr>
                    <td width="75%"><font size=2>¿Qué tan satisfecho quedó con el servicio proporcionado por nuestros instaladores?</font></td> 
                    <th width="5%">1.____</th>
                    <th width="5%">2.____</th>
                    <th width="5%">3.____</th>
                    <th width="5%">4.____</th>
                    <th width="5%">5.____</th>  
                </tr>
                <tr>
                    <td width="75%"><font size=2>¿Qué tan limpio dejaron el área de trabajo los instaladores?</font></td> 
                    <th width="5%">1.____</th>
                    <th width="5%">2.____</th>
                    <th width="5%">3.____</th>
                    <th width="5%">4.____</th>
                    <th width="5%">5.____</th>  
                </tr>
                <tr>
                    <td width="75%"><font size=2>¿Qué tan efectivas han sido las soluciones de equipo de servicio al cliente a sus preguntas y preocupaciones?</font></td> 
                    <th width="5%">1.____</th>
                    <th width="5%">2.____</th>
                    <th width="5%">3.____</th>
                    <th width="5%">4.____</th>
                    <th width="5%">5.____</th>   
                </tr>
                <tr>
                    <td width="75%"><font size=2>¿Considerando su experiencia con nuestros productos y servicios, ¿qué probabilidades hay de que nos recomiendes a un amigo o familiar?</font></td> 
                    <th width="5%">1.____</th>
                    <th width="5%">2.____</th>
                    <th width="5%">3.____</th>
                    <th width="5%">4.____</th>
                    <th width="5%">5.____</th>  
                </tr>
                <tr>
                    <td width="75%"><font size=2>Considerando su experiencia con nuestros productos y servicios, ¿qué probabilidades hay de que nos recomiendes a un amigo o familiar?</font></td> 
                    <td colspan="5" width="10%"></td> 
                </tr>
                <tr>
                    <td width="75%"><font size=2>¿La cuadrilla resanó con redimix y/o impermeabilizante las perforaciones necesarias para la instalación de su sistema solar?</font></td> 
                    <td colspan="5" width="10%"></td> 
                </tr>
                
            </tbody>
        </table>

    <br>
    <br>
    <br>
         
        <table  width="100%" class="table table-bordered table-sm text-center table-desc">
            <thead>
                <tr>
                    <th bgcolor="#09aedb" colspan="2" class="text-center">
                        <p style="margin:2.2mm">AUTORIZACION DE MONTAJE</p>
                    </th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width="35%"><font size=2>Nombre completo de cliente:</font></td> 
                    <td width="60%"></td> 
                </tr>
                <tr>
                    <td><font size=2>Firma:</font></td> 
                    <th>__________________________________________________________</th> 
                </tr>
                <tr>
                    <td><font size=2>Fecha y hora:</font></td> 
                    <th>AUTORIZO MONTAJE (Nombre y Firma)</th> 
                </tr>
                   
            </tbody>
        </table>
    </div>
</body>

</html>