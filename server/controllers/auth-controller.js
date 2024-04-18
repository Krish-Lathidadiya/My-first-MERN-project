//main logic
const express = require('express');
const User=require('../models/user-model');
const bcrypt=require('bcryptjs')
 
const home= async(req,res)=>{
    res
    .status(200)
    .send('home page')
}
const register=async (req,res)=>{
    try {
        console.log(req.body);
        const {username,email,phone,password,isAdmin}=req.body;
       

        if (!username || !email || !phone || !password) {
            return res.status(400).json({ error: "Required fields are missing in the request body." });
        }
      
        //user exists or not
        const userExist= await User.findOne({email:email})
        if(userExist){
            res.status(400).json({message:"user already exists"})
            next();
        }else{
            const userCreated=await User.create( {username,email,phone,password,isAdmin})

            //if user successfully created when token send
            res .status(201).json({
                msg:"regitration successful",
                token:await userCreated.generateToken(),
                userId:userCreated._id.toString()
            })
        }
       

        //hash the password
        // const saltRound=10;
        // const hash_password=await bcrypt.hash(password, saltRound)
        // password=hash_password;

       

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const userExist = await User.findOne({ email: email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, userExist.password);
        if (isPasswordValid) {
            return res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });
        } else {
            return res.status(404).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error in login:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


//use logic - to send user data
const user=async (req, res) => {
    try {
        const userData=req.user;
        console.log(userData);
        return res.status(200).json({userData});
        
    } catch (error) {
        console.log("Internal server error:", error);
    }

}

module.exports={home,register,login,user}
