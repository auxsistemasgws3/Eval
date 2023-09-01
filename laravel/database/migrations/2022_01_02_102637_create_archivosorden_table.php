<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArchivosOrdenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('archivosorden', function (Blueprint $table) {
            $table->id();
            $table->integer('orden_id');
            $table->string('INE_frente_titular')->nullable(); 
            $table->string('INE_detras_titular')->nullable(); 
            $table->string('INE_frente_aval')->nullable(); 
            $table->string('INE_detras_aval')->nullable(); 
            $table->string('INE_frente_recibo_cfe')->nullable(); 
            $table->string('INE_detras_recibo_cfe')->nullable(); 
            $table->string('Recibo_cfe')->nullable(); 
            $table->string('INF_equipos')->nullable(); 
            $table->string('Cotizacion')->nullable(); 
            $table->string('Financiamiento')->nullable(); 
            $table->string('CORRIDA_pagos')->nullable(); 
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
        Schema::dropIfExists('archivosorden');
    }
}
