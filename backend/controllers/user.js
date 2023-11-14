const express = require('express')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const myUser = require('../database/models/myUsers')


const hash = async (req) => {


    console.log(req.body.password)
    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    const newPassword = await bcrypt.hash(req.body.password, salt)
    return newPassword;

}

const createToken = async (user) => {

    const key = "vimal"
    data = {
        id: user.id,
        email: user.email
    }

    const token = jwt.sign(data, key)
    return token;

}



const registerUser = async (req, res) => {


    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try {

        const user = await myUser.findOne({ email: email });
        if (user) {
            res.status(400).json({ success: false, message: "user with similar email already exist" })
        }
        else {
            const hashPassword = await hash(req);
            newuser = await myUser.create({ Username: name, email: email, password: hashPassword })

            const token = await createToken(newuser)

           return  res.cookie("token", token , {sameSite: 'None', secure: true,httpOnly: true,}).json({ success: true, message: "user logedin successfully" })
           

        }
    } catch (error) {

        console.log(error)
    }

}

const checkUser = async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    try {

        const user = await myUser.findOne({ email: email })

        if (!user) {
            res.status(400).json({ success: false, message: "user not found" })
        }
        else {

            const passwordMatch = bcrypt.compare(password, user.password)
            if (!passwordMatch) {
                res.status(400).json({ success: false, message: "user not found" })
            }
            else {
                const token = await createToken(user)
                res.cookie("token", token, {sameSite: 'None', secure: true,httpOnly: true,} ).json({ success: true, message: "logedin successfully" })
            }
        }

    } catch (error) {
        console.log(error)

    }

}

module.exports = { registerUser, checkUser }

