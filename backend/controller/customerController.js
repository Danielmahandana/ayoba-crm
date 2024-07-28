import userModel from '../models/customerModel.js';
import jwt from 'jsonwebtoken';
import validator from 'validator';

// create token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// register
const customerRegister = async (req, res) => {
    const {name,email,phone} = req.body;
    try {
        // check if useer is registered
        const exists = await customerModel.findOne({email});
        if(exists){
            return res.json({success: false, message:"Email Already Exists"});
        }

        // email validator
        if(!validator.isEmail(email)){
            return res.json({success: false, message:"Email Is Invalid"});
        }

        // create a new user
        const newCustomer = new customerModel({
            name: name,
            email: email,
            phone: phone,
        })

        // save user in the database
        const customer = await newCustomer.save();
        const token = createToken(customer._id);
        res.json({success:true,token});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error: Failed to create user"});
    }
}

export {customerRegister}