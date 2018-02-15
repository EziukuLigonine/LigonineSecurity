import React from 'react';

export var PatientDetailsComponent = (props) => {

  return (
    <div>
      <h3>#{props.patient.id}</h3>
      <h3>{props.patient.name} {props.patient.surname}</h3>
      <p>Slapyvardis: {props.patient.username}</p>
      <p>Asmens kodas: {props.patient.personalId}</p>
      <p>Gimimo data: {props.patient.dateOfBirth}</p>

    </div>
  );
};
