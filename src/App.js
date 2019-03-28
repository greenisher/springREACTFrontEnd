import React, { Component } from "react";
import SelectedEmployees from "./SelectedEmployee";
import EmployeeSearch from "./EmployeeSearch";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    selectedEmployees: []
  };

  removeEmployee = itemIndex => {
    const filteredEmployees = this.state.selectedEmployees.filter(
      (item, idx) => itemIndex != idx
    );
    this.setState({ selectedEmployees: filteredEmployees });
  };

  addEmployee = employee => {
    const newEmployees = this.state.selectedEmployees.concat(employee);
    this.setState({ selectedEmployees: newEmployees });
  };

  render() {
    const { selectedEmployees } = this.state;

    return (
      <div className="App">
        <div className="ui text container">
          <SelectedEmployees
            employees={selectedEmployees}
            onEmployeeClick={this.removeEmployee}
          />
          <EmployeeSearch onEmployeeClick={this.addEmployee} />
        </div>
      </div>
    );
  }
}

export default App;
