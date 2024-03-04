const express = require ('express')
const app = express();
const db = require('./database/connection')
const cookieParser = require('cookie-parser')
const loginroute = require('./routes/login')
const signuproute = require('./routes/signup')
const notesroute = require('./routes/notes')
const logoutroute = require('./routes/logout')
const authenticate = require('./middleware/authenticate')
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT
const host = process.env.HOST



 //middlewares
   app.use(cors({
      origin: [ host],
      credentials: true,
       methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
      
   }));

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


// defining routes

app.use('/api/login' , loginroute)
app.use('/api/signup' , signuproute)
 app.use('/api/notes',authenticate , notesroute)
 app.use('/api/logout',authenticate , logoutroute)



// defining port
app.listen(port || 4000)