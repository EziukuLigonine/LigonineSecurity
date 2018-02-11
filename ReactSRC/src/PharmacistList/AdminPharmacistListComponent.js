import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AdminPharmacistComponent} from "./AdminPharmacistComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var AdminPharmacistListComponent = (props) => {

    const pharmacists = props.pharmacists.map((pharmacist, index) => {
        return (
            <AdminPharmacistComponent
                key = {index}
                id = {pharmacist.id}
                name = {pharmacist.name}
                surname = {pharmacist.surname}
                username = {pharmacist.username}
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
                            <th>id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Username</th>
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
