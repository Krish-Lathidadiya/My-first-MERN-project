const {Schema , model}=require('mongoose')

const conatctSchema = new Schema({
    username:{ type:String, required:true},
    email:{ type:String, required:true},
    message:{ type:String, required:true}
})

const Contact=new model('Contact',conatctSchema)
module.exports =Contact