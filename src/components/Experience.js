import React from "react";

class Experience extends React.Component {
    constructor() {
        super();

        this.state = {
            experienceArr : [
                {
                    company: "US Navy - Military  Sealift Command",
                    city: "Norfolk, VA",
                    role: "3rd Mate",
                    start_date : "July 2015",
                    finish_date : "July 2020",
                }
            ],

            company: "",
            city: "",
            role: "",
            start_date : "",
            finish_date : "",
            
            editMode: false,
            deleteMode: false,
        }

        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.removeExperience = this.removeExperience.bind(this);
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

    handleChange(event) {
        const index = event.target.name;
        this.setState({
            [index] : event.target.value
        })
    }

    addExperience(event) {
        this.toggleEdit();

        const expUnit = {
            company : this.state.company,
            city : this.state.city,
            role : this.state.role,
            start_date : this.state.start_date,
            finish_date : this.state.finish_date
        }

        const newArr = this.state.experienceArr;
        newArr.push(expUnit);

        this.setState({
            experienceArr: newArr,
            company : "",
            city : "",
            role : "",
            start_date : "",
            finish_date : ""
        })
    }

    removeExperience(event) {
        if (this.state.deleteMode) {
            this.setState({
                experienceArr : this.state.experienceArr.filter(function(unit) {
                    return unit.company !== event.company;
                })
            })
        }
    }

    render() {
        const editMode = this.state.editMode;

        return (

            <div className="experience-wrapper">
                <div className="section-header">
                    <p id="experience-title"> Work Experience </p>
                    <div className="section-header-btns">
                        <button className="edit-btn" onClick={this.toggleEdit}> Add </button>
                        <button className="edit-btn" onClick={this.toggleDelete}> { this.state.deleteMode ? "Done"  : "Delete" } </button>
                    </div>
                </div>
                <hr></hr>
                
                <div className="experience-units">
                    {this.state.experienceArr.map((expUnit) => (
                        <div className="exp-unit" onClick={() => this.removeExperience(expUnit)}>

                            <div className="exp-unit-left"> 
                                <p> {expUnit.start_date} - {expUnit.finish_date}</p>
                                <p> {expUnit.role} </p>
                            </div>

                            <div className="exp-unit-right"> 
                                <p> {expUnit.company} </p>
                                <p> {expUnit.city} </p>
                            </div>
                        </div> ))}
                </div>
              

                {editMode 
                && <form className="edit-form" onSubmit={this.addExperience}>
                        <label> Add your work experience: </label>
                        <input type="text" name="company" value={this.state.company} onChange={this.handleChange} placeholder="company name" required></input>  
                        <input type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="location" required></input>
                        <input type="text" name="role" value={this.state.role} onChange={this.handleChange} placeholder="role" required></input>
                        <input type="text" name="start_date" value={this.state.start_date} onChange={this.handleChange} placeholder="start date" required></input>
                        <input type="text" name="finish_date" value={this.state.finish_date} onChange={this.handleChange} placeholder="finish date" required></input>
                        <input type="submit" value="Add"/>
                    </form>}
            </div>        
        )
    }
}

export default Experience;