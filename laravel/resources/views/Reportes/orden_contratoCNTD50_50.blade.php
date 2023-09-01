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

        }

        footer .pagenum:before {
            content: counter(page);
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
        <img src="{{ public_path('img/brand/wattsolar-logo.png') }}" alt="Portada" width="500" height="200" />
        <br><br><br>
        <p style="text-align: center;">{{$orden->nombre_cliente}}</p>
    </div>

    <div class="portadaimagen">
        <img src="{{ public_path('img/brand/ImgPortada.png') }}" alt="Portada2" style="width:100%;">
        <div class="portadafecha">{{$vars_fecha[0]}}</div>
    </div>
    <div class="enterprimera">
        .
    </div>
    <header>
        <table id="encabezado">
            <tr>
                <td width="25%"><img src="{{ public_path('img/brand/wattsolar-logo.png') }}" width="120" height="40" alt="logo" /> </td>
                <td width="45%">www.grupowattsolar.com</td>
                <td width="45%" style="text-align: right;">Contrato No. {{$orden->no_contrato}}</td>
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
            <h5>PROYECTO DE ENERGÍA SOLAR </h5>
            <p><strong>CONTRATO DE CONSTRUCCIÓN DE OBRA que celebran por una parte GWS GRUPO WATT SOLAR SA DE CV,</strong> con RFC: GGW191209MZA
                con domicilio Fiscal en VIALIDAD SACRAMENTO 10709 COL. NOMBRE DE DIOS, CHIHUAHUA CHIH. C.P. 31150 a quien en lo
                sucesivo se le denomina como <strong>“EL CONTRATISTA”</strong> por la otra parte el {{$orden->nombre_cliente}} de nacionalidad mexicana con Identificación Oficial {{$orden->ine_ife}}
                , con domicilio en {{$orden->calle_ine_ife}} {{$orden->colonia_ine_ife}}, {{$orden->localidad_ine_ife}} , {{$orden['EstadoINE']->nombre}}, C.P {{$orden->cp_ine_ife}}, a quien en lo sucesivo se le denominara <strong>“EL CLIENTE”</strong>, los cuales se sujetan de común acuerdo al tenor
                de las siguientes declaraciones y cláusulas: </p>
        </div>


        <div>
            I. Declaran las partes:
            <ol type="a">
                <li>Que, en la celebración del presente Contrato, no ha mediado entre ellas error, dolo, violencia o mala fe. </li>
                <li>Que, en virtud de lo anterior, se obligan de conformidad con las siguientes:</li>
            </ol>
        </div>

        <br><br>
        <p class="titulos1">CLAUSULAS</p>
        <strong>OBJETO</strong><br><br>
        <p>1.1. El Contratista se obliga a prestar al Cliente los servicios de instalación y diseño de un sistema de paneles solares detallado en el Anexo 1 del presente contrato, y de conformidad con los planos, programas y especificaciones de la Obra. </p>
        <p>1.2 El Cliente se obliga a adquirir del Contratista, el sistema de paneles solares detallados en el Anexo 1, para lo cual pagará al Contratista el monto correspondiente conforme a lo establecido en el presente contrato </p>
        <p>1.3. <span>La Obra.</span> Cuando en cualquier parte del contrato se haga referencia a “Obra” significa todas las actividades siguientes: instalación, diseño y construcción del proyecto solar. </p>

        <strong>2. ESPECIFICACIONES Y REQUISITOS LEGALES</strong>
        <br>

        <p>2.1. El Contratista será responsable de que el Proyecto y cualesquier cambios de la Obra y la ejecución de sus servicios, cumplan con las leyes y reglamentos municipales, estatales y federales aplicables al diseño y construcción del Proyecto,
            incluyendo las Normas Oficiales Mexicanas, lo que incluye la obtención de los permisos, licencias y autorizaciones aplicables para el inicio, desarrollo, terminación y ocupación de la Obra (en lo sucesivo conjuntamente identificados como los
            (“Requisitos Legales”). Sin costo adicional para el “Cliente. El Cliente estaría obligado a aceptar los cambios necesarios que se hicieran en cuanto a diseño y fechas de entrega cuando sea necesario para cumplir con los Requisitos Legales. </p>

        <strong>3. REGLAMENTOS Y PERMISOS </strong>
        <br>

        <p>3.1 El Contratista ejecutará la Obra de conformidad con las leyes, ordenamientos, reglamentos o permisos locales, federales o estatales aplicables a la realización de la Obra. </p>
        <p>3.2 El Contratista será responsable de obtener a su costa y gasto la licencia de construcción, así como los permisos de importación de los consumibles, maquinaria y equipo
            necesarios para la ejecución de la Obra. Todos los permisos, licencias y autorizaciones en materia federal, estatal y municipal necesarios para la realización de la Obra
            deberán ser solicitados y gestionados por el Contratista.</p>
        <p>3.3 El Contratista deberá poder realizar conexiones temporales o provisionales en los servicios públicos (agua y electricidad) ya existentes en el Sitio del Proyecto durante
            la construcción de la Obra. Sin que esto modifique de forma alguna el costo del proyecto. </p>
        <p>3.4. Pruebas. El Contratista proporcionará toda la mano de obra, materiales y equipo requeridos para realizar todas las pruebas de desempeño y demás pruebas que resulten aplicables
            conforme al Proyecto Ejecutivo y a la ejecución de la Obra. </p>

        <p>Dichas pruebas serán llevadas a cabo sin costo adicional para el “Cliente”. </p>

        <p>3.5 El Contratista llevará a cabo las actividades descritas en el Anexo 1, de manera personal o través de las personas que él designe para tal efecto. El Cliente en este acto manifiesta su conformidad con ello. </p>

        <strong>4. PROCEDIMIENTO DE VENTA Y CONTRAPRESTACIÓN. </strong>
        <p>4.1. El Cliente se obliga a adquirir del contratista, la totalidad del proyecto solar descrito en el Anexo 1. </p>

        <p>4.2. Valor Total del Contrato. El “Cliente” se obliga a pagar al Contratista por el cumplimiento total de sus obligaciones, la cantidad total de
            en lo sucesivo se le denominará “Valor Total del Contrato”, El Valor Total del Contrato comprende el Anticipo referido en la cláusula siguiente, así como
            el costo por instalación de cada uno de los paneles solares que comprende el proyecto, conforme al Anexo 1. </p>

        <p>4.3 Con la celebración de este contrato el Cliente se obliga a pagar al contratista el 50% por la cantidad equivalente a ${{$orden->valor_contrato}} MN (Son {{$ContratoTotalLetra}})
            Dicha cantidad será pagada al Contratista en concepto de anticipo (en lo sucesivo el “Anticipo”) el mismo día de la firma del presente contrato o a más tardar el siguiente día hábil siguiente a que se firme este Contrato.
        </p>

        <p>Posteriormente al pago del Anticipo, el Contratista se obliga a entregar al Cliente una factura que cumpla con todos los requisitos fiscales y/o legales, misma que deberá detallar los conceptos que ampare, deberá
            traer desglosado el impuesto al valor agregado y la cantidad que en moneda nacional corresponda tanto al pago del Anticipo como al impuesto al valor agregado, considerando el tipo de cambio que determine el Diario Oficial. </p>

        <p>4.4. El Anticipo cubre los gastos para obtener los permisos necesarios para la ejecución total del contrato, la estructura especificada en el anexo 1, la instalación eléctrica descrita de igual manera en el anexo 1 y la
            cantidad de paneles e inversores solicitada por el Cliente en esta primera compra al precio unitario descrito en el anexo 1. </p>

        <p>4.5. Una vez entregado el Anticipo, el contratista tramitará los permisos, comprará los materiales y comenzará los trabajos necesarios. </p>

        <p>4.6. Ninguno de los pagos realizados por el Cliente al contratista, ya sea por concepto de anticipo o cualquier otro, será reembolsable bajo ninguna circunstancia. El Cliente manifiesta su conformidad con ello. </p>

        <p>4.7. Una vez terminado el trabajo de instalación y habiendo estado enterado El Cliente, este se obliga a pagar el 50% que representa la cantidad de
            a más tardar un día hábil después de haber entregado El Contratista la
            instalaciÃ³n de la obra terminada. </p>

        <p>4.8. Si El Cliente es omiso en pagar el resto del valor total de la obra, en la fecha lí­mite que corresponde, entonces deberÃ¡ cubrir una penalidad correspondiente al interÃ©s moratorio del 5% sobre el monto vencido,
            aplicable a partir del 2do. (Segundo), día hábil después de la fecha de entrega de la obra terminada. </p>

        <p>4.8.1 ante la negativa de EL <strong>CLIENTE</strong> a cubrir los pagos mencionados en la cláusula 4.7 a partir del 7mo.(séptimo) día hábil, se determinara automáticamente La terminación inmediata del presente contrato por
            <strong>INCUMPLIMIENTO</strong> debiendo entregar físicamente de forma inmediata el equipo completo instalado y sin perjuicio de que <strong>“EL CONTRATISTA”</strong> pueda reclamar las cantidades correspondientes por indemnización por daños
            y perjuicios o cualquier otra que pudiera corresponderle conforme a derecho.
        </p>


        <p class="titulos2" style="page-break-before: always;">DESCRIPCIÓN DEL PROYECTO. </p>


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

        <p>4.8.2 Para la terminación del contrato será suficiente la notificación vía correo electrónico y/o mensaje de texto enviada a <strong>“EL CLIENTE” </strong> al correo: {{$orden->correo}} y al celular {{$orden->telefono}} </p>
        <p>4.8.3 Una vez notificado por correo y/o mensaje de texto a “EL CLIENTE” la terminación del presente por impago el mismo acepta otorgar pleno acceso al domicilio donde se encuentre instalado LOS PANELES SOLARES
            <strong>INVERSOR Y ESTRUCTURA,</strong> a efecto de que se desinstale y recupere, para ello, autoriza el acceso a El Domicilio aún y cuando no se encuentre presente su propietario y/o arrendatario.
        </p>
        <p>4.8.4 <strong> “EL CLIENTE”</strong> renuncia al derecho de reclamar daños colaterales con motivos de los orificios de taquetes de expansión, daños a la pintura y/o impermeabilizado, que hayan acontecido con motivo de la instalación y/o desinstalación y/o retiro de los paneles, inversor y estructura. </p>

        <p>4.9 El Cliente está de acuerdo en realizar todos y cada uno de los pagos de la siguiente forma: </p>


        <p><strong>OPCIÓN 1: POR TRANSFERENCIA ELECTRÓNICA DESDE UN BANCO DISTINTO A BBVA BANCOMER</strong>
            A nuestro banco <strong>BBVA BANCOMER</strong> con la clabe interbancaria <strong>012914002017508952</strong> agregando su número de <strong>REFERENCIA</strong> el cual es <strong>{{$orden->referencia}}</strong>. La referencia se deberá poner en el campo de “CONCEPTO” de lo contrario, la trasferencia no se verá reflejada en nuestras cuentas. </p>
        <p><strong>OPCIÓN 2: DESDE BBVA BANCOMER</strong>
            Si su pago es desde BBVA BANCOMER, deberá hacerlo a través de PAGO DE SERVICIOS y colocar nuestro número de convenio CIE: <strong>01750895</strong> Con el número de referencia <strong>{{$orden->referencia}}</strong></p>
        <p>No serán válidos los depósitos realizados a cuentas de terceros, todos los pagos deberán ser única y exclusivamente a las cuentas bancarias a nombre de <strong>GWS GRUPO WATT SOLAR SA DE CV</strong>.</p>

        <p>4.10 El Cliente está de acuerdo, que una vez realizado el pago por medio de transferencia enviará por correo electrónico el comprobante de dicha transferencia, a las direcciones de correo:
            tesoreria@grupowattsolar.com y cxc@grupowattsolar.com y/o al número (614) 370-56-30. </p>

        <p class="titulos2">5. PAGOS PARCIALES </p>
        <p>5.1. Facturación. Al recibir cualquier pago del “Cliente” incluyendo cualquier liberación de Retención, el Contratista se obliga a entregar posteriormente una factura que cumpla con todos los requisitos legales, contenga desglose del impuesto al valor agregado y la cantidad en Pesos, moneda nacional,
            correspondiente al tipo de cambio determinado por el Diario Oficial, en la fecha del pago. </p>

        <p class="titulos2">6. CONTRATISTA INDEPENDIENTE </p>
        <p>El Contratista manifiesta expresamente que es un prestador de servicios independiente, que actúa bajo su propio riesgo y responsabilidad y con recursos humanos y materiales propios y suficientes. Por lo tanto, nada de lo establecido en este Contrato podrá interpretarse en el sentido de que el
            Contratista actúa como socio, asociado, agente o empleado del “Cliente”, o que el “Cliente” ha autorizado al Contratista y/o el Contratista ha aceptado establecer o asumir alguna obligación o responsabilidad en nombre del “Cliente” o para vincular al “Cliente” con alguna obligación o responsabilidad del Contratista.</p>

        <p class="titulos2">7. CONFIDENCIALIDAD </p>
        <p>Toda la información que reciba una parte (en los sucesivo se identificará como RECEPTORA) de la otra (en lo sucesivo se identificará como REVELADORA) ya sea de forma escrita, verbal, magnética, visual, gráfica, por medios electrónicos, electromagnéticos, discos ópticos, de información, microfilmes, manuales, códigos,
            diagramas, archivos planos o por cualesquier otro medio, forma o materiales será considerada como confidencial independientemente que se trate de información interna o privada y/o información o documentación relativa a la estructura, operación, capacidad, organización
            transacciones, secretos industriales, patentes, derechos de propiedad industrial y/o intelectual, situación financiera y/o comercial de las partes y/o sus filiales o asociadas salvo que dicha información sea expresamente marcada como información pública o no confidencial. </p>

        <p>Ambas partes se obligan a mantener la “INFORMACIÓN CONFIDENCIAL” en forma estrictamente confidencial como su nombre lo indica, emplearla únicamente para los fines del presente contrato y a no divulgarla ni revelarla bajo ninguna circunstancia ni por ningún medio a cualquier tercero, ni permitir su reproducción total
            o parcial, sin el previo consentimiento por escrito de la parte que la hubiere proporcionado (REVELADORA). </p>

        <p>En los términos del Artículo 37 Fracción IV de la Ley Federal de Protección de Datos Personales en Posesión de Particulares (en lo sucesivo LFPDPPP), el Contrato y sus subsecuentes modificaciones y escritos relacionados (conjuntamente referidos igualmente como El Contrato), no constituyen transferencia de datos personales.
            Cada una de las partes será responsable del manejo de sus respectivas bases de datos en los términos de la referida ley. </p>

        <p>Todos los datos personales que se alleguen en el curso del presente Contrato deberán ser usados únicamente para los propósitos del Contrato y no deben de ser procesados o revelados sin el consentimiento la Parte REVELADORA. </p>

        <p>Ambas partes se comprometen a: I. Tomar las medidas necesarias para que sus socios, agentes y/o contratistas cumplan con los lineamientos establecidos en la LFPDPPP. II. Mantener a salvo e indemnizar cualquier gasto y/o costas judiciales a la otra parte y que se pudiesen generar respecto del manejo negligente
            y/o doloso de datos personales a que se alleguen durante la vigencia del Contrato. III. A la terminación o vencimiento del término de este Contrato, ambas partes se entregarán toda aquella información a la que hayan tenido acceso durante la duración del Contrato. </p>

        <p>El presente contrato encontrará su alcance en el artículo 37 fracción IV respecto a la transferencia de datos por tratarse de un contrato celebrado en interés de los titulares de la información. </p>

        <p class="titulos2">8. BUENA FE. </p>
        <p>Las partes manifiestan que no existe error, dolo, lesión o cualquier otro vicio del consentimiento que pudiera invalidar el acto que se contempla en el presente Contrato.</p>

        <p class="titulos2">9. ANEXOS</p>
        <p>Los anexos al presente Contrato, formarán parte del mismo y deberán ser interpretados como un solo instrumento o documento donde se contiene la voluntad de las partes. </p>

        <p class="titulos2">10. CAMBIO EN LA LEY </p>
        <p>Los términos y condiciones del presente Contrato se han acordado tomando en cuenta las circunstancias comerciales y legales existentes en el momento de la celebración de este
            Contrato. En caso de que sobrevenga un cambio en la Ley que afecte económicamente, en forma negativa y sustancial, a cualquiera de las Partes en el cumplimiento de sus
            obligaciones conforme al presente Contrato, incluyendo impactos económicos durante la ejecución de la Obra derivados de dicho cambio en la Ley (incluyendo sin limitar el
            costo de insumos y mano de obra), las Partes acuerdan llevar a cabo las acciones necesarias para cumplir con el cambio en la Ley, incluyendo sin limitar aquellos cambios
            derivados de incrementos u obligaciones ambientales adicionales y aceptan ajustar de manera equitativa el precio de la Obra a manera de que refleje el impacto del cambio
            en la Ley. Las Partes podrán renegociar alguna o más Cláusulas del presente Contrato, especificando el cambio en que basan su solicitud de renegociación. A la recepción
            de dicha solicitud, las Partes se reunirán oportunamente y negociarán de buena fe durante un término que no excederá de 60 (sesenta) Días. Si al finalizar dicho término,
            las Partes no hubieren llegado a un acuerdo sobre dichas modificaciones, cualesquiera de ellas podrán dar por terminado el presente Contrato, en términos de lo establecido
            en el artículo 1691 b del Código Civil de Chihuahua, sin responsabilidad para las Partes mediante notificación dada a la otra Parte con al menos treinta 30 (treinta) Días de
            anticipación y previa resolución judicial. Durante el período comprendido entre la fecha de la notificación de terminación y el día en que surtirá efecto la
            resolución judicial de la terminación del Contrato, las obligaciones de las Partes bajo el presente Contrato continuarán en pleno vigor y efecto.</p>


        <p class="titulos2">11. IMPUESTOS, DERECHOS Y GASTOS </p>
        <p>Cada una de las Partes será responsable y hará el pago de sus propios impuestos, derechos, productos y aprovechamientos, incluyendo recargos, multas, actualizaciones,
            sanciones y cualesquier otros cargos, de conformidad con la ley fiscal aplicable que le corresponda, generados en relación con las transacciones derivadas de este Contrato.</p>

        <p class="titulos2">12. LEYES APLICABLES Y TRIBUNALES COMPETENTES. </p>
        <p>Para todo lo relacionado con la interpretación y ejecución con este instrumento son aplicables las Leyes correspondientes a su objeto y, en caso de controversia, serán competentes
            los tribunales de la ciudad de Chihuahua, Chih., renunciando las partes expresamente a cualquier otra jurisdicción que pudiera corresponderles por virtud de sus domicilios presentes
            o futuros o por cualquier otro motivo. En virtud de lo cual, las partes han celebrado el presente Contrato en la fecha mencionada en el preámbulo del mismo.</p>


        <p>El presente Contrato, fue leÃ­do, estando los contratantes enterados de su contenido, alcance y fuerza legal, lo ratifican en todas sus partes y lo firman para constancia, el â€œClienteâ€ y El â€œContratistaâ€ </p>

        <p>El presente contrato es firmado en fecha {{$vars_fecha[0]}}, en la ciudad de {{$orden->localidad}}, {{$orden['Estado']->nombre}}</p>


        <table id="firmas">
            <tbody>
                <tr>
                    <th><strong>EL CLIENTE</strong></th>
                    <th><strong>EL CONTRATISTA</strong></th>
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
                    <td>{{$orden->nombre_cliente}}</td>
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
            <p>Acta de <strong>ENTREGA-RECEPCIÓN</strong> de la obra de acuerdo con el contrato de <strong>ARRENDAMIENTO CON OPCIÓN A COMPRA</strong> del “Proyecto solar” celebrado con fecha , en chihuahua, Chih., entre <strong>GWS GRUPO WATT SOLAR SA DE CV Y __________</strong>.</p>
        </div>


        <div>
            <p class="titulos1">DECLARACIONES
            <p><strong>Primero.-</strong> <strong>“EL ARRENDATARIO” y “EL ARRENDADOR”</strong> celebraron un Contrato de arrendamiento con opción a compra, del Proyecto Solar en </p>
            <p><strong>Segundo.-</strong> Es la voluntad de ambas partes confirmar la entrega de la Obra y equipo solar, de acuerdo a las siguientes estipulaciones: </p>
            </p>
            <p class="vinetas">a. En este acto, “EL ARRENDADOR” entrega a “EL ARRENDATARIO” la Obra, la cual recibe a su entera satisfacción y en cumplimiento con las especificaciones de la Obra contenidas en este Contrato.</p>
            <p class="vinetas">b. La entrega se realiza en el domicilio ubicado en calle {{$orden->calle}} {{$orden->colonia}}, {{$orden->localidad}} , {{$orden['Estado']->nombre}}, C.P {{$orden->cp}} Físicamente conforme a lo establecido en el presente contrato.</p> C. Domicilio completo donde se hará la Instalacion. Físicamente conforme a lo establecido en el presente contrato.
            <p>c. EL ARRENDATARIO se da por enterado que el ahorro real se verá reflejado una vez que se cumplan las siguientes condiciones:</p>
            <p><strong>1) Se haya instalado el medidor bidireccional y esté funcionando correctamente</strong></p>
            <p><strong>2) Una vez instalado el medidor bidireccional hayan transcurrido un periodo completo de CFE, que es equivalente a dos meses, para que se vea reflejado el ahorro real.</strong></p>
            <p><strong>d. El cálculo del proyecto es en base al recibo de CFE que el cliente nos proporciona, si no se proporciona esta información, el cálculo de paneles a instalar es solamente un estimado.</strong></p>
            <p><strong>e. Si se incrementa el consumo, por mayor tiempo de uso en sus equipos o incrementa el número de equipos en su domicilio, es responsabilidad del cliente, ya que sólo se garantiza la producción de energía con los paneles solares, no la reducción del costo de su recibo de luz.</strong></p>
            <p>Ambas partes firman esta Acta de Entrega-Recepción de la Obra a la entera satisfacción del Cliente, el día el cual formará parte integral de este Contrato</p>
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
                    <td>{{$orden->nombre_cliente}}</td>
                    <td>GWS GRUPO WATT SOLAR SA DE CV</td>
                </tr>
            </tbody>
        </table>


        <p class="titulos1" style="page-break-before: always;">AVISO DE CONFIDENCIALIDAD / Notice of Confidentiality</p>
        <div id="cursivatext">

            <p>En cumplimiento a lo establecido en la Ley Federal de Protección de Datos en Posesión de los Particulares, los datos personales que usted libre y voluntariamente llegara a proporcionar a través de este medio, estarán sujetos a las disposiciones del Aviso de Privacidad de GWS GRUPO WATT SOLAR SA DE CV, el cual puede ser consultado en el sitio web: <span>https://www.grupowattsolar.com</span> Este mensaje (y cualquiera de sus anexos) es
                privado y confidencial; Contiene información para uso exclusivo del destinatario; En caso de que no sea la persona a quien va dirigido, por este medio le informamos que cualquier distribución y/o reproducción del mensaje queda prohibida por la ley de Propiedad Industrial Mexicana; así como la ley mercantil y civil del estado de chihuahua por lo que no autorizamos su reproducción, Si el presente lo recibió por error,
                nos disculpamos y le solicitamos muy amablemente el favor de borrarlo y/o reenviarlo a <span>cxc@grupowattsolar.com</span> así mismo cualquier asunto con respecto a su información se pone a su disposición el anterior correo Gracias.</p>
        </div>

        <div>
            <p class="titulos1">AVISO DE PRIVACIDAD</p>
            <p>De conformidad con lo establecido por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y los Lineamientos del Aviso de Privacidad, se emite el presente Aviso de Privacidad.</p>
            <p>Para <strong>“GWS GRUPO WATT SOLAR SA DE CV”</strong> con domicilio en la Vialidad Sacramento #10709 Col. Nombre de dios, CP. 31150, el tratamiento legítimo, controlado e informado de sus datos personales es de vital importancia para alcanzar los objetivos corporativos a través de todas sus áreas y reiterar nuestro compromiso con la privacidad y almacenamiento resguardado con sistemas electrónicos protegidos
                y su derecho a la autodeterminación informativa, por lo que se hace de su conocimiento que los datos personales y documentación sensible y/o de cualquier índole que proporcione y que deban ser tratados en términos de la Ley Federal de Protección de Datos Personales en posesión de particulares, le serán recabados de forma licita y con pleno consentimiento de su parte en los términos
                de nuestro aviso de privacidad el cual se encuentra publicado en <span>https://www.grupowattsolar.com</span> por lo que Le informamos que los datos personales que obtengamos derivados de las relaciones comerciales entre usted e “GWS GRUPO WATT SOLAR SA DE CV” es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección así como pone a su disposición correo <span>cxc@grupowattsolar.com</span> para expresar cualquier asunto sobre dichos avisos.</p>

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
                <p>{{$orden->nombre_cliente}}</p>
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
                <td style="text-align: center;">{{$orden->nombre_cliente}}</td>
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