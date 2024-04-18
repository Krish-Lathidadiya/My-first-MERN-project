//server.js ne clean banava
const express = require('express');
const Router = express.Router()

const authMiddleware=require('../middlewares/auth-middleware');
const {home,register,login,user}=require('../controllers/auth-controller');
// const authcontrollers=require('../controllers/auth-controller');

const contatcForm=require('../controllers/contact-controller')
const services=require('../controllers/service-contoller')

//validation 
const  {signupValidateSchema}=require('../validators/auth-validator')
const {loginValidateSchema}=require('../validators/auth-validator')
const {conatctValidateSchema}=require('../validators/contact-validator')

//main validateSchema passed to validation
const {validate}=require('../middlewares/validate-middleware')
const {contactValidate}=require('../middlewares/validate-middleware')

Router.get('/',(home))
Router.post('/register',validate(signupValidateSchema),(register))
Router.post('/login',validate(loginValidateSchema),(login))

Router.post('/contact',contactValidate(conatctValidateSchema),(contatcForm))
Router.get('/user',authMiddleware,(user))
Router.get('/service',(services))

module.exports =Router;