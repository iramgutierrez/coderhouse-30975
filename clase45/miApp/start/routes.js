'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')

Route
  .get('/', () => 'Hola desde Adonis')
  .middleware(async (ctx, next) => {
    console.log(`Entrando a la ruta ${ ctx.request.url() }`)

    return next()
  })

const Cupcake = use('App/Models/Cupcake')

Route
  .get('api/cupcakes', 'ApiCupcakeController.index')

Route
  .post('api/cupcakes', 'ApiCupcakeController.create')

Route
  .get('cupcakes', 'CupcakeController.index')
