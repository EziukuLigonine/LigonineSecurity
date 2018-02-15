import React from 'react';
import {DoctorComponent} from "./DoctorComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var DoctorListComponent = (props) => {

    const doctors = props.doctors.map((doctor, index) => {
        return (
            <DoctorComponent
                key = {index}
                id = {doctor.id}
                name = {doctor.name}
                surname = {doctor.surname}
                username = {doctor.username}
                password = {doctor.password}
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
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Specialisation</th>
                            <th></th>
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
