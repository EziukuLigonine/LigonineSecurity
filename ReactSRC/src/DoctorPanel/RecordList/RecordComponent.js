import React from 'react';
import axios from 'axios';

const styles = {
  color: 'red'
}

export var RecordComponent = (props) => {
  var {id, personalId, duration, tlk, appDesc, vlk, repeated, date, doctorUsername} = props;

  var handleClick = (event) => {
      props.history.push('/records/' + id);
      event.preventDefault();
  };

  var handleRemove = (event) => {
    props.remove(event.target.id);
    axios.delete('http://localhost:8081/api/records/' + event.target.id)
    .then(response => {

    })
    .catch(error => {
      console.log(error);
    })
  }

  var getRecord = (event) => {
      props.history.push("/records/" + id);
      event.preventDefault();
  };

  return (
      <tr>
        <td>{id}</td>
        <td>{personalId}</td>
        <td>{duration}</td>
        <td>{tlk}</td>
        <td>{appDesc}</td>
        <td>{vlk}</td>
        <td>{repeated}</td>
        <td>{doctorUsername}</td>
        <td>{date}</td>
          <td><button className="btn btn-primary" onClick={handleClick}>Edit</button></td>
          <td><button className="btn btn-primary" onClick={this.getRecord}>Details</button></td>
        <td><span id={id} className="glyphicon glyphicon-remove" style={styles} onClick={handleRemove}></span></td>
      </tr>
  );

};
