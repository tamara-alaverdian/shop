import React from "react";

function Header({onClickCart, totalPrice}) {
    return (
        <header>
            <div className="headerLeft">
                <img width={100} height={100} src="/img/logo.png.webp"/>
                <div className="headerInfo">
                    <h3> GUITARS</h3>
                    <p> Guitars music</p>
                </div>
            </div>
            <ul className="headerRight">
                <li onClick={() => onClickCart()} className="cart">
                    <img width={25} height={25} src="/img/cart.png"/>
                    <span>${totalPrice}</span>
                </li>
                <li>
                    <img width={25} height={25} src="/img/user.png"/>
                </li>
            </ul>
        </header>)
}

export default Header