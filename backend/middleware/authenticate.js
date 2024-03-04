const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()



const authenticate = async (req, res, next) => {
    
      const key = process.env.KEY
      const token = req.cookies.token;
    
    

    if (!token) {
       return res.status(400).json({ success: false, message: " Login to use v-notes" })
    }

    try {

        const user = jwt.verify(token, key)
        req.user = user;
        next();

    } catch (error) {
        return res.status(400).json({ success: false, message: "Login to use v-notes" })
    }

}

module.exports = authenticate;