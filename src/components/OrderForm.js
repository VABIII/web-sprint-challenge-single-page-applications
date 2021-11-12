import React, {useState} from "react";
import "./OrderForm.css"

export default function OrderForm(props) {
    const {onSubmit, values, setFormValues, order} = props;
    const [disabled, setDisabled] = useState(true);

    const inputChange = (name, value) => {
        setFormValues({
            ...values,
            [name]: value
        });
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const realValue = type === "checkbox" ? checked: value;
        inputChange(name, realValue);
    }

    const onClick = evt => {
        console.log(order)
    }

    return(
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className="form-greeting">
                <h2>Order A Pizza</h2>
            </div>
            <div className="order-form div">
                <div className="form-errors">

                </div>
                <div className="order-form inputs">
                    <label>Name:&nbsp;
                        <input
                            id="name-input"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                    <label>Size:&nbsp;
                        <select
                            name="size"
                            id="size-dropdown"
                            value={values.size}
                            onChange={onChange}
                        >
                            <option value="">--Please Pick A Size--</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="X-Large">X-Large</option>
                        </select>
                    </label>
                    <div className="toppings">
                        <h4>Toppings</h4>
                        <label>Pepperoni:&nbsp;
                            <input
                                className="topping"
                                type="checkbox"
                                name="pepperoni"
                                value={values.pepperoni}
                                onChange={onChange}
                            />
                        </label>
                        <label>Sausage:&nbsp;
                            <input
                                className="topping"
                                type="checkbox"
                                name="sausage"
                                value={values.sausage}
                                onChange={onChange}
                            />
                        </label>
                        <label>Bacon:&nbsp;
                            <input
                                className="topping"
                                type="checkbox"
                                name="bacon"
                                value={values.bacon}
                                onChange={onChange}
                            />
                        </label>
                        <label>Chicken:&nbsp;
                            <input
                                className="topping"
                                type="checkbox"
                                name="chicken"
                                value={values.chicken}
                                onChange={onChange}
                            />
                        </label>
                        <label>Special Instructions:&nbsp;
                            <input
                                id="special-text"
                                type="text"
                                name= "special"
                                value={values.special}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                <button id="order-button" onClick={onClick}>Submit</button>
                </div>
            </div>
        </form>
    )
}













































