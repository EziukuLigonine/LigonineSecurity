import React from 'react';
import {UserCardComponent} from "./UserCardComponent";

export var UserListComponent = (props) => {
    const users = props.users.map((user, index) => {
        var cardComponent = <UserCardComponent
            key={index}
            id={user.id}
            name={user.name}
            surname={user.surname}
            username={user.username}
            password={user.password}
            specialisation={user.specialisation}
            history={props.history}
        />;
        return (
            cardComponent
        );
    });

    return (
        <div className="row">
            {users}
        </div>
    );
};
