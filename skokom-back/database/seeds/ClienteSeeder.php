<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Str;

class ClienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clientes')->insert(
            [

                [
                    'nombre' => 'Ana',
                    'apellidos' => 'Rosales',
                    'email' => 'elizabeth.rosales.p3@gmail.com',
                    'cel' => 4491072581,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Juan',
                    'apellidos' => 'Gomez',
                    'email' => Str::random(8).'@gmail.com',
                    'cel' => 2548541268,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Adrian',
                    'apellidos' => 'Bosques',
                    'email' => Str::random(8).'@gmail.com',
                    'cel' => 4482518627,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Oscar',
                    'apellidos' => 'Luna',
                    'email' => Str::random(8).'@gmail.com',
                    'cel' => 6625874632,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Maria',
                    'apellidos' => 'Nieves',
                    'email' => Str::random(8).'@gmail.com',
                    'cel' => 2285648215,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
                [
                    'nombre' => 'Christian',
                    'apellidos' => 'Ramirez',
                    'email' => Str::random(8).'@gmail.com',
                    'cel' => 7568245961,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],




            ]
        );
    }
}
