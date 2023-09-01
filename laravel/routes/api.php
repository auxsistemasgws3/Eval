<?php

use Illuminate\Http\Request;
use App\Exports\OrdenesExport;
use App\Exports\UserNoEvaluaciones;
use Maatwebsite\Excel\Facades\Excel;
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


Route::group(['middleware' => 'api'], function ($router) {
    Route::get('menu', 'MenuController@index');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    // Route::post('register', 'AuthController@register')
    //Hii 
    

    Route::prefix('evaluaciones')->group(function () {
        Route::get('/', 'EvaluacionesController@getUser')->name('Evaluaciones.getUser');
        Route::get('/desempeno/{id}', 'EvaluacionesController@getQuestionsDesempeno')->name('Evaluaciones.getQuestionsDesempeno');
        Route::get('/lider/{id}', 'EvaluacionesController@getQuestionsLider')->name('Evaluaciones.getQuestionsLider');
        Route::get('/entreLideres/{id}', 'EvaluacionesController@getQuestionsEntreLideres')->name('Evaluaciones.getQuestionsEntreLideres');
        Route::get('/climaLaboral/{id}', 'EvaluacionesController@getQuestionsClimaLaboral')->name('Evaluaciones.getQuestionsClimaLaboral');
        Route::get('/grupal/{id}', 'EvaluacionesController@getQuestionsGrupal')->name('Evaluaciones.getQuestionsGrupal');
        Route::get('/departamento/{id}', 'EvaluacionesController@getQuestionsDepartamento')->name('Evaluaciones.getQuestionsDepartamento');
        Route::get('/desempenoEdit/{id}', 'EvaluacionesController@getQuestionsDesempenoEdit')->name('Evaluaciones.getQuestionsDesempenoEdit');
        Route::get('/liderEdit/{id}', 'EvaluacionesController@getQuestionsLiderEdit')->name('Evaluaciones.getQuestionsLiderEdit');
        Route::get('/climaLaboralEdit/{id}', 'EvaluacionesController@getQuestionsClimaLaboralEdit')->name('Evaluaciones.getQuestionsClimaLaboralEdit');
        Route::get('/departamentoEdit/{id}', 'EvaluacionesController@getQuestionsDepartamentoEdit')->name('Evaluaciones.getQuestionsDepartamentoEdit');
        Route::get('/grupalEdit/{id}', 'EvaluacionesController@getQuestionsGrupalEdit')->name('Evaluaciones.getQuestionsGrupalEdit');
        Route::get('/entreLideresEdit/{id}', 'EvaluacionesController@getQuestionsEntreLideresEdit')->name('Evaluaciones.getQuestionsEntreLideresEdit');
        Route::post('/addEvaluacion', 'EvaluacionesController@AddEvaluacion')->name('Evaluaciones.AddEvaluacion');
        Route::post('/addEvaluacionDep', 'EvaluacionesController@AddEvaluacionDep')->name('Evaluaciones.AddEvaluacionDep');
        Route::get('/getQuestions/{id}', 'EvaluacionesController@getQuestions')->name('Evaluaciones.getQuestions');
        Route::post('/updateQuestions', 'EvaluacionesController@updateQuestions')->name('Evaluaciones.updateQuestions');
        Route::post('/addQuestions', 'EvaluacionesController@addQuestions')->name('Evaluaciones.addQuestions');
        Route::get('/evaluacionesDepartamento', 'EvaluacionesController@getEvaluacionesDepartamento')->name('Evaluaciones.getEvaluacionesDepartamento');
        Route::get('/activarDepartamento/{id}', 'EvaluacionesController@activarDepartamento')->name('Evaluaciones.activarDepartamento');
        Route::get('/desactivarDepartamento/{id}', 'EvaluacionesController@desactivarDepartamento')->name('Evaluaciones.desactivarDepartamento');
        Route::get('/resultado', 'EvaluacionesController@Resultados')->name('Evaluaciones.Resultados');
        Route::get('/getDesempenoValidacion/{periodo}','EvaluacionesController@getDesempenoValidacion')->name('Evaluaciones.DesempenoValidacion');
        Route::get('/getMostrarResultados/{periodo}','EvaluacionesController@getMostrarResultados')->name('Evaluaciones.getMostrarResultados');
        Route::get('/getSincontestar/{periodo}','EvaluacionesController@getSincontestar')->name('Evaluaciones.getSincontestar');
        Route::get('/resultados/{id}/{periodo}', 'EvaluacionesController@getResultados')->name('Evaluaciones.getResultados');
        Route::get('/resultadosLideres/{id}/{periodo}', 'EvaluacionesController@getResultadosLider')->name('Evaluaciones.getResultadosLider');
        Route::get('/resultados/aplicarSancion/{id}/{periodo}', 'EvaluacionesController@addSancion')->name('Evaluaciones.addSancion');
        Route::get('/resultadosDep/{idDep}/{periodoDep}', 'EvaluacionesController@getResultadosDep')->name('Evaluaciones.getResultadosDep');
        Route::get('/resultadosClima/{periodoCli}', 'EvaluacionesController@getResultadosClima')->name('Evaluaciones.getResultadosClima');
        Route::get('/resultadosGrupalContabilidad/{periodoCli}', 'EvaluacionesController@getResultadosGrupalContabilidad')->name('Evaluaciones.getResultadosGrupalContabilidad');
        Route::get('/resultadosGrupalLogisticaSoporte/{periodoCli}', 'EvaluacionesController@getResultadosGrupalLogisticaSoporte')->name('Evaluaciones.getResultadosGrupalLogisticaSoporte');
        Route::get('/resultadoslider/imprimir/{id}/{periodo}', 'EvaluacionesController@imprimirEvaluacionLider');
        Route::get('/resultados/imprimir/{id}/{periodo}', 'EvaluacionesController@imprimirEvaluacion');
        Route::get('/resultadosdepa/imprimir/{idDep}/{periodoDep}', 'EvaluacionesController@imprimirEvaluacionDepa');
    });

    Route::prefix('resultadosMejores')->group(function () {
        Route::get('/', 'MejoresResultadosController@getMejoresResultados')->name('resultadosMejores.getMejoresResultados');
        
    });

    Route::prefix('sos')->group(function () {
        Route::get('/', 'SosController@getUser')->name('sos.getUser');
        Route::get('/getFelicitacion', 'SosController@getFelicitacion')->name('sos.getFelicitacion');
        Route::get('/getSugerencia', 'SosController@getSugerencia')->name('sos.getSugerencia');
        Route::get('/getQueja', 'SosController@getQueja')->name('sos.getQueja');
        Route::post('/addFelicitacion', 'SosController@addFelicitacion')->name('sos.addFelicitacion');
        Route::post('/addSugerencia', 'SosController@addSugerencia')->name('sos.addSugerencia');
        Route::post('/addQueja', 'SosController@addQueja')->name('sos.addQueja');
        Route::get('/reportes', 'SosController@reportes')->name('sos.reportes');
        Route::get('/getReporteFelicitacion/{id}', 'SosController@getReporteFelicitacion')->name('sos.getReporteFelicitacion');
        Route::get('/getReporteSugerencia/{id}', 'SosController@getReporteSugerencia')->name('sos.getReporteSugerencia');
        Route::get('/getReporteQueja/{id}', 'SosController@getReporteQueja')->name('sos.getReporteQueja');
    });

    Route::prefix('kpi')->group(function () {
        Route::get('/', 'KpiController@getKpi')->name('kpi.getKpi');
        Route::post('/addVacante', 'KpiController@addVacante')->name('kpi.addVacante');
        Route::post('/addCandidato', 'KpiController@addCandidato')->name('kpi.addCandidato');
        Route::get('/getCandidato/{id}', 'KpiController@getCandidato')->name('kpi.getCandidato');
        Route::post('/updateCandidato', 'KpiController@updateCandidato')->name('kpi.updateCandidato');
        Route::post('/updateContratacion', 'KpiController@updateContratacion')->name('kpi.updateContratacion');
        Route::get('/getVacante/{id}', 'KpiController@getVacante')->name('kpi.getVacante');
        Route::post('/updateVacante', 'KpiController@updateVacante')->name('kpi.updateVacante');
        Route::get('/getSolicitudPersonal', 'KpiController@getSolicitudPersonal')->name('kpi.getSolicitudPersonal');
        Route::post('/createKpi', 'KpiController@createKpi')->name('kpi.createKpi');
        Route::get('/getSolicitud/{id}', 'KpiController@getSolicitud')->name('kpi.getSolicitud');
        Route::get('/imprimir/{id}', 'KpiController@imprimirkpi');
    });

    Route::prefix('reserva')->group(function () {
        Route::get('/', 'ReservaController@index');
        Route::get('/consultar', 'ReservaController@eliminarC');
        Route::get('/consultar/{fecha}', 'ReservaController@eliminarE');
        Route::post('/eliminarR', 'ReservaController@eliminarR');
        Route::post('/calcularDias', 'ReservaController@calcularDias');
        Route::post('/verificarDias', 'ReservaController@verificarDias');
    });

    Route::group(['middleware' => 'admin'], function ($router) {
        Route::prefix('store')->group(function () {
            Route::get('/', 'SettingsController@Stores')->name('store.get');
            Route::get('/{id}', 'SettingsController@show')->name('store');
            Route::post('/update', 'SettingsController@updateStore')->name('store.update');
            Route::post('/', 'SettingsController@addStore')->name('store.add');
            Route::delete('/{id}',   'SettingsController@destroyStore')->name('store.destroyStore');    
        });
        Route::prefix('user')->group(function () {
            Route::get('/', 'SettingsController@Users');
            Route::get('/{id}', 'SettingsController@getUser');
            Route::post('/create', 'SettingsController@addUser');
            Route::post('/update', 'SettingsController@updateUser');
        });

        Route::prefix('menu/menu')->group(function () {
            Route::get('/',         'MenuEditController@index')->name('menu.menu.index');
            Route::get('/create',   'MenuEditController@create')->name('menu.menu.create');
            Route::post('/store',   'MenuEditController@store')->name('menu.menu.store');
            Route::get('/edit',     'MenuEditController@edit')->name('menu.menu.edit');
            Route::post('/update',  'MenuEditController@update')->name('menu.menu.update');
            Route::get('/delete',   'MenuEditController@delete')->name('menu.menu.delete');
        });
        Route::prefix('menu/element')->group(function () {
            Route::get('/',             'MenuElementController@index')->name('menu.index');
            Route::get('/move-up',      'MenuElementController@moveUp')->name('menu.up');
            Route::get('/move-down',    'MenuElementController@moveDown')->name('menu.down');
            Route::get('/create',       'MenuElementController@create')->name('menu.create');
            Route::post('/store',       'MenuElementController@store')->name('menu.store');
            Route::get('/get-parents',  'MenuElementController@getParents');
            Route::get('/edit',         'MenuElementController@edit')->name('menu.edit');
            Route::post('/update',      'MenuElementController@update')->name('menu.update');
            Route::get('/show',         'MenuElementController@show')->name('menu.show');
            Route::get('/delete',       'MenuElementController@delete')->name('menu.delete');
        });

        Route::resource('roles',        'RolesController');
        Route::get('/roles/move/move-up',      'RolesController@moveUp')->name('roles.up');
        Route::get('/roles/move/move-down',    'RolesController@moveDown')->name('roles.down');
    });
});
