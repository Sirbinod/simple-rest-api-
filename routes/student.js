const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.post('/student', async(req, res) =>{
    try{
      const user = new Student(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser);
    }catch(err){res.status(400).send(err);}
    
  });
  router.get('/student', async(req,res) =>{
    try{
      const studentData = await Student.find();
      res.status(200).send(studentData);
    }catch(err){res.status(404).send(err)}
  });
  router.get('/student/:id', async(req,res) =>{
    try{
      const _id = req.params.id;
      const stuData = await Student.findById(_id);
      console.log(stuData);
      if (!stuData){
        return res.status(404).send();
      }else{
        res.send(stuData);
      }
    }catch(err){res.status(500).send(err)}
  });

  router.put('/student/:id', async(req,res) =>{
    try{
      const _id = req.params.id;
      const stuUpdate = await Student.findByIdAndUpdate(_id, req.body,{
        new:true
      });
      res.status(200).send(stuUpdate);
    }catch(err){
      res.status(404).send(err);
    }
  });

  router.delete('/student/:id', async(req,res) =>{
    try{
      const stuDelete = await Student.findByIdAndDelete(req.params.id);
      if(!req.params.id){
       return res.status(404).send();
     }
      res.send(stuDelete);

    }catch(err){
      res.status(500).send(err);
    }
    
  })



module.exports = router;