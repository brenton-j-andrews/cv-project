import React from "react";

import "../css/styles.css";

class Title extends React.Component {
    constructor() {
        super();

        this.state = {
            fullName: "",
            title: "",
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
                <p id="profile"> {profile ? profile : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." } </p>

                <button className="edit-btn"
                onClick={this.toggleEdit}
                > Edit
                </button>

                { editMode &&
                    <form className="edit-form fullname"> 
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