const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

const app = express();
const socket = require('socket.io')

const registerRoutes = require('./api/routes/Register')
const loginRoutes = require('./api/routes/Login')
const homeRoutes = require('./api/routes/home')

const port = process.env.PORT || 5000
const mongoURI = process.env.MONGO_URI || "mongodb://rbk232:123321sz@webchat-app-shard-00-00-zn2yk.mongodb.net:27017,webchat-app-shard-00-01-zn2yk.mongodb.net:27017,webchat-app-shard-00-02-zn2yk.mongodb.net:27017/test?ssl=true&replicaSet=webchat-app-shard-0&authSource=admin&retryWrites=true";

mongoose.connect(mongoURI, {useMongoClient: true})


app.use(cors({
  origin: true,
  credentials: true,
}))


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  name: 'sid',
  resave: false,
  saveUninitialized: false,
  secret: 'xanorp',
  cookie: {
      maxAge: 60 * 60 * 24 * 100,
      sameSite: true,
      secure: false
  },
  store: new MongoStore({
    url: mongoURI,
    ttl: 60 * 60 * 24 * 100
  }),


}))
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(morgan('dev'));
app.use('/register', registerRoutes)
app.use('/login', loginRoutes)
app.use('/home', homeRoutes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

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


const server = app.listen(port, () => console.log(`Server running on port ${port}`));

//Websocket
const io = socket(server)

io.on('connection', socket => {
  console.log('io connection', socket.id)
  socket.on('chat', data => {
    io.sockets.emit('chat', data)
  })
})
