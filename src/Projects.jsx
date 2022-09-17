import React from "react"
import CompSciImg from "./assets/images/compsciquiz.png"
import PomodoroImg from "./assets/images/pomodoro.png"
import ColorPickerImg from "./assets/images/color-picker.png"


export default function Projects() {
    return (
        <div className="projects-page">
            <div className="projects-container">
                <div className="project">
                    <h2>CompSci Trivia</h2>
                    <a href="https://aburke-compsci-quiz.netlify.app" target="_blank">
                    <img className="proj-img" src={CompSciImg}></img>
                    </a>
                    <p className="proj-description">As I learn more about programming, it's fun to test myself. This web app uses the Open Trivia API, and you can keep getting more and more questions! Though the API's selection is admittedly limited.</p>
                    <p><a href="https://aburke-compsci-quiz.netlify.app"
                        target="_blank">LIVE PROJECT</a> || <a href="https://github.com/AndyTBurke/Comp-Sci-Quiz"
                        target="_blank">VIEW CODE</a></p>
                </div>
                <div className="project">
                    <h2>Colorway Generator</h2>
                    <a href="https://aburke-color-picker.netlify.app/" target="_blank">
                    <img className="proj-img" src={ColorPickerImg}></img>
                    </a>
                    <p className="proj-description">As you can see from this portfolio website, I'm not so great at choosing my color schemes. So I have created this tool, utilizing The Color API, to help pick nice-looking color schemes for my future projects. </p>
                    <p><a href="https://aburke-color-picker.netlify.app/"
                        target="_blank">LIVE PROJECT</a> || <a href="https://github.com/AndyTBurke/colorpicker"
                        target="_blank">VIEW CODE</a></p>
                </div>
                <div className="project">
                    <h2>Pomodoro Timer</h2>
                    <a href="https://aburke-pomodoro.netlify.app/" target="_blank">
                    <img className="proj-img" src={PomodoroImg}></img>
                    </a>
                    <p className="proj-description">The Pomodoro Method helps me with productivity: I do focused work for 25 minutes, then a 5 minute break. Repeat. This device auto-switches between work and break sessions, and timing can be adjusted.</p>
                    <p><a href="https://aburke-pomodoro.netlify.app/"
                        target="_blank">LIVE PROJECT</a> || <a href="https://github.com/AndyTBurke/Pomodoro"
                        target="_blank">VIEW CODE</a></p>
                </div>
            </div>
        </div>
    )
}