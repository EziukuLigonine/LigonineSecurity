import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export class AdminContainer extends Component {
    newDoctor = () => {
        this.props.history.push("/admin/doctors/new");
    };
    newPatient = () => {
        this.props.history.push("/admin/patients/new");
    };
    newPharmacist = () => {
        this.props.history.push("/admin/pharmacists/new");
    };
    newAdmin = () => {
        this.props.history.push("/admin/admins/new");
    };

    allDoctors = () => {
      this.props.history.push("/doctors");
    }
    allPatients = () => {
      this.props.history.push("/patients");
    }
    allPharmacists = () => {
      this.props.history.push("/pharmacists");
    }
    allAdmins = () => {
      this.props.history.push("/admins");
    }


    render() {
        return (
            <div>
              Prideti nauja vartotoja: <br/><br/>
            <button className="btn btn-primary" onClick={this.newDoctor}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Daktaras</button>
              <button className="btn btn-primary" onClick={this.newPatient}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Pacientas</button>
              <button className="btn btn-primary" onClick={this.newPharmacist}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Vaistininkas</button>
              <button className="btn btn-primary" onClick={this.newAdmin}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Administratorius</button> <br/><br/>
              Perziureti esamus vartotojus: <br/><br/>
            <button className="btn btn-primary" onClick={this.allDoctors}><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Daktarai</button>
              <button className="btn btn-primary" onClick={this.allPatients}><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Pacientai</button>
              <button className="btn btn-primary" onClick={this.allPharmacists}><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Vaistininkai</button>
              <button className="btn btn-primary" onClick={this.allAdmins}><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Administratoriai</button>

            </div>
        );
    }
}
