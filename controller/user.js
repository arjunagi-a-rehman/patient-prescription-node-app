const User=require('../model/User');
const asyncWrapper=require('../middleWare/async');
const {creatCustomError, CustomAPIError}=require('../error/custom_error');

const getAllUsers= asyncWrapper(
  async (req,resp)=>{
    const users=await User.find({})
    resp.status(200).json({users});
  }
)
const createUser=asyncWrapper(
  async (req,resp)=>{
    const user=await User.create(req.body);
    resp.status(201).json({ user });
  }
)
const getUserByEmai=asyncWrapper(
  async (req,res,next)=>{
    const {email:Useremai}=req.params
    const user=await User.findOne({email:Useremai})
    if(user){
      res.status(200).json({ user });
    }
    return next(creatCustomError(`no user found with email ${req.query.email}`,404))
  }
)
const updateUser=asyncWrapper(
  async (req,res,next)=>{
    const {email:Useremai}=req.params;
    const user=await User.findOneAndUpdate({email:Useremai},req.body)
    if(user){
      res.status(200).json({ user });
    }
    return next(creatCustomError(`no user found with email ${req.query.email}`,404))
  }
)
const deleteUser=asyncWrapper(
  async (req,res,next)=>{
    const {email:userEmail}=req.params;
    const user=await User.findOneAndDelete({email:userEmail})
    if(user){
      res.status(200).json({ user });
    }
    return next(creatCustomError(`no user found with email ${req.query.email}`,404))
  }
)
module.exports={
  createUser,
  getAllUsers,
  getUserByEmai,
  updateUser,
  deleteUser
}