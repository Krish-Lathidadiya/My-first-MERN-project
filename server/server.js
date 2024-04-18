//dotenv use karva mate
require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Router=require('./router/auth-router');
const connectionDB = require('./utils//db')
const cors =require('cors');

const errorMiddleware=require('./middlewares/error-middleware')

//let's tackle cors
const corsOptions = {
    origin: ['http://127.0.0.1:5174','http://127.0.0.1:5173'],
    methods: 'GET,POST,PUT,DELETE,PATCH,HEAD',
    credentials: true,
}
app.use(cors(corsOptions));
  
// app.use(bodyParser.json());
//ane router ni(badhay ni) pela define karvu
app.use(express.json());
app.use(Router)

app.use(errorMiddleware)
const port =  5000; 
connectionDB().then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})


