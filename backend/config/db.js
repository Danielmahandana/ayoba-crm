import mongoose from "mongoose";

export const connDB = async () => {
    await mongoose.connect('mongodb+srv://thusondou30:ayobaApp@cluster0.abdudy5.mongodb.net/ayoba-crm').then(() => console.log("DB Connected"));
}