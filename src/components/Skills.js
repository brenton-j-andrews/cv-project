import React from "react";

class Skills extends React.Component {
    constructor() {
        super();

        this.state = {
            skillsArr : ["Javascript", "CSS", "HTML"],
            newSkill: "",
            editMode : false,
            deleteMode: false
        }

        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.addSkill = this.addSkill.bind(this);
        this.removeSkill = this.removeSkill.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleEdit(event) {
        let currentMode = this.state.editMode;
        this.setState({
            editMode : !currentMode
        })
    }

    toggleDelete(event) {
        let currentMode = this.state.deleteMode;
        this.setState({
            deleteMode : !currentMode
        })
    }


    addSkill(event) {
        this.toggleEdit();
        const newArr = this.state.skillsArr;
        newArr.push(event.target[0].value)
        this.setState({
            skillsArr: newArr,
            newSkill: ""
        })
    }

    removeSkill(event) {
        if (this.state.deleteMode) {
            this.setState({
                skillsArr : this.state.skillsArr.filter(function(skill) {
                    return skill !== event.target.textContent.trim();
                })});
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        const skillsArr = this.state.skillsArr;
        const editMode = this.state.editMode;

        return (
            <div className="left-unit-wrapper"> 
                <p id="contact_info"> Skills </p>
                {skillsArr.map((skill) => (
                <p onClick={this.removeSkill} key={`${skill}`}> {skill} </p>
            ))}

                <button className="edit-btn" onClick={this.toggleEdit}
                > Add </button>

                <button className="edit-btn" onClick={this.toggleDelete}
                > {this.state.deleteMode ? "Done"  : "Delete" } </button>



                {editMode && 
                    <form className="edit-form" onSubmit={this.addSkill}>
                        <label> Add a skill </label>
                        <input type="text" name="newSkill" value={this.state.newSkill} onChange={this.handleChange} placeholder="new skill" required></input>    
                        <input type="submit" value="Add"/>
                    </form>
                }
            </div>
        )
    }
}

export default Skills;