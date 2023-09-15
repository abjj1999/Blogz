import mongoose from "mongoose";

const DBconnect = async () => {
    if (mongoose.connections.readyState >= 1) return;

    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}