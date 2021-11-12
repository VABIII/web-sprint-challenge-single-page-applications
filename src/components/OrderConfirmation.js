import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  
`



export default function OrderConfirmation(props) {
    const { order } = props;

    return(
        <StyledDiv>
            <div className="confirmation-greeting">
                <h1>Your Order</h1>
            </div>
            <div className="order-summary">


                    <p>Name:&nbsp;{order.name}</p>
                    <p>Size:&nbsp;{order.size}</p>

                {
                    !!order.toppings && !!order.toppings.length &&
                    <div>
                        Toppings:
                        <ul>
                            {order.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                        </ul>
                    </div>
                }
                <p>Special Instructions:&nbsp;{order.special}</p>
            </div>
        </StyledDiv>
    )


}










































