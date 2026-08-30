import { NavLink } from "react-router-dom"

export default function HomePage(){
    const products = "HELLO THERE"
    return(
        <main>
            <section>
                <h3>Filter by category</h3>
                <div>
                    <NavLink to={} className={({isActive})=>{isActive? "active" : null}}> all items</NavLink>
                    <NavLink to={} className={({isActive})=>{isActive? "active" : null}}> outwear</NavLink>
                    <NavLink to={} className={({isActive})=>{isActive? "active" : null}}> footwear</NavLink>
                    <NavLink to={} className={({isActive})=>{isActive? "active" : null}}> accessories</NavLink>
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
                {products}
            </section>
        </main>
    )
}