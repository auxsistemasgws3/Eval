<?php

namespace App\Exports\Sheets;

use App\Models\Comentario;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class OrdenComentarioSheet implements FromCollection, WithHeadings, WithStyles,ShouldAutoSize, WithColumnFormatting, WithMapping
{
     /**
    * @return \Illuminate\Support\Collection
    */
    private $orden;

    public function collection()
    {
        return Comentario::with("Estatus")->with("sucursal")->with("tipocontrato")->with("tipovalidacion")->with("movimientos")
        ->with("Lugar")->get();
    }
    public function map($row): array
    {
        $sheets = [];
        $orden = [
            $row->no_contrato,
            $row->tipocontrato->significado,
            $row->nombre_cliente,
            $row->calle,
            $row->numero,
            $row->colonia,
            $row->cp,
            $row->telefono,
            $row->no_paneles,
            $row->capacidad_inversor,
            $row->potencia_panel,
            $row->no_factura,
            $row->tipovalidacion?$row->tipovalidacion->significado : null,
            $row->Estatus?$row->Estatus->significado : null,
            $row->fecha_inicio? Date::stringToExcel($row->fecha_inicio) : null,
            $row->fecha_instalacion? Date::dateTimeToExcel($row->fecha_instalacion) : null,
            $row->fecha_fin? Date::dateTimeToExcel($row->fecha_fin) : null,
            $row->soldador,
            $row->electrico,
            $row->ayudante,
            $row->sucursal->nombre,
            $row->marca_panel,
            $row->marca_inversor,
            $row->planta,
            $row->shinephone,
            $row->si_asignado,
            $row->Lugar?$row->Lugar->significado : null,
            $row->localidad,
            $row->fecha_deposito? Date::dateTimeToExcel($row->fecha_deposito) : null,
            // Date::dateTimeToExcel($row->fecha_deposito),
            Date::dateTimeToExcel($row->created_at),
        ];
        return $sheets;
    }
    public function headings() :array
    {
        return ['No. de contrato','Tipo contrato','Cliente','calle','numero',
        'colonia','cp','telefono','no_paneles','capacidad_inversor','potencia_panel',
        'no_factura','tipo_validado','estatus','fecha_inicio','fecha_instalacion',
        'fecha_fin','soldador','electrico','ayudante','sucursal_id','marca_panel','marca_inversor',
        'planta','shinephone','si_asignado','lugar','localidad','fecha_deposito','Creado'];
    }
    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text.
            1    => ['font' => ['bold' => true]],
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
            'O' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'P' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'Q' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'AC' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'AD' => NumberFormat::FORMAT_DATE_DDMMYYYY,
        ];
    }
}
