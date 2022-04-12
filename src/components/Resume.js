import React from "react";

import Title from "./Title";
import Contact from "./Contact";
import Skills from "./Skills";
import Interests from "./Interests";
import Education from "./Education";
import Experience from "./Experience";

class Resume extends React.Component {
    render() {
        return (
            <div className="resume">
                <Title />
                <div className="lower-resume-wrapper">
                    <div className="lower-resume-left">
                        <Contact />
                        <Skills />
                        <Interests />
                    </div>
                    <div className="lower-resume-right">
                        <Experience />
                        <Education />
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;