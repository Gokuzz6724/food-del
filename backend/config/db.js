import mongoose from "mongoose";

 export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://gokuldb:dbgokul@cluster0.tv7ye.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}