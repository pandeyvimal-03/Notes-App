const express = require('express')
const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
    const key = "vimal"
      const token = req.cookies.token;
    //  const token = req.header('auth-token')
    console.log(token)

    if (!token) {
       return res.status(400).json({ success: false, message: " user not hai authenticated" })
    }

    try {

        const user = jwt.verify(token, key)
        req.user = user;
        next();

    } catch (error) {
        return res.status(400).json({ success: false, message: "user not hota authenthicated" })
    }

}

module.exports = authenticate;