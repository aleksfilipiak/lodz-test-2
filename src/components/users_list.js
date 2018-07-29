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
                        <button className="btn btn-primary">See profile</button>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
            <Link to="/users/new">Create new user</Link>
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
