import React from "react";
import "../App.scss";
export default class ChildComponent extends React.Component {
  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <div>
            ChildComponent
        </div>
      </>
    );
  }
}