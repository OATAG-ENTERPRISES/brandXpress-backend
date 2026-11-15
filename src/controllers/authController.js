const {pool} = require('../config/connectDB')
const {StatusCodes} = require('http-status-codes')
const jwt = require('jsonwebtoken')
const createUser = async(req,res)=>{
    const {name,email,password} = req.body
  console.log(req.body)
    const response = await pool.query('insert into users(name,email,password) values($1,$2,$3) returning *;',
        [name,email,password])
        const user= response.rows
        let token = await jwt.sign({...user},process.env.jwt_secret,{expiresIn:process.env.jwt_lifespan})

        return res.status(StatusCodes.CREATED).json({success:true,user,token,message:"User account created successfully"})
}

module.exports = {
    createUser
}