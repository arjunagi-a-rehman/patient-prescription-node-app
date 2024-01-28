const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
  {
  name:{
    type:String,
    require:[true,'the name must be provided'],
    maxlength:20
  },
  email:{
    type:String,
    required : true,
    unique: true,
    maxlength:20 
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['doctor', 'patient','admin'],
    default: 'patient',
  }
}
);
module.exports=mongoose.model("User",UserSchema);