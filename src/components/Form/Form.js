import React, { Component } from "react";
import "./Form.css";

class Form extends React.Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }
  

  //this () handles the change of inputs and it's state.
  //Grabs the state and updates it behind the scenes. 
  //update the state and [name]: becomes placeholder for inputted value
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,

    });
  }; //end of handleInputChange ()







//this () --> when the button is clicked, the function renders
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    //alert the value of the name which is the firstName and lastName (lines: 4-12 && 18-27)
    alert(`Hello ${this.state.firstName} ${this.state.lastName} `);
    this.setState({
      firstName: "",
      lastName: "",
      password: "",
    });

    if(this.password.length < 6){
      alert("Choose a more secure password")
    }
  };//end of handleFormSubmit()






  //render function (html)
  render() {

    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />

          <input
            value={this.state.password}
            password = "Password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  } 
}

export default Form;
