<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductiondeptController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//API for Department Panel!
Route::get('ProdDeptGetList', [ProductiondeptController::class, 'ProdDeptGetList']);
Route::get('ProdDeptById/{id}', [ProductiondeptController::class, 'ProdDeptListById']);
Route::post('ProdDeptPost', [ProductiondeptController::class, 'ProdDeptPost']);
Route::put('ProdDeptUpdate/{id}', [ProductiondeptController::class, 'ProdDeptUpdate']);
Route::delete('ProdDeptDelete/{id}', [ProductiondeptController::class, 'ProdDeptDelete']);
