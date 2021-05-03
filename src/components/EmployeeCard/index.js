import React from 'react';
import "./style.css";

function EmployeeCard(props) {
  return (

    <thead>
<tr>
      <td> <img alt={props.lastName + ", " + props.firstName} src={props.picture} /></td>
      <td>{props.lastName}</td>
      <td>{props.firstName}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
  
      </tr>
    </thead>

  );
}

export default EmployeeCard;