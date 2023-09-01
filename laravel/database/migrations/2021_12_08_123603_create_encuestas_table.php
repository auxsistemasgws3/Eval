<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEncuestasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('encuestas', function (Blueprint $table) {
            $table->id();
            $table->integer('orden_id');
            $table->integer('subestacion')->nullable(); 
            $table->integer('conectado_subestacion')->nullable(); 
            $table->integer('capacidad_subestacion')->nullable(); 
            $table->string('volts')->nullable(); 
            $table->string('ubicacion_centro')->nullable(); 
            $table->string('medidor')->nullable(); 
            $table->integer('lugar_concentracion')->nullable(); 
            $table->integer('en_construccion')->nullable(); 
            $table->string('ubicacon_instalacion')->nullable(); 
            $table->string('piso_instalacion')->nullable(); 
            $table->double('metros_techo')->nullable(); 
            $table->string('lugar_instalacion')->nullable(); 
            $table->integer('internet')->nullable(); 
            $table->string('ubicacion_internet')->nullable(); 
            $table->string('tipo_techo')->nullable(); 
            $table->string('impermeabilizado')->nullable(); 
            $table->string('comentario', 400)->nullable(); 
            $table->integer('cambio_recibo')->nullable(); 
            $table->string('nombre',100)->nullable(); 
            $table->string('parentesco')->nullable(); 
            $table->string('direccion',150)->nullable(); 
            $table->string('telefono')->nullable(); 
            $table->string('reprentante_legal',100)->nullable();  
            $table->integer('active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('encuestas');
    }
}
