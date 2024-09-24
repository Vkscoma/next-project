import mongoose from "mongoose";

let connected: boolean = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if (connected) {
        console.log("Already connected to DB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        connected = true;
    } catch (error) {
        console.error(error);
    }
};

export default connectDB;