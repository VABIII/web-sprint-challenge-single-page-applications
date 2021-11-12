import React from "react";
import "./OrderForm.css"

export default function OrderForm(props) {
    const {onSubmit, values, setFormValues} = props;

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
                        <select name="size" id="size-dropdown">
                            <option value="">--Please Pick A Size--</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="X-Large">X-Large</option>
                        </select>
                    </label>
                    <h4>Toppings</h4>
                    <label>Pepperoni:&nbsp;
                        <input
                            type="checkbox"
                            name="pepperoni"
                        />
                    </label>
                    <label>Sausage:&nbsp;
                        <input
                            type="checkbox"

                        />
                    </label>
                    <label>Bacon:&nbsp;
                        <input
                            type="checkbox"

                        />
                    </label>
                    <label>Chicken:&nbsp;
                        <input
                            type="checkbox"

                        />
                    </label>
                    <label>Special Instructions:&nbsp;
                        <input
                            type="text"
                            f
                            id="special-text"
                        />
                    </label>
                <button>Submit</button>
                </div>
            </div>
        </form>
    )



}













































