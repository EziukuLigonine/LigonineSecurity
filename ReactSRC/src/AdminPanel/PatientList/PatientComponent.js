import React from 'react';
import axios from 'axios';

const styles = {
  color: 'red'
}

export var PatientComponent = (props) => {
  var {id, name, surname, username, password, personalId, dateOfBirth, doctorUsername} = props;

  var handleClick = (event) => {
      props.history.push('/patients/' + id);
      event.preventDefault();
  };

  var handleRemove = (event) => {
    props.remove(event.target.id);
    axios.delete('http://localhost:8081/api/patients/' + event.target.id)
    .then(response => {

    })
    .catch(error => {
      console.log(error);
    })
  }

  var getPatient = (event) => {
      props.history.push("/patients/" + id);
      event.preventDefault();
  };

  return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{username}</td>
        <td>{password}</td>
        <td>{personalId}</td>
        <td>{dateOfBirth}</td>
        <td>{doctorUsername}</td>
          <td><button className="btn btn-primary" onClick={handleClick}>Edit</button></td>
          <td><button className="btn btn-primary" onClick={this.getPatient}>Details</button></td>
        <td><span id={id} className="glyphicon glyphicon-remove" style={styles} onClick={handleRemove}></span></td>
      </tr>
  );

};
