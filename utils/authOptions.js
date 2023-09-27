import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcrypt";
import DBconnect from "./DBconnect";

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                await DBconnect();

                const { email, password } = credentials;

                const existingUser = await User.findOne({ email });

                if(!existingUser) {
                    throw new Error("User with that email does not exist");
                }

                

                const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

                if(!isPasswordCorrect) {
                    throw new Error("Invalid credentials");
                }

                return existingUser;
            }
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET,
    pages:{
        signIn: "/login"
    }
}
