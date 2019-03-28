import React from "react";

export default function SelectedEmployee(props) {
  const { employees } = props;

  const employeeRows = employees.map((employee, idx) => (
    <tr key={idx} onClick={() => props.onEmployeeClick(idx)}>
      <td>{employee.id}</td>
      <td className="right aligned">{employee.firstName}</td>
      <td className="right aligned">{employee.lastName}</td>
      <td className="right aligned">{employee.description}</td>
    </tr>
  ));

  return (
    <table className="ui selectable structured large table">
      <thead>
        <tr>
          <th colSpan="5">
            <h3>Selected employees</h3>
          </th>
        </tr>
        <tr>
          <th className="eight wide">Employees</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{employeeRows}</tbody>
      <tfoot>
        <tr>
          <th>Employees</th>
          <th className="right aligned" id="firstName">
            {employee.firstName}
          </th>
          <th className="right aligned" id="lastName">
            {employee.lastName}
          </th>
          <th className="right aligned" id="description">
            {employee.description}
          </th>
        </tr>
      </tfoot>
    </table>
  );
}
