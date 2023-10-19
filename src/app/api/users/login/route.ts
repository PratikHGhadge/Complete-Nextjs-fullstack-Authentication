import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";
Connect()
export async function POST(request:NextRequest) {
    try{
        console.log(request.body)
        const reqBody = await request.json()
        const {password, email} = reqBody
        // check if user already exists
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({
                message: "User does not exist please enter valid email and password",
                success: true,
                user
            }, {status:400})
            
        }
        //check if password is correct or not 
        const validPass = await bcryptjs.compare(password, user.password)
        if(!validPass){
            return NextResponse.json({
                message: "please enter valid password",
                success: true,
                user
            }, {status:400})
        }
        // create token data     
        const tokenData = {
            id:user._id,
            username: user.username,
            email: user.email
        }
        // create token 
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!,  {expiresIn:"1h"})
        const response = NextResponse.json({
            message: "User logged in successfully",
            success: true,
            user
        })
        response.cookies.set("token",token, {
            httpOnly:true,
        })
        return response;
    }catch(error:any){
        return NextResponse.json({error: error.message}, {status: 500})
    }
}


