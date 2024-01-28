const express=require('express');
const router=express.Router();
const {
  getAllUsers,
  createUser,
  getUserByEmai,
  updateUser,
  deleteUser
}=require('../controller/user');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:email').get(getUserByEmai).put(updateUser).delete(deleteUser);
module.exports=router;