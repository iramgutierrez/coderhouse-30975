const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const axios = require('axios')

const schema = buildSchema(`
  type NewsItem {
    id: ID!
    title: String!
    author: String!
    createdAt: String!
  }

  input NewsItemInput {
    title: String
    author: String
  }

  type Query {
    getNews: [NewsItem]
    getNewsItem(id: ID!): NewsItem
  }

  type Mutation {
    createNewsItem(data: NewsItemInput): NewsItem
    updateNewsItem(id: ID!, data: NewsItemInput): NewsItem
    deleteNewsItem(id: ID!): Boolean
  }
`)

const getNews = () => {
  return axios
    .get('http://localhost:8080/api/news')
    .then(response => response.data)
}

const getNewsItem = ({ id }) => {
  return axios
    .get(`http://localhost:8080/api/news/${id}`)
    .then(response => response.data)
}

const createNewsItem = ({ data }) => {
  return axios
    .post('http://localhost:8080/api/news', data)
    .then(response => response.data)

}

const updateNewsItem = ({ id, data }) => {
  return axios
    .put(`http://localhost:8080/api/news/${id}`, data)
    .then(response => response.data)
}

const deleteNewsItem = ({ id }) => {
  return axios
    .delete(`http://localhost:8080/api/news/${id}`)
    .then(response => true)
}

const app = express()

app.use(express.static('public'))


app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: {
    getNews,
    getNewsItem,
    createNewsItem,
    updateNewsItem,
    deleteNewsItem
  },
  graphiql: true
}))

const PORT = process.env.PORT || 8081

app.listen(PORT, () => console.log(`Servidor GraphQL corriendo en el puerto ${PORT}`))