const {z} =require('zod')

const conatctValidateSchema = z.object({
    username: z
    .string({ required_error: "name is required"})
    .trim()
    .min(3,{msg:'name at least 3 characters required'})
    .max(255,{msg:'name max characters 255 '}),

    email:z
    .string({ required_error: "Invalid email address"})
    .trim()
    .min(10,{msg:'name at least 10 characters required'})
    .max(255,{msg:'name max characters 255 '}),

    message:z
    .string({ required_error: "Invalid message"})
    .trim()
    .max(255,{msg:"name max characters 255"})

    
});

module.exports =conatctValidateSchema