import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export class DoctorContainer extends Component {
    newPrescription = () => {
        this.props.history.push("/doctor/prescriptions/new");
    };

    newRecord = () => {
      this.props.history.push("/doctor/records/new");
    };

    allPrescriptions = () => {
      this.props.history.push("/doctor/prescriptions");
    };

    allRecords = () => {
      this.props.history.push("/doctor/records");
    }




    render() {
        return (
            <div>
              Israsyti: <br/><br/>
            <button className="btn btn-primary" onClick={this.newPrescription}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Receptas</button>
            <button className="btn btn-primary" onClick={this.newRecord}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Ligos irasas</button><br/><br/>
            Perziureti irasus: <br/><br/>
          <button className="btn btn-primary" onClick={this.allPrescriptions}><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Receptai</button>
            <button className="btn btn-primary" onClick={this.allRecords}><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Ligos irasai</button>
            </div>
        );
    }
}
