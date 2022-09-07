import React from "react"
import htmlCssLogo from "./assets/images/HTMLCSSLogos.png"
import javaScriptLogo from "./assets/images/JSLogo.png"
import pythonLogo from "./assets/images/PythonLogo.png"
import reactLogo from "./assets/images/Reactlogo.png"
import gitHubLogo from "./assets/images/GitHubLogo.png"
import linkedInLogo from "./assets/images/LinkedInLogo.png"

export default function About() {
    return (
        <div className="about-page">
        <div className="about-title">
            <h2>Hi! My name is <span className="my-name">Andrew Burke</span></h2>
            <div className="intro-text">and I like to make web apps with React.</div>
        </div>
        <div className="about-my-skills">{`My skills =>`}</div>
        <div className="about-skills">
            <img className="logos" title="HTML + CSS" src={htmlCssLogo} />
            <img className="logos" title="JavaScript" src={javaScriptLogo} />
            <img className="logos" title="Python" src={pythonLogo} />
            <img className="logos" title="React" src={reactLogo} />
        </div>
        <div className="about-my-skills">{`Find more info =>`}</div>
        <div className="about-skills">
            <a href="https://github.com/AndyTBurke" target="_blank">
                <img className="info-logos" title="GitHub" src={gitHubLogo} />
            </a>
            <a href="https://www.linkedin.com/in/andrew-burke-287852247" target="_blank">
                <img className="info-logos" title="LinkedIn" src={linkedInLogo} />
            </a>
            <img className="info-logos" title="Résumé" src="src\assets\images\ResumeLogo.png" />
        </div>
        </div>
    )
}