import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AdminUserComponent} from "./AdminUserComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var AdminUserListComponent = (props) => {

    const users = props.users.map((user, index) => {
        return (
            <AdminUserComponent
                key = {index}
                id = {user.id}
                name = {user.name}
                surname = {user.surname}
                username = {user.username}
                specialisation = {user.specialisation}
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
