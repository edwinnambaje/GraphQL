const express = require('express')
const colors = require('colors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const PORT = process.env.PORT || 8000
const connectDB = require('./config/config')

const app = express()
connectDB()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  })
)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
