const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

//schema ma s capital
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

})




// UserSchema.pre() is a method used to define middleware functions 
//that execute before certain operations are performed on documents (instances of the schema).
// before events like save, update, validate, and remove occur on a document.

UserSchema.pre('save', async function(next) {
    try {
        const user = this;
        if (!user.isModified('password')) {
            return next(); // Move to the next middleware or the save operation
        }

        // Generate salt with 10 rounds
        const saltRound = 10; // Specify the number of rounds as a numeric value
        const salt = await bcrypt.genSalt(saltRound);

        // Hash the password using the generated salt
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;

        next(); // Move to the next middleware or the save operation
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
});



//generate token
UserSchema.methods.generateToken = async function() {
    try {
        return await jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d"
        });
    } catch (error) {
        console.error("Error generating token:", error);
        throw new Error("Token generation failed");
    }
};


//mode no m small
const User =new mongoose.model('user',UserSchema)
module.exports = User 