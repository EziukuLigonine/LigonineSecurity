import React from 'react';

export var DoctorDetailsComponent = (props) => {

  return (
    <div>
      <h3>#{props.doctor.id}</h3>
      <h3>{props.doctor.name} {props.doctor.surname}</h3>
      <p>Slapyvardis: {props.doctor.username}</p>
      <p>Specializacija: {props.doctor.specialisation}</p>
    </div>
  );
};
