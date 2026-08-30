import supabase from "../supabase-client.js";
import getProducts from "../getProducts.js";

export default async function insertData(){
        console.log("insertData started");

    const products = await getProducts()
    console.log("Products received:", products.length);
    console.log(products)

    const {data, error} = await supabase
        .from("products")
        .insert(
            products.map(product => ({
                title: product.title, 
                price: product.price,
                description: product.description,
                category: product.category,
                image: product.image
            }))
        )
        .select();
        if(error){
            console.error(error)
            return
        }
            console.log("DATA:", data);
            console.log("ERROR:", error);

        console.log(data)
    
}

async function productController(req, res){
    try{
        const { data, error } = await supabase
            .from('products')
            .select()
        if(error){
            console.error(error)
            throw new Error('Error getting products from database')
        }
        res.json(data)
    }catch(err){
        console.error('Internal server error: ', err)
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

export {productController}