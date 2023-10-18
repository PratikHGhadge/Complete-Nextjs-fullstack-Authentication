import mongoose, { mongo } from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a user name"],
    unique: true,
  },
  email: {
    type: string,
    required: [true, "Please provide a email address"],
  },
  password: {
    type: string,
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
  forgotPasswordToken,
  forgotPasswordTokenExpiry,
  verifyToken: String,
  verifyTokenExpiry: Date,
});
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
