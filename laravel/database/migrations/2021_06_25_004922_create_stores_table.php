<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stores', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('code', 50);
            $table->unsignedBigInteger('city_id')->nullable();
            $table->string('street_address', 50)->nullable();
            $table->string('number_address', 25)->nullable();
            $table->string('colony_address', 50)->nullable();
            $table->string('cp_address', 10)->nullable();
            $table->string('lat_address', 50)->nullable();
            $table->string('long_address', 50)->nullable();
            $table->string('color', 15)->nullable();
            $table->integer('active')->default(1);
            $table->timestamps();
            $table->foreign('city_id')->references('id')->on('cities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stores');
    }
}
