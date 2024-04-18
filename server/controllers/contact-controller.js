const Contact=require('../models/contact-model')

const contatcForm= async (req,res,next)=>{
    try {
        const response=req.body
        await Contact.create(response)
        return res.status(200).json({msg:"conatct successfully send"})
    } catch (error) {
        const status=400
        const msg=error.message

        const err={status:status, msg:msg};
        next(err);
    }
}

module.exports=contatcForm