import React from "react"

export default function Header() {
    return (
        <div className="header">
            <h1>{`<Andrew Burke />`}</h1>
            <nav>
                <button>{`<About />`}</button>
                <button>{`<Projects />`}</button>
                <button>{`<Contact />`}</button>
            </nav>
        </div>
    )
}