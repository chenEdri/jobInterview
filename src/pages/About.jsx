import React, { Component } from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export class About extends Component {

    render() {
        return (
            <div className="main-container">
                <h1>HELLO EVERYONE!</h1>
                <div class="about-1">
                    <img class="img-about" src="https://res.cloudinary.com/dygtul5wx/image/upload/v1601334459/73008855_10221388445607068_9020790098928599040_o.jpg_hlrxea.jpg" alt="#" />
                </div>
                <p>Hi, I'm Chen Edri, 29 years old originally from Eilat.I have B.Sc Nutriotion degree from the Hebrew University
                and I'm a reggistered dietitian. I'm also a junior Full Stack developer- specialized in Node JS. and React
                </p>
            </div>
        )
    }
}