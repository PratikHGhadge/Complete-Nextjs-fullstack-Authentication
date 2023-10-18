import mongoose from "mongoose";
export async function Connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection
        connection.on('connected', ()=>{
            console.log("mongodb connected successfully!")
        })
        connection.on('error', (err)=>{
            console.log("mongodb connection error please make sure that mongodb is running " + err);
            process.exit()
        })
    }catch(error){
        console.log("Error in db config file")
        console.log(error)
    }
}