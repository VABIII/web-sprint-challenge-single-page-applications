import React, {useEffect, useState} from "react";
import OrderForm from "./OrderForm";
import OrderConfirmation from "./OrderConfirmation";
import axios from "axios";

const initialFormValues = {
    name: "",
    size: "",
    pepperoni: false,
    sausage: false,
    bacon: false,
    chicken: false,
    special: ""
}

export default function Orders() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [order, setOrder] = useState({});
    const values = formValues;

    const placeOrder =newOrder => {
        axios.post(`https://reqres.in/api/orders`)
            .then(res => {
                setOrder(newOrder);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setFormValues(initialFormValues);
                setIsSubmitted(true);
            })
    }


    const onSubmit = evt => {
        evt.preventDefault();
        const newOrder = {
            name: values.name,
            size: values.size,
            toppings: ["pepperoni", "sausage", "bacon", "chicken"].filter(hobby => !!formValues[hobby]),
            special: values.special
        }
        placeOrder(newOrder);
    }

    return(
        <div>
            {
                !isSubmitted ?
                    <OrderForm
                        onSubmit={onSubmit}
                        values={values}
                        setFormValues={setFormValues}
                        order={order}
                    />
                    : <OrderConfirmation values={values} order={order}/>
            }
        </div>
    )
}










































