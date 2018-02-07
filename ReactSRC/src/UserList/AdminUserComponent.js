import React from 'react';
import axios from 'axios';

const styles = {
  color: 'red'
}

export var AdminUserComponent = (props) => {
  var {id, name, surname, specialisation, username} = props;

  var handleClick = (event) => {
      props.history.push('/doctors/' + id);
      event.preventDefault();
  };

  var handleRemove = (event) => {
    props.remove(event.target.id);
    axios.delete('http://localhost:8081/api/doctors/' + event.target.id)
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
        <td>{specialisation}</td>
        <td><a onClick={handleClick}>{name}</a></td>
        <td><span id={id} className="glyphicon glyphicon-remove" style={styles} onClick={handleRemove}></span></td>
      </tr>
  );

};
