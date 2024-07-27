import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

// login
const userLogin = async (req, res) => {

}

// register
const userRegister = async (req, res) => {
    const {name,email,password} = req.body;
    try {
        // check if useer is registered
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success: false, message:"Email already exists"});
        }

        // email validator
        if(!validator.isEmail(email)){
            return res.json({success: false, message:"Email is invalid"});
        }

        // check password
        if(password.length < 8){
            return res.json({success: false, message:"Please enter strong password"});
        }
    } catch (error) {
        
    }
}

export {userLogin, userRegister}