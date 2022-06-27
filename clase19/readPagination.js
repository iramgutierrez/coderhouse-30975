const db = require('./db')
const estudianteModel = require('./models/estudiante')

const ITEMS_BY_PAGE = 3

/**
 * 
 * @param {*} pageNumber 
 * @returns 
 * 
 * Si me piden la pagina 1, entonces skip debe ser igual 0 = (1 - 1) * 3
 * Si me piden la pagina 2, entonces skip debe ser igual 3 = (2 - 1) * 3
 * Si me piden la pagina 3, entonces skip debe ser igual 6 = (3 - 1) * 3
 */
const getPageParams = (pageNumber = 1) => {
  return {
    limit: ITEMS_BY_PAGE,
    skip: (pageNumber - 1) * ITEMS_BY_PAGE
  }
}
// http://localhost:8000/users?page=4
;(async () => {
  await db

  const firstPageParams = getPageParams(1)
  const secondPageParams = getPageParams(2)
  const thridPageParams = getPageParams(3)

  const firstPage = await estudianteModel.find({}, {nombre: 1, dni: 1, _id: false}).sort({ nombre: 1 }).limit(firstPageParams.limit).skip(firstPageParams.skip)
  const secondPage = await estudianteModel.find({}, {nombre: 1, dni: 1, _id: false}).sort({ nombre: 1 }).limit(secondPageParams.limit).skip(secondPageParams.skip)
  const thridPage = await estudianteModel.find({}, {nombre: 1, dni: 1, _id: false}).sort({ nombre: 1 }).limit(thridPageParams.limit).skip(thridPageParams.skip)

  console.log({
    firstPage,
    secondPage,
    thridPage
  })

  process.exit()

})()