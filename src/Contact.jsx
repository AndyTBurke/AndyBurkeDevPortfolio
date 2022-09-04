import React from "react"

export default function() {
    return (
        
        <div className="contact-page">
            <div>
            <h2><img className="contact-icon" src="src\assets\images\email-icon.png" /> andrewtburke@gmail.com</h2>
            </div>
            <div><h2>{`See more =>`}</h2></div>
            <div>
            <a href="https://codepen.io/andytburke"
            target="_blank">
                <img className="see-more-icon" src="src\assets\images\CodePen_logo.png" />
            </a>
            <a href="https://www.freecodecamp.org/fcc18f6c18e-f2d2-403d-ac66-c78bd2691e55"
            target="_blank">
                <img className="see-more-icon" src="src\assets\images\FreeCodeCamp_logo.png" />
            </a>
            <a href="https://replit.com/@andyb123"
            target="_blank">
                <img className="see-more-icon" src="src\assets\images\replit-logo.png" />
            </a>
            </div>
        </div>
        
    )
}