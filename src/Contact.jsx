import React from "react"
import codePenLogo from "./assets/images/CodePen_logo.png"
import FCCLogo from "./assets/images/FreeCodeCamp_logo.png"
import replitLogo from "./assets/images/replit-logo.png"
import emailIcon from "./assets/images/email-icon.png"

export default function() {
    return (
        
        <div className="contact-page">
            <div>
                <h2 className="email-address">
                    <img className="contact-icon" src={emailIcon} />
                    <div> andrewtburke@gmail.com</div>
                </h2>
            </div>
            <div><h2>{`See more =>`}</h2></div>
            <div className="see-more">
            <a href="https://codepen.io/andytburke"
            target="_blank">
                <img className="see-more-icon" src={codePenLogo} />
            </a>
            <a href="https://www.freecodecamp.org/fcc18f6c18e-f2d2-403d-ac66-c78bd2691e55"
            target="_blank">
                <img className="see-more-icon" src={FCCLogo} />
            </a>
            <a href="https://replit.com/@andyb123"
            target="_blank">
                <img className="see-more-icon" src={replitLogo} />
            </a>
            </div>
        </div>
        
    )
}