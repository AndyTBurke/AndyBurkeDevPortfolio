import React from "react"

export default function About() {
    return (
        <div className="about-page">
        <div className="about-title">
            <h2>Hi! My name is <span className="my-name">Andrew Burke</span></h2>
            <div className="intro-text">and I like to make web apps with React.</div>
        </div>
        <div className="about-my-skills">{`My skills =>`}</div>
        <div className="about-skills">
            <img className="logos" title="HTML + CSS" src="src\assets\images\HTMLCSSLogos.png" />
            <img className="logos" title="JavaScript" src="src\assets\images\JSLogo.png" />
            <img className="logos" title="Python" src="src\assets\images\PythonLogo.png" />
            <img className="logos" title="React" src="src\assets\images\Reactlogo.png" />
        </div>
        <div className="about-my-skills">{`Find more info =>`}</div>
        <div className="about-skills">
            <a href="https://github.com/AndyTBurke" target="_blank">
                <img className="info-logos" title="GitHub" src="src\assets\images\GitHubLogo.png" />
            </a>
            <a href="https://www.linkedin.com/in/andrew-burke-287852247" target="_blank">
                <img className="info-logos" title="LinkedIn" src="src\assets\images\LinkedInLogo.png" />
            </a>
            <img className="info-logos" title="Résumé" src="src\assets\images\ResumeLogo.png" />
        </div>
        </div>
    )
}