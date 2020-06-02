<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->dateTime('fecha_entrega', 0);
            $table->dateTime('fecha_pedido', 0);
            $table->string('detalles', 300);
            $table->string('nombre_recibe', 100);
            $table->double('costo', 8, 2);
            $table->enum('estado', ['cotizado', 'pedido', 'entregado']);
            $table->boolean('pago');

            $table->unsignedBigInteger('producto_id');
            $table->unsignedBigInteger('cliente_id');
            $table->timestamps();



            $table->foreign('producto_id')->references('id')->on('productos');
            $table->foreign('cliente_id')->references('id')->on('clientes');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedidos');
    }
}
