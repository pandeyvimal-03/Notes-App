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


// middlewares
app.use(cors({origin:'http://localhost:3001',  credentials: true }))
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
app.listen(4000 , ()=>{
    console.log("app is listening on port 4000")
})