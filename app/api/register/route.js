import { NextResponse } from "next/server";
import DBconnect from "@/utils/DBconnect";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export default async function register(req, res) {
    const _req = await req.json();

    await DBconnect();

    const { name, email, password } = _req;

    try {
        
        const existsUser = await User.findOne({ email });

        if (existsUser) {
            return NextResponse.json({
                err: "User already exists",
            }, {
                status: 409,
            })
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return NextResponse.json({
            success: "User registered successfully",
        },{ status: 201 });



    } catch (error) {
        console.log(error)
        return NextResponse.json({
            err: "Server error",
        }, {
            status: 500,
        });
    }
}