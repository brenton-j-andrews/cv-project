import React from "react";

class Experience extends React.Component {
    constructor() {
        super();

        this.state = {
            experienceArr : [
                {
                    company: "A Different Job in a Different Career",
                    city: "Norfolk, VA",
                    role: "Collect paycheck",
                    start_date : "July 2015",
                    finish_date : "July 2020",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo."
                },

                {
                    company: "A Cool Software Company",
                    city: "Salt Lake City, UT",
                    role: "Junior Web Developer",
                    start_date: "July 2022",
                    finish_date: "Present",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo."

                }
            ],

            company: "",
            city: "",
            role: "",
            start_date : "",
            finish_date : "",
            description: "",
            
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
            finish_date : this.state.finish_date,
            description : this.state.description
        }

        const newArr = this.state.experienceArr;
        newArr.push(expUnit);

        this.setState({
            experienceArr: newArr,
            company : "",
            city : "",
            role : "",
            start_date : "",
            finish_date : "",
            description : ""
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
                            <div className="exp-unit-top">
                                <div className="exp-unit-left"> 
                                    <p> {expUnit.start_date} - {expUnit.finish_date}</p>
                                    <p> {expUnit.role} </p>
                                </div>

                                <div className="exp-unit-right"> 
                                    <p> {expUnit.company} </p>
                                    <p> {expUnit.city} </p>
                                </div>
                            </div>

                            <div className="exp-description">
                                <p> { expUnit.description }</p>
                            </div>
                        </div> ))}
                </div>
              

                {editMode 
                && <form className="edit-form experience" onSubmit={this.addExperience}>
                        <label> Add your work experience: </label>
                        <input type="text" name="company" value={this.state.company} onChange={this.handleChange} placeholder="company name"></input>  
                        <input type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="location" ></input>
                        <input type="text" name="role" value={this.state.role} onChange={this.handleChange} placeholder="role" ></input>
                        <input type="text" name="start_date" value={this.state.start_date} onChange={this.handleChange} placeholder="start date" ></input>
                        <input type="text" name="finish_date" value={this.state.finish_date} onChange={this.handleChange} placeholder="finish date" ></input>
                        <textarea type="textarea" name="description" value={this.state.description} onChange={this.handleChange} placeholder="describe your job"></textarea>
                        <input type="submit" value="Add"/>
                    </form>}
            </div>        
        )
    }
}

export default Experience;