import mongoose from "mongoose";

const DBconnect = async () => {
    if (mongoose.connections.readyState >= 1) return;

    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

export default DBconnect;