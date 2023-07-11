<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/contact', function () {
    return view('welcome');
});

Route::get('/livros', function () {
    return view('livros');
});


Route::get('/', [
    BookController::class,
    'index',
]);
