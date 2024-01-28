const express = require('express')
const conn=require('./db/connect')
const app = express()
const port = 3000
const errorHandlerMiddleware =require('./middleWare/error-handler');
const user=require('./route/user');
app.use(express.json());
app.use('/api/v1/user',user);
app.use(errorHandlerMiddleware);
const start= async function(){
  try {
    await conn('mongodb://localhost:27017');
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  } catch (error) {
    console.log(error);
  }
}

start(); 
