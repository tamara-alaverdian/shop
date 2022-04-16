import React from "react";

function Drawer({onClose, onRemove, onOrder, items = [], totalPrice}) {
    return (
        <div className="overlay">

            <div className="drawer">
                <h2 className="cart1">Cart
                    <img onClick={onClose} className="removeBtn" src="/img/btn.webp" alt="btn"/>
                </h2>
                <div className="items">
                    {items.map((obj) =>
                        <div className="cartItem">
                            <img src={obj.imageUrl} style={{width: 50, height: 50}}/>
                            <div>
                                <p>{obj.title}</p>
                                <b>{obj.price} $</b>
                            </div>
                            <img onClick={() => onRemove(obj)} className="removeBtn" src="/img/btn.webp" alt="Remove"/>
                        </div>
                    )}
                </div>
                <div className="items">
                    <div className="cartTotalBlock">
                        <ul>
                            <li className="total">
                                <span>Total: </span>

                                <b>${totalPrice}</b>
                            </li>
                        </ul>
                        <button onClick={onOrder}>Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer