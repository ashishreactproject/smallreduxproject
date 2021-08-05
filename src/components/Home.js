import React from 'react'
import Apple from '../Images/apple.jpg'
import Cart from '../Images/cart.jpg'
function Home(props) {
    console.warn("Remove", props)
    return (
        <div>
            <h2>E - Commerce using Redux</h2>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={Apple} alt="apple" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() => props.addToCartHandler({ price: 1000, name: 'I-phone 12' })}>
                        Add To Cart</button>
                    <button className="remove-cart-btn"
                        onClick={() => props.removeToCartHandler({ price: 1000, name: 'I-phone 12' })}>
                        Remove To Cart</button>
                </div>


            </div>

        </div>
    )
}

export default Home;