import express from "express";
import dotenv from "dotenv"
import insertData from "./Controllers/productController.js";



const PORT = 8000;

const app = express()

app.listen(PORT, ()=> console.log(`server listening on PORT: ${PORT}`))

insertData( )