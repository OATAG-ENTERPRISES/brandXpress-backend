const {Pool} = require('pg')
const pool = new Pool({connectionString:process.env.connectString})


module.exports = {pool}