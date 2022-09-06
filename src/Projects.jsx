import React from "react"

export default function Projects() {
    return (
        <div className="projects-page">
            <div className="projects-container">
                <div className="project">
                    <h2>CompSci Quiz</h2>
                    <img className="proj-img" src="src\assets\images\CompSci-project.JPG"></img>
                    <p className="proj-description">Using the Open Trivia API, I've created a fun little quiz app. Test your CompSci knowledge!</p>
                    <p><a href="https://aburke-compsci-quiz.netlify.app"
                        target="_blank">LIVE PROJECT</a> || <a href="https://github.com/AndyTBurke/Comp-Sci-Quiz"
                        target="_blank">VIEW CODE</a></p>
                </div>
                <div className="project">
                    <h2>Pomodoro Timer</h2>
                    <img className="proj-img" src="src\assets\images\CompSci-project.JPG"></img>
                    <p className="proj-description">Using the Open Trivia API, I've created a fun little quiz app. Test your CompSci knowledge!</p>
                    <p><a href=""
                        target="_blank">LIVE PROJECT</a> || <a href=""
                        target="_blank">VIEW CODE</a></p>
                </div>
                <div className="project">
                    <h2>Stock 'Quote' Genrator</h2>
                    <img className="proj-img" src="src\assets\images\QuoteGen-project.JPG"></img>
                    <p className="proj-description">A simple implimentation of React. Quotes about investing are so good, I wanted to collect them.</p>
                    <p><a href="https://aburke-stock-quotations.netlify.app/"
                        target="_blank">LIVE PROJECT</a> || <a href="https://github.com/AndyTBurke/Stock-Quotation-Generator"
                        target="_blank">VIEW CODE</a></p>
                </div>
            </div>
        </div>
    )
}