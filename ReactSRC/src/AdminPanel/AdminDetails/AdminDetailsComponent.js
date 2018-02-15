import React from 'react';

export var AdminDetailsComponent = (props) => {

  return (
    <div>
      <h3>#{props.admin.id}</h3>
      <h3>{props.admin.name} {props.admin.surname}</h3>
      <p>Slapyvardis: {props.admin.username}</p>
    </div>
  );
};
