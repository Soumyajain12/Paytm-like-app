const express = require("express");
const bodyParser=require("body-parser");
const cors=require("cors");


const app=express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const rootRouter= require('./routes/index'); 
app.use("/api/v1",rootRouter);


app.listen(3000);
