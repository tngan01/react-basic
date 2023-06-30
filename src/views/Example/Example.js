import React from "react";
import "../App.scss";
import ChildComponent from "./ChildComponent";
export default class Example extends React.Component {
  // key : value
  state = {
    firstName: "",
    lastName: "",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> check data input: ", this.state);
  };
  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <div className="App">
          <from>
            <label htmlFor="fname">First name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={this.state.firstName}
              onChange={(event) => this.handleChangeFirstName(event)}
            />
            <br />
            <label htmlFor="fname">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={this.state.lastName}
              onChange={(event) => this.handleChangeLastName(event)}
            />
            <br />
            <input
              type="button"
              value="Submit"
              onClick={(event) => this.handleSubmit(event)}
            />
          </from>
          
          <ChildComponent name={'child one'}/>
        </div>
      </>
    );
  }
}
