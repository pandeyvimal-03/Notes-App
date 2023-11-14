const express = require('express')
const router = express.Router();
const {check , validationResult} = require('express-validator');

const user = require('../controllers/user')

const validate = [
    check('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
    check('password').notEmpty().withMessage('Password is required').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
]
router.post('/',validate ,(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({success : false , message: "enter valid credentials",error : errors} )
    }

   user.checkUser(req , res);

})

module.exports = router;