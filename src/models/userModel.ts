import mongoose, {Document, Model, Schema} from "mongoose";
interface IUser extends Document{
  username : string;
  email : string;
  password : string;
  isVarified : boolean;
  isAdmin: boolean;
  forgotPasswordToken?:string;
  forgotPasswordTokenExpiry?: Date;
  verifyToken?:string;
  verifyTokenExpiry?:Date;
}
const userSchema: Schema<IUser> = new mongoose.Schema({
  username:{
    type:String,
    required:[true, "Please provide a user name"],
    unique:true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email address"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVarified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
})
const User:Model<IUser> = mongoose.models.users || mongoose.model<IUser>("users", userSchema)
export default User;
