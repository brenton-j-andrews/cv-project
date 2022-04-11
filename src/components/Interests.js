import React from "react";

class Interests extends React.Component {
    constructor() {
        super();

        this.state = {
            interestsArr : ["Rock Climbing", "Skiing", "Hiking"],
            newInterest: "",
            editMode : false,
            deleteMode: false
        }

        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.addInterest = this.addInterest.bind(this);
        this.removeInterest = this.removeInterest.bind(this);
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


    addInterest(event) {
        this.toggleEdit();
        const newArr = this.state.interestsArr;
        newArr.push(event.target[0].value)
        this.setState({
            interestsArr: newArr,
            newSkill: ""
        })
    }

    removeInterest(event) {
        if (this.state.deleteMode) {
            this.setState({
                interestsArr : this.state.interestsArr.filter(function(skill) {
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
        const interestsArr = this.state.interestsArr;
        const editMode = this.state.editMode;

        return (
            <div className="left-unit-wrapper"> 
                <p id="contact_info"> Interests </p>
                {interestsArr.map((interest) => (
                <p onClick={this.removeInterest} key={`${interest}`}> {interest} </p>
            ))}

                <button className="edit-btn" onClick={this.toggleEdit}
                > Add </button>

                <button className="edit-btn" onClick={this.toggleDelete}
                > {this.state.deleteMode ? "Done"  : "Delete" } </button>



                {editMode && 
                    <form className="edit-form" onSubmit={this.addInterest}>
                        <label> Add a skill </label>
                        <input type="text" name="newInterest" value={this.state.newInterest} onChange={this.handleChange} placeholder="new skill" required></input>    
                        <input type="submit" value="Add"/>
                    </form>
                }
            </div>
        )
    }
}

export default Interests;