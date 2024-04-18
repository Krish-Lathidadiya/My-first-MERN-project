const mongoose=require('mongoose');
// const {schema,model}=require('mongoose');

//schema ma s capital
const ServiceSchema=new mongoose.Schema({
    service:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    }

})

const Service=new mongoose.model('Service',ServiceSchema)

module.exports=Service


