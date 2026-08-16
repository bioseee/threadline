export default async function getProducts(){
    try{
        const response = await fetch("https://fakestoreapi.com/products")
        if(!response.ok){
            throw new Error("error fetching products")
        }
        const products = await response.json()
        return products
    }catch(err){
        console.error(err)
        throw err
    }
    
}