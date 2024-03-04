const express = require('express')
const router = express.Router();

router.get('/' , (req , res)=>{
    
    res.clearCookie('token')
    res.status(200).json({success : 'true', message : 'logedout successful'})
})

module.exports = router;