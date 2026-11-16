const express = require('express')
const app  = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('dotenv').config()
const authRouter = require('./routers/authRouter')
app.use('/brandXpress/app',authRouter)

const port = process.env.port || 3000
const start = async()=>{
    try {
        await app.listen(port)
        console.log(`Server is listening on port ${port}`)
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = {start}