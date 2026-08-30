import express from "express";
import dotenv from "dotenv"
import { productRouter } from "./Routers/productRouter";



const PORT = 8000;

const app = express()

app.use(express.json())

app.use('/api', productRouter)

app.listen(PORT, ()=> console.log(`server listening on PORT: ${PORT}`))

