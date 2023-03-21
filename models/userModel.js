import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from "validator";

const userSchema = new mongoose.Schema ({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});


//static signup method

userSchema.statics.signup = async function( email, password ) {
    

// validation for email and password
 if(!email || ! password){
   throw Error("All field must be filled")
 }

 if(!validator.isEmail(email)){
    throw Error("Email is not valid")
 }
 if(!validator.isStrongPassword(password)){
    throw Error("Password is not strong Enough")
 }
 const exists = await this.findOne({ email })
    if(exists){
        throw Error('Email already in Use');
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password : hash })
    return user
}
// static login method
userSchema.statics.login = async function(email, password){
 // validation for email and password
 if(!email || ! password){
    throw Error("All field must be filled")
  }
  const user = await this.findOne({email})

  if(!user){
    throw Error("Incorrect Email")
  }
  const match = await bcrypt.compare(password, user.password)
  if(!match){
    throw Error("Incorrect Password")
  }
  return user

}
const userModel = mongoose.model('user', userSchema);
export default userModel;