import React,{useContext, useRef, useState} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import drop_down_menu from '../assets/dropdown_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../contexts/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  const menuRef=useRef();

  const dropdown_toggle=(e)=>{
   menuRef.current.classList.toggle('nav-menu-visible');
   e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
        <div className="nav-logo">
          <Link style={{display:"flex",gap:"10px",alignItems:"center",textDecoration:"none"}} to={'/'}>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
          </Link>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={drop_down_menu} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:"none",   color: "#626262"}}  to="/">Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>setMenu("mens")}><Link style={{textDecoration:"none",   color: "#626262"}}  to="/mens">Mens</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("womens")}><Link  style={{textDecoration:"none",   color: "#626262"}} to="/womens">Womens</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:"none",   color: "#626262"}}  to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"> <button>Login</button></Link>
           <Link to="/cart"> <img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar