import React from 'react'
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <div className="brt main-container footer-background">
            <div className="footer">
                <div className="foot-col">
                <div className="bold"><p>ABOUT</p></div>
                    <p>Newsroom</p>
                    <p>Neighborhood Support</p>
                    <p>Accessibility</p>
                    <p>Issuese</p>
                </div>
                <div className="foot-col">
                    <div className="bold"><p>COMMUNITY</p></div>
                    <p>Diversity Belonging</p>
                    <p>Against Discrimination</p>
                    <p>Invite friends</p>
                    <p>Gift cards</p>
                </div>
                <div className="foot-col">
                    <div className="bold"><p>SUPPORT</p></div>
                    {/* <Link to ="/about">About us</Link> */}
                    <p>Updates for COVID-19</p>
                    <p>Help Center</p>
                    <p>Cancellation options</p>
                    <p>Trust and Safety</p>
                </div>
            </div>
        </div>
    )
}
