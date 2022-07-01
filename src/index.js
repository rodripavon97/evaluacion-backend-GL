const express = require('express')
const People = require('./models/peopleModels')
const Player = require('./models/playerFootballModel')
const peopleRouter = require('./routes/peopleRouter')(People)
const authRouter = require('./routes/authRouter')(People)
const playerFootballRouter = require('./routes/playerFootballRouter')(Player)
const errorHandler = require('./middleware/errorHandler')
const httpStatus = require('./helpers/httpStatus')
require('dotenv').config()
const { expressjwt } = require('express-jwt')

const app = express()

require('./database/db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.all(
  '/*',
  expressjwt({ secret: process.env.SECRET , algorithms: ['HS256'] }).unless({
    path: ['/auth/login', '/auth/register']
  })
)

app.use((err, _, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(httpStatus.UNAUTHORIZED).json({
      error: err.name,
      cause: 'Unauthorized. Missing or invalid token provided.'
    })
  } else {
    next(err)
  }
})

app.use('/api', peopleRouter)
app.use('/api', playerFootballRouter)
app.use('/', authRouter)

app.use(errorHandler)

app.listen(5000, () => {
  console.log('Server is running!')
})
