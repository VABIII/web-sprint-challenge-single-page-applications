import React from "react";
import {Link} from "react-router-dom";

import "./Header.css";

export default function Header() {

    return(
        <div className="header">
            <nav className="header-navs">
                <Link className="NavLink"  to="/">Home</Link>
                <Link id="order-pizza" className="NavLink" to="/pizza">Order Pizza</Link>
                <Link className="NavLink" to="/contact">Contact Us</Link>
            </nav>
        </div>
    )

}











































