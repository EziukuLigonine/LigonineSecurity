import React from 'react';

export var PatientAdministrationComponent = (props) => {

    return (
        <form className="form-horizontal">

            <div className="form-group">
                <label className="col-sm-2 control-label">Name</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="name" placeholder="Name" value={props.name}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Surname</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="surname" placeholder="Surname" value={props.surname}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Username</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="username" placeholder="Username" value={props.username}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Password</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="password" placeholder="Password" value={props.password}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Personal ID</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="personalId" placeholder="Personal ID" value={props.personalId}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Date of Birth</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="dateOfBirth" placeholder="Date of Birth" value={props.dateOfBirth}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Doctor Username</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="doctorUsername" placeholder="Doctor Username" value={props.doctorUsername}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-3">
                    <button type="submit" className="btn btn-success" onClick={props.onClick}>Save</button>
                    <button type="submit" className="btn btn-default" onClick={props.history.goBack}>Cancel</button>
                </div>
            </div>
        </form>
    );
};
