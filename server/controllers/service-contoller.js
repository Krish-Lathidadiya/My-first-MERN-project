const Service =require('../models/service-model');

const services= async (req,res)=>{
    const response=await Service.find();
    console.log(response);
    res.status(200).json({response})
}

module.exports=services;