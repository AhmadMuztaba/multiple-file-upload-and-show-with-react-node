const mongoose=require('mongoose');
require('dotenv').config();
const connect=async()=>{
    try{
        const con=await mongoose.connect(process.env.mongo,{ useUnifiedTopology: true,useNewUrlParser: true  } );
        if(con){
            console.log('database connected');
        }
    }catch(err){
        console.log('database connection failed')
    }
}
module.exports=connect;