import React from 'react';
import {AdminComponent} from "./AdminComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var AdminListComponent = (props) => {

    const admins = props.admins.map((admin, index) => {
        return (
            <AdminComponent
                key = {index}
                id = {admin.id}
                name = {admin.name}
                surname = {admin.surname}
                username = {admin.username}
                password = {admin.password}
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {admins}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
