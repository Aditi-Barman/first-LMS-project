import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error in Database connection method", error);
    }
}

export default connectDB;