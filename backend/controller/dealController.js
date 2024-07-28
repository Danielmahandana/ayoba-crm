import userModel from '../models/dealModel.js';

// add deal
const addDeal = async (req, res) => {
    const {title,value,customer,lead} = req.body;
    try {
        // create a new user
        const newDeal = new dealModel({
            title: title,
            value: value,
            customer: customer,
            lead: lead
        })

        // save user in the database
        const deal = await newDeal.save();
        const token = createToken(deal._id);
        res.json({success:true,token});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error: Failed to add deal"});
    }
}

export {addDeal}