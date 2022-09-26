const axios = require('axios')

/* axios.get('http://localhost:8080/api/news')
  .then(response => {
    console.log({
      status: response.status,
      data: response.data
    })
  }) */

const getAll = () => axios.get('http://localhost:8080/api/news')

const getOne = () => axios.get('http://localhost:8080/api/news/63290437170b7e0c99b600a6')


Promise.all([getAll(), getOne()])
  .then(results => {
    results.forEach(response => {
      console.log({
        status: response.status,
        data: response.data
      })
    })
  })