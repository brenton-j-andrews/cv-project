import React from "react";

import "../css/styles.css";

class Contact extends React.Component {
    constructor() {
        super();

        this.state = {
            address_1 : "1962 S 1200 E",
            address_2 : "Apt 504",
            city_state: "Salt Lake City, UT",
            phone_number : "978-257-1500",
            email : "brenton.j.andrews@gmail.com",
            website : "myCoolWebsite.com",
            github : "",
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
        const { address_1,
             address_2,
             city_state,
             phone_number,
             email,
             website,
             github,
             editMode } = this.state;

        return (
            <div className="left-unit-wrapper">
                <p id="contact_info"> Contact Information </p>
                <p id="address_1"> { address_1 ? address_1 : "Address 1"} </p>
                <p id="address_2"> { address_2 ? address_2 : "Address 2"} </p>
                <p id="city_state"> { city_state ? city_state : "City / State"} </p>
                <p id="phone_number"> { phone_number ? phone_number : "Phone Number"} </p>
                <p id="email"> { email ? email : "Email"}</p>
                <p id="website"> { website ? website : "Website Link" } </p>
                <p id="github"> { github ? github : "Github Link" } </p>

                <button className="edit-btn"
                onClick={this.toggleEdit}
                > Edit
                </button>

                { editMode &&
                    <form className="edit-form"> 
                        <input onChange={this.handleChange} name="address_1" type="text" placeholder="Address 1"></input>
                        <input onChange={this.handleChange} name="address_2" type="text" placeholder="Address 2"></input>
                        <input onChange={this.handleChange} name="city_state" type="text" placeholder="city_state"></input>
                        <input onChange={this.handleChange} name="phone_number" type="tel" placeholder="phone_number"></input>
                        <input onChange={this.handleChange} name="email" type="text" placeholder="email"></input>
                        <input onChange={this.handleChange} name="website" type="text" placeholder="website"></input>
                        <input onChange={this.handleChange} name="github" type="text" placeholder="github"></input>
                        <button  onClick={this.toggleEdit}> Close Form </button>
                    </form>
                }
            </div>
        )
    }

}

export default Contact;