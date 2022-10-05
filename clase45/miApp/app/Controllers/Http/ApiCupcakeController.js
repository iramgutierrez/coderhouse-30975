'use strict'

const Cupcake = use('App/Models/Cupcake')

class ApiCupcakeController {
  async index () {
    return await Cupcake.all()
  }

  async create ({ request }) {
    const data = request.all()

    const newCupcake = new Cupcake()

    newCupcake.name = data.name
    newCupcake.description = data.description
    newCupcake.price = data.price

    await newCupcake.save()

    return newCupcake
  }
}

module.exports = ApiCupcakeController
