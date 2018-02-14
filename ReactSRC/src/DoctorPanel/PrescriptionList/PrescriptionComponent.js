import React from 'react';
import axios from 'axios';

const styles = {
  color: 'red'
}

export var PrescriptionComponent = (props) => {
  var {id, personalId, date, activeMat, activeMatQuantity, unit, desc, validUntil, doctorUsername} = props;

  var handleClick = (event) => {
      props.history.push('/prescriptions/' + id);
      event.preventDefault();
  };

  var handleRemove = (event) => {
    props.remove(event.target.id);
    axios.delete('http://localhost:8081/api/prescriptions/' + event.target.id)
    .then(response => {

    })
    .catch(error => {
      console.log(error);
    })
  }

  var getPrescription = (event) => {
      props.history.push("/prescriptions/" + id);
      event.preventDefault();
  };

  return (
      <tr>
        <td>{id}</td>
        <td>{personalId}</td>
        <td>{date}</td>
        <td>{activeMat}</td>
        <td>{activeMatQuantity}</td>
        <td>{unit}</td>
        <td>{desc}</td>
        <td>{doctorUsername}</td>
        <td>{validUntil}</td>
          <td><button className="btn btn-primary" onClick={handleClick}>Edit</button></td>
          <td><button className="btn btn-primary" onClick={this.getPrescription}>Details</button></td>
        <td><span id={id} className="glyphicon glyphicon-remove" style={styles} onClick={handleRemove}></span></td>
      </tr>
  );

};
