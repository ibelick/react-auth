const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
const config = require('./config')

require('./server/models').connect(config.dbUri)

const app = express()

app.use(express.static('./server/static/'))
app.use(express.static('./client/dist/'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(passport.initialize())

const localSignupStrategy = require('./server/passport/local-signup')
const localLoginStrategy = require('./server/passport/local-login')
passport.use('local-signup', localSignupStrategy)
passport.use('local-login', localLoginStrategy)

const authCheckMiddleware = require('./server/middleware/auth-check')
app.use('/api', authCheckMiddleware)

const authRoutes = require('./server/routes/auth')
const apiRoutes = require('./server/routes/api')
const postRoutes = require('./server/routes/postRouter')

app.use('/auth', authRoutes)
app.use('/api', apiRoutes)
app.use('/posts', postRoutes)

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000 or http://127.0.0.1:8000');
});
