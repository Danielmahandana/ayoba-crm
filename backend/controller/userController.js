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
    } catch (error) {
        
    }
}

export {userLogin, userRegister}