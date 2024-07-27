import mongoose from "mongoose";

export const connDB = async () => {
    await mongoose.connect('mongodb+srv://thusondou30:ayobaApp@cluster0.pbofsvj.mongodb.net/ayoba-crm').then(() => console.log("DB Connected"));
}