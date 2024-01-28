const asyncWrapper = (fn)=>{
  return async (req,resp,next)=>{
    try {
      await fn(req,resp,next);
    } catch (error) {
      next(error)
    }
  }
};
module.exports=asyncWrapper;