<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewColumnsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->string('primer_apellido');
            $table->string('segundo_apellido')->nullable();
            $table->string('telefono')->nullable();
            $table->string('ext')->nullable();
            $table->string('estatus')->default(1);
            $table->string('usuario_id')->nullable();
            $table->string('sucursal_id')->nullable();
            $table->string('rol_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropColumn('primer_apellido');
            $table->dropColumn('segundo_apellido');
            $table->dropColumn('telefono');
            $table->dropColumn('ext');
            $table->dropColumn('sucursal_id');
            $table->dropColumn('rol_id');
        });
    }
}
