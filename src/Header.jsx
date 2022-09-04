import React from "react"

export default function Header(props) {
    return (
        <div className="header">
            <h1>{`<Andrew Burke />`}</h1>
            <nav>
                <button onClick={() => props.changePage("about")} >{`<About />`}</button>
                <button>{`<Projects />`}</button>
                <button onClick={() => props.changePage("contact")}>{`<Contact />`}</button>
            </nav>
        </div>
    )
}