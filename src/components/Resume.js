import React from "react";

import Title from "./Title";
import Contact from "./Contact";
import Skills from "./Skills";

class Resume extends React.Component {
    render() {
        return (
            <div className="resume">
                <Title />
                <div className="lower-resume-wrapper">
                    <div className="lower-resume-left">
                        <Contact />
                        <Skills />
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;