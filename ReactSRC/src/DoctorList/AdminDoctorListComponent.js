import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AdminDoctorComponent} from "./AdminDoctorComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var AdminDoctorListComponent = (props) => {

    const doctors = props.doctors.map((doctor, index) => {
        return (
            <AdminDoctorComponent
                key = {index}
                id = {doctor.id}
                name = {doctor.name}
                surname = {doctor.surname}
                doctorname = {doctor.doctorname}
                specialisation = {doctor.specialisation}
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
                            <th>Specialisation</th>
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {doctors}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
