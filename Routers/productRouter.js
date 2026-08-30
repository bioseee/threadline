import express from "express"
import { productController } from "../Controllers/productController"

export const productRouter = express.Router()

productRouter.get('/products', productController)