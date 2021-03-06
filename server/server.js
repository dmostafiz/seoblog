const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const authRouter = require('./routes/authRouter')

// app
const app = express()

// MongoDB database connection
const DB = process.env.NODE_ENV == 'development' ? process.env.MONGO_LOCAL :  process.env.MONGO_PROD 


 mongoose.connect(DB, {
        useNewUrlParser:true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => console.log('Database connected'))


//middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// cors
if(process.env.NODE_ENV == 'development')
{
    app.use(cors({origin: `${process.env.CLIENT_URL}`}))
}

// dfine routers
app.use('/api', authRouter)

app.get('/', (req, res) => {
    res.json({time: Date().toString()})
})

// port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`app is running on http://localhost:${port}`)
})
