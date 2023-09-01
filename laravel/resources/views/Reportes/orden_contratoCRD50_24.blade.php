<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contrato</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <style>
        /** Define the margins of your page **/
        @page {
            margin: 100px 25px;
        }


        body {
            font-family: sans-serif;
            font-size: 9px;
        }

        .enterprimera {
            page-break-after: always;
        }

        header {
            font-family: sans-serif;
            position: fixed;
            top: -60px;
            left: 0px;
            right: 0px;
            height: 50px;

        }

        .portadaimagen {
            position: relative;
            color: white;
            text-align: right;
            display: inline-block;
        }

        .portadafecha {
            position: absolute;
            text-align: right;
            top: 35%;
            left: 65%;
            font-size: 20px;
            color: black;
        }


        footer {

            font-family: sans-serif;
            position: fixed;
            bottom: -50px;
            left: 0px;
            right: 0px;
            height: 60px;
            color: #aab3ad
        }

        footer .pagenum:before {
            content: counter(page)-1;
        }

        table,
        th,
        td {
            border: 0px solid black;
            text-align: center;
        }

        table.pieFormato tr td {
            font-size: 10px;

            text-align: center;
        }

        .justify {
            text-align: justify;
        }

        div h5 {
            text-align: center;
            font-weight: bold;
        }

        div h6 {
            text-align: left;
            font-weight: bold;
        }

        div p {
            text-align: justify;
        }

        #vinetas div p {
            text-align: justify;
            padding-left: 50px;
        }

        .titulos1 {
            text-align: center;
            font-weight: bold;
        }

        .titulos2 {
            text-align: start;
            font-weight: bold;
        }

        #encabezado {
            font-family: sans-serif, Arial, Helvetica;
            width: 100%;
            font-size: 20px;
            color: #aab3ad
        }

        #encabezado td,
        #encabezado th {
            text-align: center;
        }

        #productos {
            font-family: sans-serif, Arial, Helvetica;
            border-collapse: collapse;
            width: 100%;
        }

        #productos td,
        #productos th {
            border: 1px solid #ddd;
            padding: 4px;
        }

        #productos tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        #productos tr:hover {
            background-color: #ddd;
        }

        #productos th {
            padding-top: 5px;
            padding-bottom: 5px;
            text-align: left;
            background-color: #0b3ee6;
            color: white;
        }

        #medidortable {
            font-family: sans-serif, Arial, Helvetica;
            border-collapse: collapse;
            width: 100%;
        }

        #medidortable td,
        #medidortable th {
            border: 1px solid #ddd;
            text-align: justify;
        }

        #medidortable th {
            text-align: center;
            background-color: #00a115;
        }

        #firmas {
            font-family: sans-serif, Arial, Helvetica;
            border-collapse: collapse;
            width: 100%;
        }

        #firmas td,
        #firmas th {
            padding: 8px;
        }

        #firmas th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: center;
        }

        #aval p {
            font-weight: bold;
            text-align: center;
        }

        #cursivatext {
            font-style: italic;
            text-align: justify;
        }

        #Portada {
            top: 30%;
            font-size: 40px;
            text-align: center;
        }


        span {
            text-decoration: underline;
        }
    </style>

</head>

<body>

    <div id="Portada">
        <br><br>
        <img src="{{ storage_path('app/public/brand/wattsolar-logo.png') }}" alt="Portada" width="500" height="200" />
        <br><br><br>
        <p style="text-align: center;">{{$orden->nombre_cliente}}</p>
    </div>

    <div class="portadaimagen">
        <img src="{{ storage_path('app/public/brand/ImgPortada.png') }}" alt="Portada2" style="width:100%;">
        <div class="portadafecha">{{$vars_fecha[0]}}</div>
    </div>
    <div class="enterprimera">
        .
    </div>
    <header>
        <table id="encabezado">
            <tr>
                <td width="25%"><img src="{{ storage_path('app/public/brand/wattsolar-logo.png') }}" width="120" height="40" alt="logo" /> </td>
                <td width="45%">www.grupowattsolar.com</td>
                <td width="45%" style="text-align: right;">Contrato CRD No. {{$orden->no_contrato}}</td>
            </tr>
        </table>
    </header>

    <footer>
        <table style="width: 100%;" class="pieFormato">
            <tbody>
                <tr>
                    <td width="15%" valign="top"><strong>001-MATRIZ</strong><br />VIALIDAD SACRAMENTO 10709 COL. NOMBRE DE DIOS, CHIHUAHUA CHIH. C.P. 31150</td>
                    <td width="15%" valign="top"><strong>002-CD. JUAREZ</strong><br />AV. TOMÁS FERNÁNDEZ #7760 LOCAL F COL. PARTIDO DOBLADO, CD JUÁREZ CHIH. C.P. 32440</td>
                    <td width="15%" valign="top"><strong>003-TORREON</strong><br />C. JOSE MARIA DEL BOSQUE #1159 COL. CENTRO, TORREON COAHUILA. CP. 27000</td>
                    <td width="15%" valign="top"><strong>004-MONTERREY</strong><br />BLVD. BENITO JUAREZ #303 COL. EX HACIENDA DEL CANADÁ, ESCOBEDO N.L. C.P. 66054</td>
                    <td width="15%" valign="top"><strong>005-AGUASCALIENTES</strong><br />C.GERARDO ALVAREZ DE ALBA #2 FRACC. EL POTRERITO AGUASCALIENTES, AGS. C.P. 20392</td>
                    <td width="5%" valign="bottom">
                        <div class="pagenum-container"><span class="pagenum"></span></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </footer>

    <!-- Wrap the content of your PDF inside a main tag -->
    <main>

        <div>
            <h5>CONTRATO DE ARRENDAMIENTO CON OPCIÓN A COMPRA</h5>
            <p class="justify">Contrato de arrendamiento con opción a compra que celebran por una parte <strong>GWS GRUPO WATT SOLAR SA DE CV</strong> , con RFC: <strong>GGW191209MZA</strong>
                con domicilio Fiscal en calle Vialidad sacramento #10709 Colonia Nombre de Dios C.P. 31150 Chihuahua, chih, a quien en lo sucesivo
                se le denomina como <strong>“EL ARRENDADOR”</strong> y por la otra parte {{$orden->nombre_cliente}} {{$TipoPersona_Pa_1}} de nacionalidad mexicana con
                Identificación Oficial No. IFE {{$orden->ine_ife}}, {{$orden->calle_ine_ife}} {{$orden->colonia_ine_ife}}, {{$orden->localidad_ine_ife}} , {{$orden['EstadoINE']->nombre}}, C.P {{$orden->cp_ine_ife}} . Quien en lo sucesivo se le denominará
                <strong>“EL ARRENDATARIO”</strong> . Sujetan de común acuerdo al tenor de las siguientes declaraciones y cláusulas:
            </p>
        </div>

        <div>
            <p class="titulos1"><span>DECLARACIONES</span></p>
            <br>

            <strong>Primera. - Declara “EL ARRENDADOR”</strong> Que es su deseo otorgar en arrendamiento paneles solares, inversor, estructura detallado en el (<strong>Anexo 1</strong>) del presente contrato, el cual en lo sucesivo se denominará “Proyecto Solar”, en favor de “<strong>EL ARRENDATARIO</strong>”, así como la instalación, diseño, y construcción en lo sucesivo se denominará “La Obra”
            <ol type="a">
                <li>Qué está legalmente facultado para dar en arrendamiento el “Proyecto Solar” en los términos y condiciones establecidos en este contrato. </li>
            </ol>
            <br><strong>Segunda. - Declara “EL ARRENDATARIO”</strong> Que tiene las facultades suficientes y bastantes para obligarse en términos del presente contrato, así como los recursos suficientes para cumplir con las obligaciones derivadas del mismo.
            <ol type="a">
                <li>Que es su deseo tomar en arrendamiento el “Proyecto Solar”, de conformidad con los términos del presente contrato.</li>
            </ol>
            <br><strong>Tercera. - Declaran ambas partes</strong> Que, en la celebración del presente Contrato, no ha mediado entre ellas error, dolo, violencia o mala fe de ninguna índole.
            <ol type="a">
                <li>Que, en virtud de lo anterior, se obligan de conformidad con las siguientes:</li>
            </ol>

            <p class="titulos1">CLAUSULAS</p>
            <strong>OBJETO</strong><br><br>
            <p><strong>1.- “EL ARRENDADOR”</strong> otorga e instala el “Proyecto Solar” en arrendamiento con opción a compra a “EL ARRENDATARIO”, quien lo toma en dicha calidad y de conformidad con los planos, programas, especificaciones y precios referidos en el presente contrato.</p>
            <p><strong>1.1.- “EL ARRENDADOR”</strong> realizará las actividades de diseño, construcción e instalación del “Proyecto Solar” en el domicilio indicado por “EL ARRENDATARIO” y que se refiere en el Anexo 1 y 2 del presente contrato (en lo sucesivo <span>“El Domicilio”</span>).</p>
            <p><strong>1.2.- “EL ARRENDATARIO”</strong> mantendrá y preservará el “Proyecto Solar” en El Domicilio, en las mismas condiciones en que le fue entregado por “EL ARRENDADOR” en el entendido que no podrá desinstalarlo ni alterarlo ni manipular electrónicamente el equipo hasta entonces no se cubra la totalidad de los pagos pactados.</p>
            <p><strong>1.3.- “EL ARRENDATARIO”</strong> se obliga a no subarrendar en ningún grado el equipo hasta no liquidarlo en su totalidad.</p>

            <p class="titulos2">ESPECIFICACIONES Y REQUISITOS LEGALES</p>
            <p><strong>2.- “EL ARRENDADOR”</strong> será responsable de que el “Proyecto Solar” y cualesquier cambio de la Obra y la ejecución de sus servicios, cumplan con las leyes y reglamentos municipales, estatales y federales aplicables al diseño y construcción del Proyecto, incluyendo las Normas Oficiales Mexicanas, lo que incluye la obtención de los permisos, licencias y autorizaciones aplicables para el inicio, desarrollo, terminación y ocupación de la Obra (en lo sucesivo conjuntamente identificados como los <span>“Requisitos Legales”</span>). <span>Sin costo adicional para “El Arrendatario”</span>. “El Arrendatario” estará obligado a aceptar los cambios necesarios que se hicieran en cuanto a diseño y fechas de entrega cuando sea necesario para cumplir con los Requisitos Legales.</p>

            <p class="titulos2">REGLAMENTOS Y PERMISOS</p>
            <p><strong>3.- “EL ARRENDADOR”</strong> ejecutará la Obra de conformidad con las leyes, ordenamientos, reglamentos o permisos locales, federales o estatales aplicables a la realización de la Obra por lo que los inconvenientes que de esto se genere no será responsabilidad del <strong>“EL ARRENDADOR”</strong>.
            <p><strong>3.1.- “EL ARRENDADOR”</strong> será responsable de obtener a su costa los permisos de importación de los consumibles, maquinaria y equipo necesarios para la ejecución de la Obra, así como de proporcionar la herramienta y personal calificado para su instalación. Además, será responsable de realizar los trámites necesarios ante CFE para solicitar el medidor necesario para el correcto funcionamiento del proyecto solar.
            <p><strong>3.2.- “EL ARRENDADOR”</strong> tendrá permiso total de <strong>“EL ARRENDATARIO”</strong> para poder realizar conexiones temporales y/o provisionales en los servicios públicos (electricidad CFE) ya existentes en el Sitio del Proyecto durante la construcción de la Obra esto con el fin de cumplir con los requisitos de instalación de las dependencias.
            <p><strong>3.3.- “EL ARRENDADOR”</strong> llevará a cabo las actividades de diseño, construcción e instalación, requeridas para el funcionamiento correcto del “Proyecto Solar”, de manera personal o través de las personas que él designe para tal efecto pudiendo subarrendar en cualquier grado para cumplir con el presente contrato.

            <p class="titulos2">RENTA Y VALOR TOTAL DEL “PROYECTO SOLAR”</p>

            <p><strong>4.-” EL ARRENDADOR”</strong>, se obliga a proporcionar a <strong>“El ARRENDATARIO”</strong> la totalidad del proyecto solar descrito en el ANEXO 1. </p>
            <p><strong>4.1.- “El ARRENDATARIO”</strong> se obliga a pagar a <strong>“EL ARRENDADOR”</strong> por el cumplimiento total de sus obligaciones, la cantidad total de <strong>$<?php echo number_format($orden->valor_contrato, 2); ?> MN (Son {{$ContratoTotalLetra}})</strong>. IVA INCLUIDO, que en lo sucesivo se le denominará “Valor Total del Contrato”.</p>
            <p><strong>4.1.1</strong> El “Valor Total del Contrato” comprende también el Anticipo referido en la cláusula siguiente, así como el costo por instalación de cada uno de los paneles solares, inversor, material, personal y estructura que comprende el “Proyecto solar”, conforme al ANEXO 1.</p>
            <p><strong>4.2.-</strong> Con la celebración del presente contrato “El Arrendatario” se obliga a pagar a <strong>“EL ARRENDADOR”</strong> la cantidad exacta de <strong>$<?php echo number_format($orden->anticipo, 2); ?> MN (Son {{$AnticipoLetra}})</strong> en la cuenta señalada, en la cláusula, 4.10, del presente contrato, a más tardar un día hábil después de la firma del presente contrato.</p>
            <p><strong>4.3.-</strong> una vez realizado el pago del Anticipo, <strong>“EL ARRENDADOR”</strong> se obliga a entregar a “el Arrendatario” la instalación de “proyecto solar” en un término no mayor a 15 días hábiles a partir de la firma del presente.</p>
            <p><strong>4.3.1.</strong> así mismo <strong>“EL ARRENDADOR”</strong> se obliga a emitir una factura que cumpla con todos los requisitos fiscales y/o legales, misma que deberá detallar los conceptos que ampare el equipo instalado “proyecto solar” con fecha de emisión igual al presente contrato.</p>
            <p><strong>4.4.-</strong> ambas partes se someten a la cotización y al tipo de cambio en cual se pactó en <strong>ANEXO 1</strong> conforme a el precio convenido.</p>
            <p><strong>4.5.-</strong> Una vez entregado el Anticipo, <strong>“EL ARRENDADOR”</strong> comprará los materiales y comenzará los trabajos necesarios para la instalación pactada en el entendido que el funcionamiento final depende de la instalación por parte de CFE sobre el <strong>MEDIDOR BIDIRECCIONAL</strong> el cual el tiempo de instalación de dicha dependencia puede variar por lo que los retrasos generados por la misma no afectaran a <strong>“EL ARRENDADOR”</strong> ni afectaran los pagos mensuales acordados en el <strong>ANEXO 3. Aclarando que el buen funcionamiento del MEDIDOR BIDIRECCIONAL es única y exclusivamente responsabilidad de Comisión Federal de Electricidad área de MEDICION.<strong></p>
            <p><strong>4.6.- “EL ARRENDATARIO”</strong> se obliga a pagar mensualmente a <strong>“EL ARRENDADOR”</strong> una renta con opción a compra, conforme a la corrida que se refiere en el Anexo 3 (Corrida de Pagos), así como a realizar el pago de anticipo.</p>
            <p><strong>4.7.-</strong> La renta con opción a compra deberá cubrirse a más tardar las fechas que se refieren en el <strong>ANEXO 3</strong>, teniendo como plazo máximo de pago hasta 2 días hábiles después de la fecha establecida.</p>
            <p><strong>4.8.- “EL ARRENDADOR”</strong> conservará en todo momento la <strong>FACTURA</strong> propiedad del “Proyecto Solar” Durante la vigencia del presente contrato, a menos que el cliente lo liquide con anticipación el cual podrá ahorrarse los intereses es decir solo estará obligado a pagar el capital a la fecha de liquidación anticipada. </p>
            <p><strong>4.9.- Si “EL ARRENDATARIO”</strong> es omiso en pagar la renta con opción a compra en la fecha límite que corresponde, entonces deberá cubrir una penalidad correspondiente al interés del _5__% mensual sobre el monto que está omitiendo cubrir, <strong>aplicable a partir del 3er día hábil</strong> después de la fecha límite de pago el cual será acumulable.</p>
            <p><strong>4.10.- “EL ARRENDATARIO”</strong> acepta realizar todos y cada uno de los <strong>PAGOS</strong> de la siguiente forma:</p>
            <p><strong>OPCIÓN 1: POR TRANSFERENCIA ELECTRÓNICA DESDE UN BANCO DISTINTO A BBVA BANCOMER</strong>
                A nuestro banco <strong>BBVA BANCOMER</strong> con la clabe interbancaria <strong>012914002017508952</strong> agregando su número de <strong>REFERENCIA</strong> el cual es <strong>{{$orden->referencia}}</strong>. La referencia se deberá poner en el campo de “CONCEPTO” de lo contrario, la trasferencia no se verá reflejada en nuestras cuentas. </p>
            <p><strong>OPCIÓN 2: DESDE BBVA BANCOMER</strong>
                Si su pago es desde BBVA BANCOMER, deberá hacerlo a través de PAGO DE SERVICIOS y colocar nuestro número de convenio CIE: <strong>01750895</strong> Con el número de referencia <strong>{{$orden->referencia}}</strong></p>
            <p>No serán válidos los depósitos realizados a cuentas de terceros, todos los pagos deberán ser única y exclusivamente a las cuentas bancarias a nombre de <strong>GWS GRUPO WATT SOLAR SA DE CV</strong>.</p>
            <p><strong>4.11.- “EL ARRENDATARIO”</strong> Está de acuerdo, que una vez realizado el pago por medio de transferencia enviará por correo electrónico el comprobante de dicha transferencia, a las direcciones de correo: tesoreria@grupowattsolar.com y cxc@grupowattsolar.com y/o al número (614) 370-56-30. aclarando que es responsabilidad del <strong>“El ARRENDATARIO”</strong> hacer llegar dicho comprobante para que se le aplique dicho pago a su cuenta, así como de especificar, si requiere de un comprobante fiscal. </p>

            <p class="titulos2">OPCIÓN A COMPRA</p>

            <p><strong>5.- “EL ARRENDADOR”</strong> otorga a <strong>“EL ARRENDATARIO”</strong> el derecho de opción a compra del “Proyecto Solar”, conforme a las siguientes reglas:</p>
            <p><strong>5.1.-</strong> Que no exista atraso en sus pagos</p>
            <p><strong>5.2.-</strong> La totalidad de las cantidades entregadas por <strong>“EL ARRENDATARIO”</strong> a <strong>“EL ARRENDADOR”</strong> en concepto de renta, así como el monto por concepto de anticipo, serán abonadas al precio de compraventa referido en el <strong>ANEXO 3</strong>.</p>
            <p><strong>5.3.-</strong> La propiedad del Proyecto Solar pasará a <strong>“EL ARRENDATARIO”</strong>, únicamente cuando haya cubierto la totalidad del precio de compraventa referido en el <strong>ANEXO 3</strong> y <strong>“EL ARRENDADOR”</strong> haya entregado la CARTA FINIQUITO a <strong>“EL ARRENDATARIO”</strong></p>

            <p class="titulos2">TERMINACIÓN ANTICIPADA DEL CONTRATO</p>

            <p><strong>6.-</strong> La falta de pagos de <strong> MANERA CONSECUTIVA</strong> mencionada con antelación de los plazos referidos en el <strong> ANEXO 3</strong> , facultará a <strong> “EL ARRENDADOR”</strong> para: </p>
            <p><strong>6.1.-</strong> Exigir el pago de la <strong> TOTALIDAD</strong> de las rentas que se encuentran pendientes por cubrir, aún y cuando no se hayan cumplido las fechas de vencimiento.</p>
            <p><strong>6.2.-</strong> Para tal efecto, junto con la firma del presente contrato, <strong> “EL ARRENDATARIO”</strong> se obliga y acepta de conformidad a firmar un pagaré (<strong> ANEXO 4</strong> ) por la cantidad total Financiada del “Proyecto solar” el cual permanecerá bajo resguardo de <strong> “EL ARRENDADOR”</strong> , y el cual podrá ser cobrado judicialmente única y exclusivamente en caso de presentar incumplimiento de pago en 2 mensualidades consecutivas por parte de <strong> “EL ARRENDATARIO”</strong> .</p>
            <p><strong>6.3.-</strong> Ante la negativa de EL <strong> ARRENDATARIO</strong> a cubrir dos pagos consecutivos se determinará automáticamente La terminación inmediata del presente contrato por <strong> INCUMPLIMIENTO</strong> debiendo entregar físicamente de forma inmediata el equipo </p>

            <table id="productos">
                <tbody>
                    <tr>
                        <th><strong>PRODUCTO</strong></th>
                        <th><strong>MARCA</strong></th>
                        <th><strong>No. DE PIEZAS VENDIDAS</strong></th>
                        <th><strong>PANELES ADICIONALES POR PROMOCIÓN</strong></th>
                        <th><strong>CAPACIDAD</strong></th>
                        <th><strong>GARANTÍAS</strong></th>
                        <th><strong>PRODUCCIÓN DEL SISTEMA</strong></th>
                    </tr>
                    <tr>
                        <td>PANELES</td>
                        <td>{{$orden->marca_panel}}</td>
                        <td>{{$orden->no_paneles}}</td>
                        <td>{{$orden->no_paneles_promo}}</td>
                        <td>{{$orden->potencia_panel}}W</td>
                        <td>25 AÑOS (FICHA TÉCNICA ANEXA)</td>
                        <td rowspan="4"> {{$orden->produccion_sistema}}<br>
                            KWh/Bimestre </td>
                    </tr>
                    <tr>
                        <td>INVERSOR (ES)</td>
                        <td>{{$orden->marca_inversor}}</td>
                        <td>{{$orden->cantidad_inversor}}</td>
                        <td bgcolor="black"></td>
                        <td>{{$orden->capacidad_inversor}}W</td>
                        <td>5 AÑOS (FICHA TÉCNICA ANEXA)</td>
                    </tr>
                    <tr>
                        <td>ESTRUCTURA</td>
                        <td>Tipo: {{$orden['TipoEstructura']->text}}</td>
                        <td>PARA {{$orden->piezas_estructura}}</td>
                        <td bgcolor="black"></td>
                        <td bgcolor="black"></td>
                        <td><p style="font-size:7px">20 AÑOS CONTRA CORROSIÓN (no aplica en puntos de soldadura) Y 1 AÑO POR FILTRACIONES (En perforaciones de la losa).</p></td>
                    </tr>
                    <tr>
                        <td>NOMBRE Y CÓDIGO PROMOCIÓN APLICADA</td>
                        <td colspan="5" width="548">{{$orden->promocion_aplicada}}</td>
                    </tr>
                </tbody>
            </table>

            <p>y sin perjuicio de que <strong>“EL ARRENDADOR”</strong> pueda reclamar las cantidades correspondientes por indemnización por daños y perjuicios o cualquier otra que pudiera corresponderle conforme a derecho.</p>
            <p><strong>6.4.-</strong> Para la terminación del contrato por motivos descritos anteriormente en las cláusulas 6 y 6.3 será suficiente la notificación vía celular a “EL ARRENDATARIO” al celular <strong> {{$orden->telefono}} y Correo {{$orden->correo}}</strong></p>
            <p><strong>6.4.1.-</strong> Una vez notificado por correo o vía celular a <strong> “EL ARRENDATARIO”</strong> la terminación del presente por impago el mismo acepta otorgar pleno acceso al domicilio donde se encuentre instalado <strong> LOS PANELES SOLARES INVERSOR Y ESTRUCTURA</strong>, a efecto de que se desinstale y recupere, para ello, autoriza el acceso a El Domicilio aún y cuando no se encuentre presente su propietario y/o arrendatario.</p>
            <p><strong>6.4.2.- “EL ARRENDATARIO”</strong> renuncia al derecho de reclamar daños colaterales con motivos de los orificios de taquetes de expansión, daños a la pintura y/o impermeabilizado, que hayan acontecido con motivo de la instalación y/o desinstalación y/o retiro de los paneles, inversor y estructura.</p>
            <p><strong>6.5.- “El ARRENDATARIO”</strong> acepta que en caso de recisión de contrato tendrá una penalización del 20% del total de la venta, los cuales se restarán del enganche y pagos mensuales cubiertos y no así la devolución de los intereses, en el entendido que la diferencia se le devolverá a <strong>“EL ARRENDATARIO”</strong> siempre y cuando el equipo este en las condiciones normales de uso por clima. </p>

            <p class="titulos2">CONFIDENCIALIDAD</p>
            <p><strong>7.-</strong> Toda la información que reciba una parte (en los sucesivo se identificará como RECEPTORA) de la otra (en lo sucesivo se identificará como REVELADORA) ya sea de forma escrita, verbal, magnética, visual, gráfica, por medios electrónicos, electromagnéticos, discos ópticos, de información, microfilmes, manuales, códigos, diagramas, archivos planos o por cualesquier otro medio, forma o materiales será considerada como confidencial independientemente que se trate de información interna o privada y/o información o documentación relativa a la estructura, operación, capacidad, organización, transacciones, secretos industriales, patentes, derechos de propiedad industrial y/o intelectual, situación financiera y/o comercial de las partes y/o sus filiales o asociadas salvo que dicha información sea expresamente marcada como información pública o no confidencial. </p>
            <p><strong>7.1.-</strong> Ambas partes se obligan a mantener la “INFORMACIÓN CONFIDENCIAL” en forma estrictamente confidencial como su nombre lo indica, emplearla únicamente para los fines del presente contrato y a no
                divulgarla ni revelarla bajo ninguna circunstancia ni por ningún medio a cualquier tercero, ni permitir su reproducción total o parcial, sin el previo consentimiento por escrito de la parte que la hubiere proporcionado.</p>
            <p><strong>7.2.-</strong> Todos los datos personales que se usen en el curso del presente Contrato deberán ser usados únicamente para los propósitos del Contrato y no deben de ser procesados o revelados sin el consentimiento de ninguna de las partes.</p>
            <p class="titulos2">BUENA FE.</p>
            <p><strong>8.-</strong> Las partes manifiestan que no existe error, dolo, lesión o cualquier otro vicio del consentimiento que pudiera invalidar el acto que se contempla en el presente Contrato.</p>
            <p class="titulos2">ANEXOS</p>
            <p><strong>9.-</strong> Los anexos al presente Contrato, formarán parte del mismo y deberán ser interpretados como un solo instrumento o documento donde se contiene la voluntad de las partes.</p>
            <p class="titulos2">IMPUESTOS, DERECHOS Y GASTOS</p>
            <p><strong>10.-</strong> Cada una de las Partes será responsable y hará el pago de sus propios impuestos, derechos, productos y aprovechamientos, incluyendo recargos, multas, actualizaciones, sanciones y cualesquier otros cargos, de conformidad con la ley fiscal aplicable que le corresponda, generados en relación con las transacciones derivadas de este Contrato.</p>
            <p class="titulos2">LEYES APLICABLES Y TRIBUNALES COMPETENTES. </p>
            <p><strong>11.-</strong> Para todo lo relacionado con la interpretación y ejecución con este instrumento son aplicables las Leyes correspondientes a su objeto y, en caso de controversia, serán competentes los tribunales de la
                ciudad de Chihuahua, Chih., renunciando las partes expresamente a cualquier otra jurisdicción que pudiera corresponderles por virtud de sus domicilios presentes o futuros o por cualquier otro motivo. </p>

            <p class="titulos2">DURACIÓN</p>
            <p><strong>12.-</strong> La duración del presente contrato tendrá una vigencia de {{$orden['TipoContratoPagos']->restante1}} meses a partir de la fecha de la primer mensualidad.</p>
            <p><strong>12.1.-</strong> Una vez cumplido el término del presente contrato, ambas partes acuerdan en no ejercer ningún tipo de afectación o reclamación legal respecto al Proyecto Solar que llevo la realización de este contrato terminado.</p>
            <p>El presente contrato es impreso en dos tantos y firmado en fecha {{$vars_fecha[0]}} en la ciudad de {{$orden->localidad}}, {{$orden['Estado']->nombre}}.</p>
        </div>
        <table id="firmas">
            <tbody>
                <tr>
                    <th><strong>EL ARRENDATARIO</strong></th>
                    <th><strong>EL ARRENDADOR</strong></th>
                </tr>
                <tr>
                    <td>______________________________________</td>
                    <td>______________________________________</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>{{$orden->nombre_cliente}}<br>{{$orden->representante_legal}}</td>
                    <td>GWS GRUPO WATT SOLAR SA DE CV</td>
                </tr>
            </tbody>
        </table>

        <div>
            <p class="titulos1" style="page-break-before: always;">ANEXO 1</p>
            <p class="titulos1"><span>COTIZACION DESGLOZADA</span></p>
            <table style="width:100%">
                @foreach ($orden->media as $file)
                @if($file->collection_name == "informacionEquipo")
                <tr>
                    <td width="100%">
                        <img src="{{$file->getPath()}}" alt="INF_equipos" style="max-width:600px;width:100%" />
                    </td>
                </tr>
                @elseif($file->collection_name == "cotizacion")
                <tr>
                    <td width="100%">
                        <img src="{{$file->getPath()}}" alt="Cotizacion" style="max-width:600px;width:100%" />
                    </td>
                </tr>
                @endif
                @endforeach
            </table>
        </div>

        <div>
            <p class="titulos1" style="page-break-before: always;">ANEXO 2</p>
            <p class="titulos1">ACTA DE ENTREGA RECEPCIÓN DE LA OBRA</p>
            <p>Acta de <strong>ENTREGA-RECEPCIÓN</strong> de la obra de acuerdo con el contrato de <strong>ARRENDAMIENTO CON OPCIÓN A COMPRA</strong> del “Proyecto solar” celebrado con fecha {{$vars_fecha[0]}}, en {{$orden->localidad}}, {{$orden['Estado']->nombre}}, entre <strong>GWS GRUPO WATT SOLAR SA DE CV Y {{$orden->nombre_cliente}}</strong>.</p>
        </div>


        <div>
            <p class="titulos1">DECLARACIONES
            <p><strong>Primero.-</strong> <strong>“EL ARRENDATARIO” y “EL ARRENDADOR”</strong> celebraron un Contrato de arrendamiento con opción a compra, del Proyecto Solar en {{$orden->localidad}}, {{$orden['Estado']->nombre}}.</p>
            <p><strong>Segundo.-</strong> Es la voluntad de ambas partes confirmar la entrega de la Obra y equipo solar, de acuerdo a las siguientes estipulaciones: </p>
            </p>
            <ol type="a">
                <li>En este acto, “EL ARRENDADOR” entrega a “EL ARRENDATARIO” la Obra, la cual recibe a su entera satisfacción y en cumplimiento con las especificaciones de la Obra contenidas en este Contrato.
                <li>La entrega se realiza en el domicilio ubicado en calle {{$orden->calle}} {{$orden->colonia}} {{$orden->numero}}, {{$orden->localidad}} , {{$orden['Estado']->nombre}}, C.P {{$orden->cp}} Físicamente conforme a lo establecido en el presente contrato, domicilio completo donde se hará la Instalacion. Físicamente conforme a lo establecido en el presente contrato.
                <li><span>EL ARRENDATARIO se da por enterado que el ahorro real se verá reflejado una vez que se cumplan las siguientes condiciones:</span></li>
                <ol type="1">
                    <li><strong>Se haya instalado el medidor bidireccional y esté funcionando correctamente</strong></li>
                    <li><strong>Una vez instalado el medidor bidireccional hayan transcurrido un periodo completo de CFE, que es equivalente a dos meses, para que se vea reflejado el ahorro real.</strong></li>
                </ol>
                <li>El cálculo del proyecto es en base al recibo de CFE que el cliente nos proporciona, si no se proporciona esta información, el cálculo de paneles a instalar es solamente un estimado.</li>
                <li>Si se incrementa el consumo, por mayor tiempo de uso en sus equipos o incrementa el número de equipos en su domicilio, es responsabilidad del cliente, ya que sólo se garantiza la producción de energía con los paneles solares, no la reducción del costo de su recibo de luz.</li>
            </ol>
            <p>Ambas partes firman esta Acta de Entrega-Recepción de la Obra a la entera satisfacción del Cliente, el día {{$vars_fecha[0]}} el cual formará parte integral de este Contrato</p>
        </div>

        <table id="firmas">
            <tbody>
                <tr>
                    <th><strong>EL ARRENDATARIO</strong></th>
                    <th><strong>EL ARRENDADOR</strong></th>
                </tr>
                <tr>
                    <td>______________________________________</td>
                    <td>______________________________________</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>{{$orden->nombre_cliente}}<br>{{$orden->representante_legal}}</td>
                    <td>GWS GRUPO WATT SOLAR SA DE CV</td>
                </tr>
            </tbody>
        </table>

        <div>
            <p class="titulos1" style="page-break-before: always;">ANEXO 3</p>
            <p class="titulos1"><span>CORRIDA DE PAGOS</span></p>
            <br>
            <table style="width:100%">
                @foreach ($orden->media as $file)
                @if($file->collection_name == "financiamiento")
                <tr>
                    <td width="100%">
                        <img src="{{$file->getPath()}}" alt="Financiamiento" style="max-width:600px;width:100%" />
                    </td>
                </tr>
                @elseif($file->collection_name == "pagos")
                <tr>
                    <td width="100%">
                        <img src="{{$file->getPath()}}" alt="Corrida de pagos" style="max-width:600px;width:100%" />
                    </td>
                </tr>
                @endif
                @endforeach
            </table>
        </div>

        <div>
            <p class="titulos1" style="page-break-before: always;"><span>ANEXO 4</span></p>
            <table style="width:100%">
                <tr>
                    <td width="25%"></td>
                    <td width="10%">P A G A R E</td>
                    <td width="25%" style="text-align: right;">POR $<?php echo number_format($var_importes[8], 2); ?></td>
                </tr>
            </table>
            <br><br>

            <p>Debo y pagaré incondicionalmente por este Pagaré a la orden de <strong>GWS GRUPO WATT SOLAR SA DE CV</strong>,
                en la ciudad de {{$orden->localidad}}, {{$orden['Estado']->nombre}}, la suma de <strong>$<?php echo number_format($var_importes[8], 2); ?> (SON {{$var_importes[9]}})</strong>
                valor recibido a mi entera satisfacción, pagadera mediante {{$orden['TipoContratoPagos']->restante1}} mensualidades consecutivas
                por la cantidad de </strong>$<?php echo number_format($orden->mensualidad, 2); ?> (SON {{$var_importes[10]}})<strong> cada una, los días <strong>15 Quince</strong> de
                    cada mes a partir del {{$vars_fecha[1]}} para concluir el {{$vars_fecha[2]}}.</p>
            <p>Las partes convienen que en caso de impago oportuno de una o más amortizaciones mensuales, se darán por vencidas anticipadamente las demás amortizaciones mensuales y se devengará un interés moratorio a razón del 5% cinco por ciento mensual sobre saldos insolutos diarios desde el impago hasta la total liquidación del adeudo sin que por ello se considere prorrogado el plazo. </p>
        </div>

        <div id="aval">
            <p>PAGARE NO NEGOCIABLE</p>
            <p>{{$orden->localidad}}, {{$orden['Estado']->nombre}} Y {{$vars_fecha[0]}} </p>
            <br>
            <p>S U S C R I P T O R </p>
            <br>
            <p>________________________________</p>
            <p>{{$orden->nombre_cliente}}<br>{{$orden->representante_legal}}</p>
            <br>
            <p>AVAL</p>
            <p>________________________________</p>
            <p>SR/SRA {{$orden->nombre_aval}}</p>
        </div>



        <p class="titulos1" style="page-break-before: always;">AVISO DE CONFIDENCIALIDAD / Notice of Confidentiality</p>
        <div id="cursivatext">

            <p>En cumplimiento a lo establecido en la Ley Federal de Protección de Datos en Posesión de los Particulares, los datos personales que usted libre y voluntariamente llegara a proporcionar a través de este medio, estarán sujetos a las disposiciones del Aviso de Privacidad de GWS GRUPO WATT SOLAR SA DE CV, el cual puede ser consultado en el sitio web: <span>https://www.grupowattsolar.com</span> Este mensaje (y cualquiera de sus anexos) es
                privado y confidencial; Contiene información para uso exclusivo del destinatario; En caso de que no sea la persona a quien va dirigido, por este medio le informamos que cualquier distribución y/o reproducción del mensaje queda prohibida por la ley de Propiedad Industrial Mexicana; así como la ley mercantil y civil del estado de chihuahua por lo que no autorizamos su reproducción, Si el presente lo recibió por error,
                nos disculpamos y le solicitamos muy amablemente el favor de borrarlo y/o reenviarlo a <span> cxc@grupowattsolar.com</span> así mismo cualquier asunto con respecto a su información se pone a su disposición el anterior correo Gracias.</p>
        </div>

        <div>
            <p class="titulos1">AVISO DE PRIVACIDAD</p>
            <p>De conformidad con lo establecido por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y los Lineamientos del Aviso de Privacidad, se emite el presente Aviso de Privacidad.</p>
            <p>Para <strong>“GWS GRUPO WATT SOLAR SA DE CV”</strong> con domicilio en la Vialidad Sacramento #10709 Col. Nombre de dios, CP. 31150, el tratamiento legítimo, controlado e informado de sus datos personales es de vital importancia para alcanzar los objetivos corporativos a través de todas sus áreas y reiterar nuestro compromiso con la privacidad y almacenamiento resguardado con sistemas electrónicos protegidos
                y su derecho a la autodeterminación informativa, por lo que se hace de su conocimiento que los datos personales y documentación sensible y/o de cualquier índole que proporcione y que deban ser tratados en términos de la Ley Federal de Protección de Datos Personales en posesión de particulares, le serán recabados de forma licita y con pleno consentimiento de su parte en los términos
                de nuestro aviso de privacidad el cual se encuentra publicado en <span> https://www.grupowattsolar.com</span> por lo que Le informamos que los datos personales que obtengamos derivados de las relaciones comerciales entre usted e “GWS GRUPO WATT SOLAR SA DE CV” es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección así como pone a su disposición correo <span>cxc@grupowattsolar.com</span> para expresar cualquier asunto sobre dichos avisos.</p>

        </div>

        <div>
            <p><strong>“GWS GRUPO WATT SOLAR SA DE CV”</strong> podrá recopilar y tratar sus datos personales en cualquiera de los siguientes medios:</p>

            <ul style="list-style-type: lower-latin;">
                <li>A través del portal de internet de <span>https://www.grupowattsolar.com</span> y/o todos sus dominios relacionados </li>
                <li>Por correo electrónico en todas sus variables con terminación grupowattsolar.com</li>
                <li>Personalmente en nuestras “oficinas” información que se recaude de viva voz </li>
                <li>A través de nuestros comisionistas plenamente identificados </li>
                <li>En el domicilio del Cliente por personal identificado con uniforme amarillo negro blanco y gafete</li>
                <li>Donde el Cliente e “GRUPO WATT SOLAR” así lo dispongan. </li>
            </ul>
            <p>El presente Aviso de Privacidad se encontrará íntegramente transcripta en las “oficinas” y en el Portal de Internet. Una versión simplificada o corta del presente Aviso de Privacidad se dará a conocer en los correos electrónicos de “GWS GRUPO WATT SOLAR SA DE CV”

            <p>Sus datos personales serán utilizados para las siguientes finalidades: </p>
            <p>Proveer los servicios y productos requeridos por usted; informar sobre cambios, nuevos productos o servicios que estén relacionados con el contratado o adquirido previamente; dar cumplimiento a obligaciones contraídas con usted; evaluar la calidad del servicio, y realizar estudios internos sobre hábitos de consumo y estudios de mercado.
                Datos personales que recabamos de forma directa: Recabamos sus datos personales de forma directa cuando usted mismo nos los proporciona por diversos medios, como cuando participa en nuestras promociones o nos da información con objeto de
                que le prestemos un servicio para comunicarnos y/o expedirle una cotización escrita o vía electrónica. Los datos que obtenemos en forma directa pueden ser, entre otros: Nombre, denominación o razón
                social, Dirección, Teléfono fijo y/o móvil, Correo electrónico y portal de internet, Comprobante de domicilio- Cédula del RFC, recibo de CFE, firma, CURP, IFE, Referencias comerciales, Recibo de CFE y Datos del consumo de electricidad. </p>

            <p><strong>Datos personales que recabamos cuando visita nuestro sitio de Internet o utiliza nuestros servicios en línea pueden ser:</strong> Nombre, denominación o razón social, Teléfono fijo y/o móvil, Correo electrónico y portal de internet, Recibo de CFE y Datos de consumo de electricidad.</p>

            <p><strong>Transferencia de datos personales:</strong></p>
            <p>Sus datos personales pueden ser transferidos y tratados dentro y fuera del país, por personas distintas a “GWS GRUPO WATT SOLAR SA DE CV” sin que esta sea nuestra responsabilidad, En ese sentido, su información puede ser compartida con El Fideicomiso para el Ahorro de Energía Eléctrica (FIDE) así como con diversos Bancos, CFE,
                o para llevar a cabo el trámite de financiamiento de sistemas fotovoltaicos interconectados a la red eléctrica de CFE, solicitado por usted. Por lo que usted podrá exigir a dichas instituciones lo conducente, sin embargo, por nuestra parte Nos comprometemos a NO TRANSFERIR SU INFORMACIÓN PERSONAL ni a terceros ni ningún otro sin su consentimiento,
                salvo las excepciones previstas en el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, así como a realizar esta transferencia en los términos que fija esa ley. Si usted no manifiesta su oposición para que sus datos personales sean transferidos, se entenderá que ha otorgado su consentimiento para ello.</p>

            <p><strong>Revocación del consentimiento:</strong></p>
            <p>En todo momento, usted podrá revocar el consentimiento que nos ha otorgado para el tratamiento de sus datos personales, a fin de que dejemos de hacer uso de los mismos. Para ello, es necesario que presente su petición personalmente, en nuestras “oficinas. Su petición deberá ir acompañada de la siguiente información: copia de su identificación oficial y escrito
                libre en donde manifieste la revocación de su consentimiento para el uso de sus datos personales. En un plazo máximo de 20 días hábiles atenderemos su petición y le informaremos sobre la procedencia de la misma a través de un mensaje a su dirección de correo electrónico.</p>

            <p><strong>Acceso, rectificación, cancelación y oposición:</strong></p>
            <p>Tiene derecho de acceder a sus datos personales que poseemos y a los detalles del tratamiento de los mismos, así como a rectificarlos en caso de ser inexactos o incompletos; cancelarlos cuando considere que no se requieren para alguna de las finalidades señalados en el presente aviso de privacidad, estén siendo utilizados para finalidades no consentidas o haya finalizado la relación contractual o de servicio, o bien, oponerse al tratamiento de los mismos para fines específicos. Será a través de la presentación de la solicitud respectiva al correo electrónico https://www.grupowattsolar.com o en nuestras “oficinas” mediante escrito libre que contenga:</p>

            <ol>
                <li>Tipo de solicitud PETICIÓN ESPECIFICA (Acceso, Cancelación, Rectificación, Oposición). </li>
                <li>Fecha de la solicitud.</li>
                <li>Teléfono con lada local y teléfono celular.</li>
                <li>Nombre y denominación o razón social.</li>
                <li>Copia de identificación oficial por AMBOS LADOS</li>
                <li>Descripción de la solicitud (detalle en forma clara y precisa los datos personales respecto de los que busca ejercer su derecho.</li>
                <li>Firma del solicitante en color Azul.</li>
                <li>Presentarla físicamente en nuestras Oficinas los requisitos anteriores.</li>
            </ol>

            <p>Los plazos para atender su solicitud son los siguientes: 20 días hábiles contados a partir de su recepción.</p>
            <p>Modificaciones al aviso de privacidad:</p>

            <p><strong>“GRUPOWATTSOLAR”</strong> se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad,
                para la atención de novedades legislativas, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios o productos.
                Estas modificaciones estarán disponibles al público a través de nuestra página de Internet (sección aviso de privacidad).</p>




            <div id="aval">
                <br>
                <p>________________________________</p>
                <p>{{$orden->nombre_cliente}}<br>{{$orden->representante_legal}}</p>
            </div>

        </div>


        <p style="page-break-before: always; text-align: right;"> <strong> NOTIFICACIÓN DE INSTALACIÓN DE MEDIDOR BIDIRECCIONAL </strong></p>
        <br><br>

        <table id="medidortable">
            <tr>
                <th colspan="2">_</th>
            </tr>
            <tr>
                <td colspan="2">A TRAVÉS DE ESTE ESCRITO, ME DOY POR ENTERADO QUE GWS GRUPO WATT SOLAR SA DE CV SE ENCARGA DE REALIZAR
                    TODOS LOS TRÁMITES NECESARIOS PARA LA INSTALACIÓN DEL MEDIDOR BIDIRECCIONAL, SIN EMBARGO LOS TIEMPOS DE INSTALACIÓN
                    DE DICHO MEDIDOR, DEPENDEN TOTALMENTE DE CFE Y NO DE GWS GRUPO WATT SOLAR SA DE CV, ASI MISMO QUE LOS PAGOS DE MIS
                    MENSUALIDADES O LIQUIDACIÓN DE ANTICIPO NO SE VERÁN AFECTADOS POR ESTE MOTIVO, LOS PAGOS COMO SE MENCIONA EN NUESTRO
                    CONTRATO, SE REALIZARÁN EN LOS TIEMPOS ESTIPULADOS SIN TENER QUE AFECTARSE O RETRASARSE POR LOS TIEMPOS DE INSTALACIÓN
                    DEL MEDIDOR BIDIRECCIONAL.</td>
            </tr>
            <tr>
                <td>No. De CONTRATO</td>
                <td style="text-align: center;">{{$orden->no_contrato}}</td>
            </tr>
            <tr>
                <td>NOMBRE COMPLETO DEL TITULAR DEL CONTRATO</td>
                <td style="text-align: center;">{{$orden->nombre_cliente}} {{ $TipoPersona_Pa_1}}</td>
            </tr>
        </table>

        <div id="aval">
            <br> <br> <br> <br>
            <p>_____________________________________________________________</p>
            <p>FIRMA DE ACEPTACIÓN</p>
        </div>

    </main>
</body>

</html>