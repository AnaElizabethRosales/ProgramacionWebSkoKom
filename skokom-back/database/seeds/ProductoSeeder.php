<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProductoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('productos')->insert(
            [

                [
                    'nombre' => 'Zapato Cafe Modelo1',
                    'precio' => 600.00,
                    'estado' => 'disp',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Zapato Cafe Modelo2',
                    'precio' => 650.00,
                    'estado' => 'disp',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Zapato Negro Modelo3',
                    'precio' => 690.00,
                    'estado' => 'disp',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Zapato Negro Modelo4',
                    'precio' => 700.00,
                    'estado' => 'disp',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Zapato Azul Modelo5',
                    'precio' => 750.00,
                    'estado' => 'disp',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Zapato Negro Modelo6',
                    'precio' => 750.00,
                    'estado' => 'disp',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Zapato Negro Modelo8',
                    'precio' => 800.00,
                    'estado' => 'disp',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Zapato Tinto Modelo9',
                    'precio' => 850.00,
                    'estado' => 'disp',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Tacon Negro Modelo10',
                    'precio' => 750.00,
                    'estado' => 'disp',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Bota Negra Modelo11',
                    'precio' => 850.00,
                    'estado' => 'disp',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Bota Cafe Modelo13',
                    'precio' => 680.00,
                    'estado' => 'disp',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]



            ]
        );
    }
}
