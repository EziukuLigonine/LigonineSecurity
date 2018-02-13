import React from 'react';
import axios from 'axios';

const styles = {
  color: 'red'
}

export var DoctorComponent = (props) => {
  var {id, name, surname, username, password, specialisation} = props;

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
  var getDoctor = (event) => {
      props.history.push("/doctors/" + id);
      event.preventDefault();
  };

  return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{username}</td>
        <td>{password}</td>
        <td>{specialisation}</td>
          <td><button className="btn btn-primary" onClick={handleClick}>Edit</button></td>
          <td><button className="btn btn-primary" onClick={this.getDoctor}>Details</button></td>
        <td><span id={id} className="glyphicon glyphicon-remove" style={styles} onClick={handleRemove}></span></td>
      </tr>
  );

};
