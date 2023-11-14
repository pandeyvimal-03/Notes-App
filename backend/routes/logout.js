const express = require('express')
const router = express.Router();

router.get('/' , (req , res)=>{
    console.log('now we are in logout section')
    res.clearCookie('token')
    res.status(200).json({success : 'true', message : 'logedout successful'})
})

module.exports = router;