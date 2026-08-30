import {Link, NavLink} from "react-router-dom"
import About from "./About"
import Cart from "./Cart"

export default function Header(){
    return(
        <header>
            <h1>threadline...</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive})=>{isActive ? "active" : null}}>shop</NavLink>
                        <NavLink to="/about" className={({isActive})=>{isActive ? "active" : null}}>about</NavLink>
                    </li>
                </ul> 
                 <ul>
                    <li>
                        <Link to="/">shop</Link>
                        <Link to="/cart">cart</Link>
                        <button>log in</button>
                    </li>
                </ul>       
            </nav>
        </header>
    )
}