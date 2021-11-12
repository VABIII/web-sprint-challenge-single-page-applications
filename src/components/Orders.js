import React, {useEffect, useState} from "react";
import OrderForm from "./OrderForm";
import OrderConfirmation from "./OrderConfirmation";

const initialFormValues = {
    name: "",
    size: "",
    pepperoni: false,
    sausage: false,
    bacon: false,
    chicken: false
}


export default function Orders() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formValues, setFormValues] = useState(initialFormValues);



    return(
        <div>
            {
                !isSubmitted ? <OrderForm/>
                    : <OrderConfirmation/>
            }
        </div>
    )
}











































