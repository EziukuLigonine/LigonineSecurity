import React from 'react';
import axios from 'axios';

const styles = {
  color: 'red'
}

export var AdminPharmacistComponent = (props) => {
  var {id, name, surname, companyType, username, companyName} = props;

  var handleClick = (event) => {
      props.history.push('/pharmacists/' + id);
      event.preventDefault();
  };

  var handleRemove = (event) => {
    props.remove(event.target.id);
    axios.delete('http://localhost:8081/api/pharmacists/' + event.target.id)
    .then(response => {

    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{username}</td>
        <td>{companyType}</td>
        <td>{companyName}</td>
        <td><a onClick={handleClick}>{name}</a></td>
        <td><span id={id} className="glyphicon glyphicon-remove" style={styles} onClick={handleRemove}></span></td>
      </tr>
  );

};
