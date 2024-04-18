const { z } = require('zod');

const loginValidateSchema=z.object({

    email: z.string({ required_error: "Invalid email address" })
    .trim()
    .min(10, { message: 'Email must be at least 10 characters long' })
    .max(255, { message: 'Email cannot exceed 255 characters' }), 

    password: z.string({ required_error: "Invalid password" })
    .trim()
    .min(3, { message: 'Password must be at least 3 characters long' })
    .max(255, { message: 'Password cannot exceed 255 characters' }),
})

const signupValidateSchema = z.object({
  username: z.string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(255, { message: 'Name cannot exceed 255 characters' }),

  email: z.string({ required_error: "Invalid email address" })
    .trim()
    .min(10, { message: 'Email must be at least 10 characters long' })
    .max(255, { message: 'Email cannot exceed 255 characters' }),

  phone: z.string({ required_error: "Invalid phone number" })
    .trim()
    .min(10, { message: 'Phone number must be at least 10 characters long' }),

  password: z.string({ required_error: "Invalid password" })
    .trim()
    .min(3, { message: 'Password must be at least 3 characters long' })
    .max(255, { message: 'Password cannot exceed 255 characters' }),
});

module.exports = {signupValidateSchema,loginValidateSchema}
