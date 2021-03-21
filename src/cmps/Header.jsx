import { NavLink } from "react-router-dom";
import React from "react";



export function Header(props) {
    return (
        <div className="main-header flex sb align-center">
            <div className="left-nav">
                <div className="logo"><img src={'https://res.cloudinary.com/dygtul5wx/image/upload/v1602702101/jsLogo_hyne4z.png'} alt="/#"/></div>
            </div>
            <div className="right-nav">
                <NavLink className="link" to="/">HOME</NavLink>
                <NavLink to="/item">ITEMS</NavLink>
            </div>
        </div>
    )
}
