const express=require('express');
const app=express();
const cors=require('cors');
const connect=require('./db/mongoose');
connect();
const image=require('./router/index')
app.use(cors());
app.use(image);
app.listen(3000,()=>{
    console.log('port connected to 3000');
})