import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AdminPatientComponent} from "./AdminPatientComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var AdminPatientListComponent = (props) => {

    const patients = props.patients.map((patient, index) => {
        return (
            <AdminPatientComponent
                key = {index}
                id = {patient.id}
                name = {patient.name}
                surname = {patient.surname}
                username = {patient.username}
                personalId = {patient.personalId}
                dateOfBirth = {patient.dateOfBirth}
                doctorUsername = {patient.doctorUsername}
                history = {props.history}
                remove = {props.remove}
            />
        );
    });

    return (
        <div>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Username</th>
                            <th>Personal ID</th>
                            <th>Date of Birth</th>
                            <th>Doctors Username</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {patients}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
