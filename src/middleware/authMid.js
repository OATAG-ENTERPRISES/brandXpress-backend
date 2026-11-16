const jwt = require('jsonwebtoken')
const {authError} = require('../errors')
const authMid = async(req,res,next)=>{
    const authHeader = req.body.Authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')) throw new authError('Invalid token')
        const token = authHeader.split(' ')[1]
    
}