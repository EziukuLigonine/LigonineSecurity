import React from 'react';

export var PharmacistDetailsComponent = (props) => {

  return (
    <div>
      <h3>#{props.pharmacist.id}</h3>
      <h3>{props.pharmacist.name} {props.pharmacist.surname}</h3>
      <p>Slapyvardis: {props.pharmacist.username}</p>
      <p>Darboviete: {props.pharmacist.companyType} {props.pharmacist.companyName}</p>

    </div>
  );
};
