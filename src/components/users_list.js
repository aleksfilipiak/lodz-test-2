import React, {Component} from "react";
import {connect} from "react-redux";
import _ from "lodash";
import {Link} from "react-router-dom"
import {fetchUsers} from "../actions";

class UsersList extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }


    renderUsers() {
        return _.map(this.props.users, user => {
            return (
                <li className="list-group-item" key={user.id}>
                    <p>User: {user.username}</p>
                    <p>Name: {user.name}</p>
                    <Link to={`/${user.id}`}>
                        <button className="btn btn-primary">View full profile</button>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Users list</h1>
                    <p className="lead">This is demonstration of CRUD actions. Click to create new user or view details of one of them and delete it.</p>
                    <hr className="my-4"/>
                    <p>While using API from "http://jsonplaceholder.typicode.com" CRUD actions won't be visible direct on layout. You need to look at Network tools in your browser to see that actions are working properly.</p>
                </div>
            <Link to="/users/new" className="btn btn-success mb-3">Create new user</Link>
            <ul className="list-group">
                {this.renderUsers()}
            </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {users: state.users};
}

export default connect(mapStateToProps, {fetchUsers})(UsersList)
