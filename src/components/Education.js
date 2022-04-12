import React from "react";

class Education extends React.Component {
    constructor() {
        super();

        this.state = {
            educationArr : [
                {
                    degree: "BS in Marine Transportation",
                    school: "Massachusetts Maritime Academy",
                    location: "Bourne, MA",
                    start_year : "2011",
                    finish_year : "2015",
                }
            ],

            degree: "",
            school: "",
            location: "",
            start_year : "",
            finish_year : "",
            
            editMode: false,
            deleteMode: false,
        }

        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
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

    addEducation(event) {
        this.toggleEdit();

        const eduUnit = {
            degree : this.state.degree,
            school : this.state.school,
            location : this.state.location,
            start_year : this.state.start_year,
            finish_year : this.state.finish_year
        }

        const newArr = this.state.educationArr;
        newArr.push(eduUnit);

        this.setState({
            educationArr: newArr,
            degree : "",
            school : "",
            location : "",
            start_year : "",
            finish_year : ""
        })
    }

    removeEducation(event) {
        if (this.state.deleteMode) {
            this.setState({
                educationArr : this.state.educationArr.filter(function(unit) {
                    return unit.school !== event.school;
                })
            })
        }
    }

    handleChange(event) {
        const index = event.target.name;
        this.setState({
            [index] : event.target.value
        })
    }

    render() {
        const editMode = this.state.editMode;
        return (

            <div className="education-wrapper">
                <div className="section-header">
                    <p id="education-title"> Education </p>
                    <div className="section-header-btns">
                    <button className="edit-btn" onClick={this.toggleEdit}> Add </button>
                    <button className="edit-btn" onClick={this.toggleDelete}> { this.state.deleteMode ? "Done"  : "Delete" } </button>
                    </div>
                </div>
                <hr></hr>

                <div className="education-units">
                    {this.state.educationArr.map((eduUnit) => (
                        <div className="edu-unit" onClick={() => this.removeEducation(eduUnit)}>
                            
                            <div className="edu-unit-left"> 
                                <p> {eduUnit.start_year} - {eduUnit.finish_year}</p>
                                <p> {eduUnit.degree} </p>
                            </div>

                            <div className="edu-unit-right"> 
                                <p> {eduUnit.school} </p>
                                <p> {eduUnit.location} </p>
                            </div>
                        </div> ))}
                </div>
             
                {editMode 
                && <form className="edit-form" onSubmit={this.addEducation}>
                        <label> Add your education: </label>
                        <input type="text" name="degree" value={this.state.degree} onChange={this.handleChange} placeholder="degree name" required></input>  
                        <input type="text" name="school" value={this.state.school} onChange={this.handleChange} placeholder="school name" required></input>
                        <input type="text" name="location" value={this.state.location} onChange={this.handleChange} placeholder="location" required></input>
                        <input type="text" name="start_year" value={this.state.start_year} onChange={this.handleChange} placeholder="start year" required></input>
                        <input type="text" name="finish_year" value={this.state.finish_year} onChange={this.handleChange} placeholder="finish year" required></input>
                        <input type="submit" value="Add"/>
                    </form>}
            </div>        
        )
    }
}

export default Education;