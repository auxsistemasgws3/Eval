<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DictionarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => 'Activo',
            'reference_type'  => 'ESTATUS',
            'sort'  => 0,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 0,
            'text'  => 'Inactivo',
            'reference_type'  => 'ESTATUS',
            'sort'  => 0,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => 'Capturado',
            'reference_type'  => 'OR_ESTATUS',
            'aux'  => 'dark',
            'sort'  => 1,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 2,
            'text'  => 'Validado',
            'reference_type'  => 'OR_ESTATUS',
            'aux'  => 'secondary',
            'sort'  => 2,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 3,
            'text'  => 'Aprobado',
            'reference_type'  => 'OR_ESTATUS',
            'aux'  => 'warning',
            'sort'  => 3,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 4,
            'text'  => 'Programado',
            'reference_type'  => 'OR_ESTATUS',
            'aux'  => 'info',
            'sort'  => 4,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 5,
            'text'  => 'Instalado',
            'reference_type'  => 'OR_ESTATUS',
            'aux'  => 'primary',
            'sort'  => 5,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 6,
            'text'  => 'Proceso de CFE',
            'reference_type'  => 'OR_ESTATUS',
            'aux'  => 'success',
            'sort'  => 6,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 0,
            'text'  => 'Cancelado',
            'reference_type'  => 'OR_ESTATUS',
            'aux'  => 'danger',
            'sort'  => 7,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 7,
            'text'  => 'SI Asignado',
            'reference_type'  => 'OR_ESTATUS',
            'aux'  => 'warning',
            'sort'  => 11,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 8,
            'text'  => 'Finalizado',
            'reference_type'  => 'OR_ESTATUS',
            'aux'  => 'success',
            'sort'  => 8,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 9,
            'text'  => 'En proceso',
            'reference_type'  => 'OR_ESTATUS',
            'aux'  => 'primary',
            'sort'  => 10,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 10,
            'text'  => 'Ingreso de doc',
            'reference_type'  => 'OR_ESTATUS',
            'aux'  => 'primary',
            'sort'  => 7,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => 'Vendedor',
            'reference_type'  => 'ROL',
            'sort'  => 1,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 2,
            'text'  => 'Contabilidad',
            'reference_type'  => 'ROL',
            'sort'  => 2,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 3,
            'text'  => 'Operaciones',
            'reference_type'  => 'ROL',
            'sort'  => 3,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 4,
            'text'  => 'Consultor',
            'reference_type'  => 'ROL',
            'sort'  => 4,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 5,
            'text'  => 'Administrador',
            'reference_type'  => 'ROL',
            'sort'  => 5,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 6,
            'text'  => 'Soporte',
            'reference_type'  => 'ROL',
            'sort'  => 6,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 7,
            'text'  => 'Asesor de ventas',
            'reference_type'  => 'ROL',
            'sort'  => 7,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 8,
            'text'  => 'Enlace de ventas',
            'reference_type'  => 'ROL',
            'sort'  => 8,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => 'Con anticipo',
            'reference_type'  => 'TIPO_VALIDACION',
            'sort'  => 1,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 2,
            'text'  => 'Sin anticipo',
            'reference_type'  => 'TIPO_VALIDACION',
            'sort'  => 2,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 3,
            'text'  => 'Apartado',
            'reference_type'  => 'TIPO_VALIDACION',
            'sort'  => 3,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 4,
            'text'  => 'Liquidado',
            'reference_type'  => 'TIPO_VALIDACION',
            'sort'  => 4,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => 'CRD Credito',
            'reference_type'  => 'TIPO_CONTRATO',
            'sort'  => 1,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 2,
            'text'  => 'CNTD Contado',
            'reference_type'  => 'TIPO_CONTRATO',
            'sort'  => 2,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => 'Empleado',
            'reference_type'  => 'AREA_VENTA',
            'sort'  => 1,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 2,
            'text'  => 'Ferreteria',
            'reference_type'  => 'AREA_VENTA',
            'sort'  => 2,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 3,
            'text'  => 'Comisionista',
            'reference_type'  => 'AREA_VENTA',
            'sort'  => 3,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 4,
            'text'  => 'Suma Watts',
            'reference_type'  => 'AREA_VENTA',
            'sort'  => 4,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => '$0 - $1000',
            'reference_type'  => 'CONSUMO_PROMEDIO',
            'sort'  => 1,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 2,
            'text'  => '$1000 - $3000',
            'reference_type'  => 'CONSUMO_PROMEDIO',
            'sort'  => 2,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 3,
            'text'  => '< $3000',
            'reference_type'  => 'CONSUMO_PROMEDIO',
            'sort'  => 3,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => 'Local',
            'reference_type'  => 'LUGAR',
            'sort'  => 1,
            'aux' => 0,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 2,
            'text'  => 'Foraneo',
            'reference_type'  => 'LUGAR',
            'sort'  => 2,
            'aux' => 1,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);

        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => 'Reportado',
            'reference_type'  => 'ORSE_ESTATUS',
            'sort'  => 1,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 2,
            'text'  => 'En proceso',
            'reference_type'  => 'ORSE_ESTATUS',
            'sort'  => 2,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 3,
            'text'  => 'Terminado',
            'reference_type'  => 'ORSE_ESTATUS',
            'sort'  => 3,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 0,
            'text'  => 'Cancelado',
            'reference_type'  => 'ORSE_ESTATUS',
            'sort'  => 0,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 3,
            'text'  => '3%',
            'reference_type'  => 'PORCENTAJE_DEFAULT',
            'sort'  => 1,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 5,
            'text'  => '5%',
            'reference_type'  => 'PORCENTAJE_MAX',
            'sort'  => 2,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => '1%',
            'reference_type'  => 'PORCENTAJE_MIN',
            'sort'  => 3,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => 'Casa',
            'reference_type'  => 'TIPO_DOMICILIO',
            'sort'  => 1,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 2,
            'text'  => 'Comercio',
            'reference_type'  => 'TIPO_DOMICILIO',
            'sort'  => 2,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 3,
            'text'  => 'Empresa',
            'reference_type'  => 'TIPO_DOMICILIO',
            'sort'  => 3,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 0,
            'text'  => 'Cancelado',
            'reference_type'  => 'VENTA_ESTATUS',
            'sort'  => 0,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 1,
            'text'  => 'Capturado',
            'reference_type'  => 'VENTA_ESTATUS',
            'sort'  => 1,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 2,
            'text'  => 'Cotizado',
            'reference_type'  => 'VENTA_ESTATUS',
            'sort'  => 2,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 3,
            'text'  => 'Cotizado',
            'reference_type'  => 'VENTA_ESTATUS',
            'sort'  => 3,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
        DB::table('dictionaries')->insert([
            'code' => 4,
            'text'  => 'Orden Generada',
            'reference_type'  => 'VENTA_ESTATUS',
            'sort'  => 4,
            'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
        ]);
    }
}
