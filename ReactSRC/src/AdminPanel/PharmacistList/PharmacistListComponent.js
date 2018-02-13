import React from 'react';
import {PharmacistComponent} from "./PharmacistComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var PharmacistListComponent = (props) => {

    const pharmacists = props.pharmacists.map((pharmacist, index) => {
        return (
            <PharmacistComponent
                key = {index}
                id = {pharmacist.id}
                name = {pharmacist.name}
                surname = {pharmacist.surname}
                username = {pharmacist.username}
                password = {pharmacist.password}
                companyType = {pharmacist.companyType}
                companyName = {pharmacist.companyName}
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
                            <th>Company Type</th>
                            <th>Company Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {pharmacists}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
