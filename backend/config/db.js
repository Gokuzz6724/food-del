import mongoose from "mongoose";

 export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://gokuldb:gokuldb@cluster0.tv7ye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
}