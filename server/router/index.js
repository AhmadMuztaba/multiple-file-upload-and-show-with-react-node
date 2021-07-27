const express=require('express');
const router=express.Router();
const multer=require('multer');
const fileUp=require('../models/upload')

const upload=multer({})
router.get('/',(req,res)=>{
    res.send('hello');
})

router.get('/photo',async(req,res)=>{
    try{
        const photo=await fileUp.find({});
        res.status(200).send(photo);
    }catch(err){
        res.status(400).send({err:err.message});
    }
})

router.post('/photo',upload.single('avatar'),async(req,res)=>{
    try{
        const ima=req.file.buffer
        const file=new fileUp({
          file:ima
      })
      await file.save();
      res.status(201).send();
    }catch(err){
        res.status(400).send(err.message)
    }
        
})

router.post('/photos',upload.array('photos',12),async(req,res)=>{
    try{
        if(req.files.length>0){
            const file=new fileUp({
                file:req.files.map((pic)=>{
                    return pic.buffer
                })
            })
            await file.save();
        }
    res.status(201).send();
    }catch(err){
        res.status(400).send(err.message);
    }
})

module.exports=router;