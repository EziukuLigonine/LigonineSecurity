import React from 'react';
import {DoctorCardComponent} from "./DoctorCardComponent";

export var DoctorListComponent = (props) => {
    const doctors = props.doctors.map((doctor, index) => {
        var cardComponent = <DoctorCardComponent
            key={index}
            id={doctor.id}
            name={doctor.name}
            surname={doctor.surname}
            username={doctor.doctorname}
            password={doctor.password}
            specialisation={doctor.specialisation}
            history={props.history}
        />;
        return (
            cardComponent
        );
    });

    return (
        <div className="row">
            {doctors}
        </div>
    );
};
