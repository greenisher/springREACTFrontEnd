import React, { Component } from "react";
import Client from "./Client";

const MATCHING_ITEM_LIMIT = 25;

class EmployeeSearch extends Component {
  state = {
    employees: [],
    showRemoveIcon: false,
    searchValue: ""
  };

  handleSearchChange = e => {
    const value = e.target.value;

    this.setState({
      searchValue: value
    });

    if (value === "") {
      this.setState({
        employees: [],
        showRemoveIcon: false
      });
    } else {
      this.setState({
        showRemoveIcon: true
      });

      Client.search(value, employees => {
        this.setState({
          employees: employees.slice(0, MATCHING_ITEM_LIMIT)
        });
      });
    }
  };

  handleSearchCancel = () => {
    this.setState({
      employees: [],
      showRemoveIcon: false,
      searchValue: ""
    });
  };

  render() {
    const { showRemoveIcon, employees } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: "hidden" };

    const employeeRows = employees.map((employee, idx) => (
      <tr key={idx} onClick={() => this.props.onEmployeeClick(employee)}>
        <td>{employee.id}</td>
        <td className="right aligned">{employee.firstName}</td>
        <td className="right aligned">{employee.lastName}</td>
        <td className="right aligned">{employee.description}</td>
      </tr>
    ));

    return (
      <div id="employee-search">
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th colSpan="5">
                <div className="ui fluid search">
                  <div className="ui icon input">
                    <input
                      className="prompt"
                      type="text"
                      placeholder="Search employees"
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className="search icon" />
                  </div>
                  <i
                    className="remove icon"
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className="eight wide">firstName</th>
              <th>lastName</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>{employeeRows}</tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeSearch;
