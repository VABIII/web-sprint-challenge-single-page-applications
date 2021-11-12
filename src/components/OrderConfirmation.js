import React from "react";


export default function OrderConfirmation(props) {
    const { order, values } = props;
        console.log(order)
    return(
        <div>
            <div className="confirmation-greeting">
                <h1>Your Order</h1>
            </div>
            <div className="order-summary">
                <h3>{order.name}</h3>
                <p>{order.size}</p>
                <p>{order.special}</p>
                {
                    !!order.toppings && !!order.toppings.length &&
                    <div>
                        Toppings:
                        <ul>
                            {order.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )


}










































