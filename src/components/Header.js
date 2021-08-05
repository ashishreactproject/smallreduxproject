import React from 'react'
import Apple from '../Images/apple.jpg'
import Cart from '../Images/cart.jpg'
function Header(props) {
    console.warn("Home", props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-counter">{props.data.length}</span>
                <img src={Cart} alt="cart" />
            </div>
        </div>
    )
}

export default Header;