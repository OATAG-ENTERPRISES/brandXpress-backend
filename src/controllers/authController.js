const {pool} = require('../config/connectDB')
const {StatusCodes} = require('http-status-codes')
const {authError} = require('../errors')
const jwt = require('jsonwebtoken')
const createUser = async(req,res)=>{
    const {name,email,password} = req.body
  
    const response = await pool.query('insert into users(name,email,password) values($1,$2,$3) returning *;',
        [name,email,password])
        const user= response.rows[0]
       console.log(user)
        let token = await jwt.sign({...user},process.env.jwt_secret,{expiresIn:process.env.jwt_lifespan})

        return res.status(StatusCodes.CREATED).json({success:true,user,token,message:"User account created successfully"})
}
const login = async(req,res)=>{
    const {email,password} = req.body
    const response = await pool.query('select * from users where email = $1',[email])
    if(!response) throw new authError('User doesn\'t exist in database')
        let user = response.rows[0]
    if(password!==user.password) throw new authError('Incorrect password')
        let token = await jwt.sign({userId:user.id,email},process.env.jwt_secret,{expiresIn:process.env.jwt_lifespan})
    return res.status(StatusCodes.OK).json({success:true,data:{user,token},message:"Login successful"})
}
module.exports = {
    createUser
}