import { NavLink } from "react-router-dom"
import React from "react"
import Product from "./Product"

export default function HomePage(){
const [products, setProducts ] = React.useState([])

    React.useEffect(()=>{
        async function fetchProducts() {
            try{
                const res = await fetch('/api/products')
                if(!res.ok){
                    throw new Error(`request failed with status ${res.status}`)
                }
                const products = await res.json()
                setProducts(products)
            }catch(err){
                console.error('Error fetching products: ', err)
            }

        }
        fetchProducts()
    }, [])


    const productElements = products.map(product => {
        return <Product>{product}</Product>
    })
    return( 
        <main>
            <section>
                <h3>Filter by category</h3>
                <div>
                    {/* <NavLink to={} className={({isActive})=>{isActive? "active" : null}}> all items</NavLink> */}
                    {/* <NavLink to={} className={({isActive})=>{isActive? "active" : null}}> outwear</NavLink> */}
                    {/* <NavLink to={} className={({isActive})=>{isActive? "active" : null}}> footwear</NavLink> */}
                    {/* <NavLink to={} className={({isActive})=>{isActive? "active" : null}}> accessories</NavLink> */}
                </div>
                <div>
                    <h3>sort by</h3>
                    <select name="" id="">
                        <option value="">price: high to low</option>
                        <option value=""> price: low to high</option>
                    </select>
                </div>
            </section>
            <section>
                {productElements}
            </section>
        </main>
    )
}