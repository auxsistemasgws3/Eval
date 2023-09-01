<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContratoPagosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contrato_pagos', function (Blueprint $table) {
            $table->id();
            $table->integer('tipo_contrato'); 
            $table->string('nombre'); 
            $table->integer('sort'); 
            $table->double('anticipo')->nullable(); 
            $table->double('restante1')->nullable(); 
            $table->double('restante2')->nullable(); 
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
        Schema::dropIfExists('contrato_pagos');
    }
}
