<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToOrdenesContrato extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ordenes', function (Blueprint $table) {
            $table->integer('user_vendedor');
            $table->string('ine_ife');
            $table->decimal('produccion_sistema')->nullable(); 
            $table->decimal('mensualidad')->nullable(); 
            $table->timestamp('fecha_mensualidad_no1');
            $table->integer('medidor_bidireccional')->nullable(); 
            $table->integer('estado_ine_ife')->nullable(); 
            $table->string('localidad_ine_ife')->nullable(); 
            $table->string('calle_ine_ife')->nullable(); 
            $table->string('numero_ine_ife')->nullable(); 
            $table->string('colonia_ine_ife')->nullable(); 
            $table->integer('cp_ine_ife')->nullable(); 
            $table->integer('ine_ife_aval')->nullable(); 
            $table->string('nombre_aval')->nullable(); 

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ordenes', function (Blueprint $table) {
            $table->dropColumn('mensualidad');
            $table->dropColumn('fecha_mensualidad_no1');
            $table->dropColumn('medidor_bidireccional');
            $table->dropColumn('estado_ine_ife');
            $table->dropColumn('localidad_ine_ife');
            $table->dropColumn('calle_ine_ife');
            $table->dropColumn('numero_ine_ife');
            $table->dropColumn('colonia_ine_ife');
            $table->dropColumn('cp_ine_ife');
            $table->dropColumn('ine_ife_aval');
            $table->dropColumn('nombre_aval');
        });
    }
}
