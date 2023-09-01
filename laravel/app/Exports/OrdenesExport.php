<?php

namespace App\Exports;

use App\Models\Orden;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithMapping;

class OrdenesExport implements FromCollection, WithHeadings, WithStyles, ShouldAutoSize, WithColumnFormatting, WithMapping
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        set_time_limit(120);
        return Orden::with("Estatus")->with("sucursal")->with("tipocontrato")->with("tipovalidacion")->with("TipoBateria")
            ->with('RegimenFiscal')->with('Estado')->with('TipoSistema')->with('TipoEstructura')->with('TipoProyecto')->with('EstadoINE')->with("Lugar")->with("MarcaBateria")
            ->with('MarcaBateria')->with('TipoBateria')->with('ProcesoCFE')->with('fechavalidado')->with('fechaaprobado')->with('fechaprogramado')
            ->with('TipoPersona')->with('MotivoCancelado')->with('DepImputado')
            ->with('fechaproceso')
            ->with('fechaprocesocfe')
            ->with('fechaliquidacion')
            ->with('fechadocumento')
            ->with('fechasiasignado')
            ->with('fechafinalizado')
            ->with('TipoContratoPagos')->with('Vendedor')->get();
    }
    public function map($row): array
    {
        return [

            $row->no_contrato,
            $row->contrato_anterior,
            $row->tipocontrato->text,
            $row->TipoContratoPagos->nombre,
            $row->valor_contrato,
            $row->anticipo,
            $row->mensualidad ? $row->mensualidad : null,
            $row->fecha_mensualidad_no1 ? $row->fecha_mensualidad_no1 : null,

            $row->referencia ? $row->referencia : null,
            $row->sucursal->name,
            $row->Vendedor->text,
            $row->calle,
            $row->numero,

            $row->colonia,
            $row->cp,
            $row->telefono,
            $row->RegimenFiscal->text,
            $row->TipoPersona->text,
            $row->nombre_cliente,
            $row->representante_legal,
            $row->ine_ife,
            $row->EstadoINE->name,
            $row->localidad_ine_ife,
            $row->calle_ine_ife,
            $row->numero_ine_ife,

            $row->colonia_ine_ife,
            $row->cp_ine_ife,
            $row->correo,
            $row->nombre_aval,
            $row->ine_ife_aval,
            $row->TipoSistema->text,
            $row->TipoProyecto->text,
            $row->no_paneles,
            $row->no_paneles_promo,
            $row->potencia_panel,
            $row->marca_panel,
            $row->capacidad_inversor,

            $row->marca_inversor,
            $row->cantidad_inversor,
            $row->no_baterias,
            $row->MarcaBateria->text,
            $row->TipoBateria->text,
            $row->TipoEstructura->text,
            $row->piezas_estructura,
            $row->promocion_aplicada,
            $row->preparacion_220_cuenta,
            $row->preparacion_220,
            $row->union_medidor,
            $row->medidor_bidireccional,
            
            $row->ProcesoCFE->text,
            $row->no_factura ? $row->no_factura : null,
            $row->tipovalidacion ? $row->tipovalidacion->text : null,
            $row->Estatus ? $row->Estatus->text : null,
            $row->fecha_instalacion ? Date::stringToExcel($row->fecha_instalacion) : null, //tentativa
            $row->fecha_inicio ? Date::stringToExcel($row->fecha_inicio) : null, //inicia instalacion

            $row->fecha_fin ? Date::dateTimeToExcel($row->fecha_fin) : null, //termina instalacion
            $row->soldador,
            $row->electrico,
            $row->ayudante,

            $row->planta,
            $row->shinephone,
            $row->si_asignado,
            $row->Lugar ? $row->Lugar->text : null,
            $row->localidad,
            $row->fecha_deposito ? Date::dateTimeToExcel($row->fecha_deposito) : null,

            $row->created_at ? Date::dateTimeToExcel($row->created_at) : null,
            $row->fechavalidado && count($row->fechavalidado) > 0 ? Date::dateTimeToExcel($row->fechavalidado[0]->created_at) : null,
            $row->fechaaprobado && count($row->fechaaprobado) > 0 ? Date::dateTimeToExcel($row->fechaaprobado[0]->created_at) : null,
            $row->fechaprogramado && count($row->fechaprogramado) > 0 ? Date::dateTimeToExcel($row->fechaprogramado[0]->created_at) : null,
            $row->fechaproceso && count($row->fechaproceso) > 0 ? Date::dateTimeToExcel($row->fechaproceso[0]->created_at) : null,
            /* $row->liquidado && count($row->liquidado) > 0 ? Date::dateTimeToExcel($row->liquidado[0]->created_at) : null, */
            $row->fechaprocesocfe && count($row->fechaprocesocfe) > 0 ? Date::dateTimeToExcel($row->fechaprocesocfe[0]->created_at) : null,
            $row->fecha_ingreso_doc ? Date::stringToExcel($row->fecha_ingreso_doc) : null,
            $row->fecha_medidorBD ? Date::stringToExcel($row->fecha_medidorBD) : null,
            $row->fecha_encenderS ? Date::stringToExcel($row->fecha_encenderS) : null,
            $row->fechasiasignado && count($row->fechasiasignado) > 0 ? Date::dateTimeToExcel($row->fechasiasignado[0]->created_at) : null,
            $row->fechafinalizado && count($row->fechafinalizado) > 0 ? Date::dateTimeToExcel($row->fechafinalizado[0]->created_at) : null,
            $row->fecha_liquidado ? Date::stringToExcel($row->fecha_liquidado) : null,
            $row->MotivoCancelado->text,
            $row->DepImputado->text,
            // Date::dateTimeToExcel($row->fecha_deposito),
            //Date::dateTimeToExcel($row->created_at)
        ];
    }
    public function headings(): array
    {
        return [

            'No. de Contrato', 'Contrato Anterior', 'Tipo Contrato', 'Tipo de Pago', 'Valor Total Contrato', 'Anticipo', 'Mensualidades', 'Primera Mensualidad',
            'Referencia', 'Sucursal', 'Vendedor', 'Calle', 'Numero',
            'Colonia', 'CP', 'Telefono', 'Regimen Fiscal', 'Tipo Persona', 'Cliente', 'Representante Legal', 'No. Identificacion', 'Estado (INE/IFE)', 'Localidad (INE/IFE)', 'Calle (INE/IFE)', 'Numero (INE/IFE)',
            'Colonia (INE/IFE)', 'CP (INE/IFE)', 'Correo', 'Nombre Aval', 'No. Identificacion Aval', 'Tipo Sistema', 'Tipo Proyecto', 'No. Paneles', 'No. Paneles Promocion', 'Potencia panel', 'Marca Panel', 'Capacidad Inversor',
            'Marca Inversor', 'Cantidad Inversor', 'No. Baterias', 'Marca Bateria', 'Tipo Bateria', 'Tipo Estructura', 'Piezas Estructura', 'Promocion Aplicada', 'Cuenta con Preparacion220?', 'Preparacion 220 WattSolar', 'Union Medidor', 'Medidod Bidireccional',
            'Proceso CFE', 'No. Factura', 'Tipo Validado', 'Estatus', 'Fecha Tentativa Instalacion', 'Fecha Inicio', 
            'Fecha Fin', 'Soldador', 'Electrico', 'Ayudante',
            'Planta', 'Shinephone', 'SI Asignado', 'Lugar', 'Localidad', 'Fecha Deposito',
            'Creado', 'Validado', 'Aprobado', 'Programado', 'En Proceso', 'Proceso CFE', 'Ingreso Doc', 'Medidor BD', 'Encendido Sistema', 'Fecha SI Asignado', 'Finalizado', 'Fecha Liquidado 100%', 'Motivo Cancelado', 'Dep. Imputado'
        ];
    }
    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text.
            1    => [
                'font' => ['bold' => true, 'size' => 14,],
                /* 'fill' => ['fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID, 'startColor' => ['rgb' => '789FF2']], */
            ],
            // // Styling a specific cell by coordinate.
            // 'B2' => ['font' => ['italic' => true]],

            // // Styling an entire column.
            // 'C'  => ['font' => ['size' => 16]],
        ];
    }
    public function columnFormats(): array
    {
        return [

            'a' => NumberFormat::FORMAT_GENERAL,
            'H' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'U' => NumberFormat::FORMAT_GENERAL,
            'BB' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BC' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BD' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BM' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BN' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BO' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BP' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BQ' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BR' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BS' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BT' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BU' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BV' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BW' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BX' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BY' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'BZ' => NumberFormat::FORMAT_DATE_DDMMYYYY,
        ];
    }
}
