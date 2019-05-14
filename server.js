const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

const app = express();
const socket = require('socket.io')


const {
  PORT =  5000,
  NODE_ENV = 'production',

  SESS_NAME = 'sid',
  SESS_SECRET = 'xanorp',
  MONGO_URL = 'mongodb://localhost:27017/test'
} = process.env

const IN_PROD = NODE_ENV === 'production';

const registerRoutes = require('./api/routes/Register')
const loginRoutes = require('./api/routes/Login')
const homeRoutes = require('./api/routes/home')

mongoose.connect(MONGO_URL, {useNewUrlParser: true})


app.use(cors({
  origin: true,
  credentials: true,
}))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  name: SESS_NAME,
  resave: false,
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
      maxAge: 60 * 60 * 24 * 100,
      sameSite: true,
      secure: IN_PROD
  },
  store: new MongoStore({
    url:  MONGO_URL,
    ttl: 60 * 60 * 24 * 100
  }),


}))
app.use(morgan('dev'));

app.use('/register', registerRoutes)
app.use('/login', loginRoutes)
app.use('/home', homeRoutes)



app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
})


const server = app.listen(PORT, () => `Server running on port ${PORT}`);

//Websocket
const io = socket(server)

io.on('connection', socket => {
  console.log('io connection', socket.id)
  socket.on('chat', data => {
    io.sockets.emit('chat', data)
  })
})
