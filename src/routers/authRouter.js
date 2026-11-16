const express = require('express')
const router = express.Router()
const {createUser} = require('../controllers/authController')
const hash = require('../middleware/hash')


router.post('/user/create',hash,createUser)

module.exports = router