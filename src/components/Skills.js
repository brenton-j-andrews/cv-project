import React from "react";

class Skills extends React.Component {
    constructor() {
        super();

        this.state = {
            skillsArr : ["Javascript", "CSS", "HTML"],
            editMode : false
        }
    }

    toggleEdit(event) {
        let currentMode = this.state.editMode;
        this.setState({
            editMode : !currentMode
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        const skillsArr = this.state.skillsArr;
        
        return (
            <div className="left-unit-wrapper"> 
                <p id="contact_info"> Skills </p>
                {skillsArr.map((skill) => (
                <p> {skill} </p>
            ))}
            </div>
        )
    }
}

export default Skills;