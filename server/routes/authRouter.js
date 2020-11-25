const express = require('express')
const router = express.Router()
const {signup} = require('../controllers/authController')

// Validatos
const {runValidation} = require('./../validators')
const {userSignupValidator} = require('./../validators/authValidator')

router.post('/signup', userSignupValidator, runValidation, signup)

module.exports = router