import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        mongoose.connection.on('connected', () => console.log("Database connected successfully!"));
        await mongoose.connect(`${process.env.MONGODB_URI}`);
    } catch (error) {
        console.log("Failed to connect database");
        throw new Error("Error connecting database:", error);
    }
}