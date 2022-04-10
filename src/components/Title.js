import React from "react";

import "../css/styles.css";

class Title extends React.Component {
    constructor() {
        super();

        this.state = {
            fullName: "Brenton Andrews",
            title: "Junior Front End Developer",
            profile: "",
            editMode: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
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
        const { fullName, title, profile, editMode } = this.state;
        return (
            <div className="title-wrapper">
                <div className="title-left">
                    <h1 id="full-name"> {fullName ? fullName : "Your Name"} </h1>
                    <p id="upper-title"> { title ? title : "Your Title" } </p>
                </div>
                <p id="profile"> {profile ? profile : "Write a short profile here" } </p>

                <button className="edit-btn"
                onClick={this.toggleEdit}
                > Edit
                </button>

                { editMode &&
                    <form className="edit-form"> 
                        <input onChange={this.handleChange} name="fullName" type="text" placeholder="Enter your name"></input>
                        <input onChange={this.handleChange} name="title" type="text" placeholder="Enter your title"></input>
                        <textarea onChange={this.handleChange} name="profile" type="text" placeholder="Enter your profile"></textarea>

                        <button  onClick={this.toggleEdit}> Close Form </button>
                    </form>
                }
            </div>
        )
    }
}

export default Title;