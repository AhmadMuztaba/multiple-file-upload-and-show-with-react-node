const mongoose=require('mongoose');

const fileSchema=new mongoose.Schema({
     file:[{
         type:Buffer
     }]
})
const fileUp=new mongoose.model('fileUp',fileSchema);
module.exports=fileUp;