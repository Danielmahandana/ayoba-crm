import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

// login
const userLogin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel({email});
        // check if user exist
        if(!user){
            return res.json({success: false, message:"Invalid Email"})
        }

        // check password
        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({success:false,message:"Incorrect Password"})
        }

        const token = createToken(user._id);
    } catch (error) {
        
    }
}

// create token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// register
const userRegister = async (req, res) => {
    const {name,email,password} = req.body;
    try {
        // check if useer is registered
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success: false, message:"Email Already Exists"});
        }

        // email validator
        if(!validator.isEmail(email)){
            return res.json({success: false, message:"Email Is Invalid"});
        }

        // check password
        if(password.length < 8){
            return res.json({success: false, message:"Please Enter Strong Password"});
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // create a new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashPassword,
        })

        // save user in the database
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error: Failed to create user"});
    }
}

export {userLogin, userRegister}