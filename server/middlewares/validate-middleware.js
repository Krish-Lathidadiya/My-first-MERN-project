const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody; 
        next(); // Move to the next middleware or route handler
    } catch (error) {
       
        const status = error.status; 
        const message = "Fill properly";
        let extraDetails = "Unknown error"; 

        
        if (error.errors && error.errors.length > 0) {
            extraDetails = error.errors[0].message; // Get the specific validation error message
        }
        
        // Create an error object to pass to the error handler middleware
        const err = { status, message, extraDetails };
        
        next(err); // Pass the error to the error handler middleware
        
        // const msg = error.errors[0].message;
        // res.status(400).json({ msg: msg });
    }
};  



const contactValidate=(schema)=>async (req,res,next) =>{
    try {
        const parseBody=await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        const status=error.status
        const message="fill properly"
        const extraDetails=error.errors[0].message

        const err={status, message, extraDetails}

        next(err)
    }
}

module.exports ={validate,contactValidate}

