import express from 'express'
import logger from 'morgan'
import api from './api'

const app = express()
app.set('trust proxy', 'loopback')

// TODO: use bunyan
app.use(logger('dev'))

// TODO: implement configuration
const config = {
  influx_url: 'http://test:test@localhost:8086',
  db_name: 'mydb',
}
app.use('/', api(config))

// TODO: investigate express.errorHandler
/* eslint no-unused-vars: 0 */
// error handling, should be after normal middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    reason: err.message,
    stack: err.stack,
  })
})

export default app
