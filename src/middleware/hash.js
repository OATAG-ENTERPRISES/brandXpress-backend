const bcrypt = require('bcryptjs')
const {badRequest} = require('../errors')
const hashPassword = async(req,res,next)=>{
    let {password} = req.body
    if(!password) throw new badRequest('Password value expected but not provided')
        let salt = await bcrypt.genSalt(10)
    req.body.password = await bcrypt.hash(password,salt)
    
    next()
}
module.exports = hashPassword