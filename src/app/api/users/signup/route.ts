import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
Connect()
export async function POST(request:NextRequest) {
    try{
        console.log(request.body)
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        // check if user already exists
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }
        const salt = await bcryptjs.genSalt(10)
        const hasedPassword = await bcryptjs.hash(password, salt)
        const newUser = new User({
            username, 
            email,
            password:hasedPassword
        })
        const savedUser = await newUser.save()
        console.log(savedUser)
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
    }catch(error:any){
        return NextResponse.json({error: error.message}, {status: 500})
    }
}


