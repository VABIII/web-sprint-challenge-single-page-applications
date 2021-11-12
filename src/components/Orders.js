import React, {useEffect, useState} from "react";
import OrderForm from "./OrderForm";
import OrderConfirmation from "./OrderConfirmation";


export default function Orders() {
    const [isSubmitted, setIsSubmitted] = useState(false);


    return(
        <div>
            {
                !isSubmitted ? <OrderForm/>
                    : <OrderConfirmation/>
            }
        </div>
    )
}











































