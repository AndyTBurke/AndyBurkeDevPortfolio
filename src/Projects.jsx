import React from "react"
import CompSciImg from "./assets/images/compsciquiz.png"
import PomodoroImg from "./assets/images/pomodoro.png"
import StockQuotesImg from "./assets/images/stockquotes.png"


export default function Projects() {
    return (
        <div className="projects-page">
            <div className="projects-container">
                <div className="project">
                    <h2>CompSci Quiz</h2>
                    <a href="https://aburke-compsci-quiz.netlify.app" target="_blank">
                    <img className="proj-img" src={CompSciImg}></img>
                    </a>
                    <p className="proj-description">Using the Open Trivia API, I've created a fun little quiz app. Test your CompSci knowledge!</p>
                    <p><a href="https://aburke-compsci-quiz.netlify.app"
                        target="_blank">LIVE PROJECT</a> || <a href="https://github.com/AndyTBurke/Comp-Sci-Quiz"
                        target="_blank">VIEW CODE</a></p>
                </div>
                <div className="project">
                    <h2>Pomodoro Timer</h2>
                    <a href="https://aburke-pomodoro.netlify.app/" target="_blank">
                    <img className="proj-img" src={PomodoroImg}></img>
                    </a>
                    <p className="proj-description">A productivity device. Set a session time for studying or working, then set a break time. Repeat.</p>
                    <p><a href="https://aburke-pomodoro.netlify.app/"
                        target="_blank">LIVE PROJECT</a> || <a href="https://github.com/AndyTBurke/Pomodoro"
                        target="_blank">VIEW CODE</a></p>
                </div>
                <div className="project" target="_blank">
                    <h2>Stock 'Quote' Genrator</h2>
                    <a href="https://aburke-stock-quotations.netlify.app/" target="_blank">
                    <img className="proj-img" src={StockQuotesImg}></img>
                    </a>
                    <p className="proj-description">A simple implimentation of React. Quotes about investing are so good, I wanted to collect them.</p>
                    <p><a href="https://aburke-stock-quotations.netlify.app/"
                        target="_blank">LIVE PROJECT</a> || <a href="https://github.com/AndyTBurke/Stock-Quotation-Generator"
                        target="_blank">VIEW CODE</a></p>
                </div>
            </div>
        </div>
    )
}