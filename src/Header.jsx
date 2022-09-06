import React from "react"

export default function Header(props) {
    return (
        <nav className="header">
            <h1>{`<Andrew Burke />`}</h1>
                <button onClick={() => props.changePage("about")} className="about-button" >{`<About />`}</button>
                <button onClick={() => props.changePage("projects")}>{`<Projects />`}</button>
                <button onClick={() => props.changePage("contact")}>{`<Contact />`}</button>
        </nav>
    )
}