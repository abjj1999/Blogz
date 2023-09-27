import DBconnect from "@/utils/DBconnect";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcrypt"

export async function POST(req) {
    const _req = await req.json();

    await DBconnect();

    try {
        const { email, password } = _req;
        const existingUser = await User.findOne({ email });

        if(!existingUser) {
            return NextResponse.json({
                err: "User with that email does not exist"
            }, { status: 404 })
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) {
            return NextResponse.json({
                err: "Invalid credentials"
            }, { status: 401 })
        }

        return NextResponse.json({
            success: "Logged in successfully"
        }, { status: 200 })

    } catch (error) {
        
    }
}