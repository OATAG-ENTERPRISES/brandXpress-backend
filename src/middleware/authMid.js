const jwt = require('jsonwebtoken')
const {authError} = require('../errors')
const {pool}  = require('../config/connectDB')
const authMid = async(req,res,next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')) throw new authError('Invalid token')
        const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token,process.env.jwt_secret)
      const response = await pool.query('select * from users where email = $1',[payload.email])
      if(!user)throw new authError('User doesn\'t exist')
      const user = response.rows[0]
      req.user = {
        name: user.name,
        email:user.email,
      }
      
        next()
    } catch (error) {
        if(error instanceof(authError)) throw new authError('User doesn\'t exist')
        throw new authError('Invalid token')
    }
  
}
module.exports  = authMid