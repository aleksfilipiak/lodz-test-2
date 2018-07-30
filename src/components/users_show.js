import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchUser, deleteUser} from "../actions";
import {Link} from "react-router-dom";


class UserShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchUser(id);
    }

    onDeleteClick() {
        const {id} = this.props.match.params;

        this.props.deleteUser(id, () => {
            this.props.history.push("/")
        })
    }

    render() {
        const {user} = this.props;

        if (!user) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <div className="jumbotron">
                    <h3 className="display-2">{user.username}</h3>
                    <h5 className="lead">Name: {user.name}</h5>
                    <h5 className="lead">Email {user.email}</h5>
                    <hr className="my-1"/>
                </div>
                <h6>Address:</h6>
                <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Street: {user.address.street}</li>
                    <li className="list-group-item">Suite: {user.address.suite}</li>
                    <li className="list-group-item">City: {user.address.city}</li>
                    <li className="list-group-item">Zipcode: {user.address.zipcode}</li>
                    <li className="list-group-item">Localisation:
                        lat {user.address.geo.lat} lng {user.address.geo.lng}</li>
                </ul>
                <h6>Company</h6>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Company name: {user.company.name}</li>
                    <li className="list-group-item">Short: {user.company.catchPhrase}</li>
                    <li className="list-group-item">Tags: {user.company.bs}</li>
                    <li className="list-group-item">Phone: {user.phone}</li>
                    <li className="list-group-item">Website: {user.website}</li>
                </ul>
                <button
                    className="btn btn-danger mr-2 mt-3 mb-3"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete user
                </button>
                <Link to="/" className="btn btn-primary mt-3 mb-3">Back to list</Link>
            </div>
        )
    }
}


function mapStateToProps({users}, ownProps) {
    return {user: users[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchUser, deleteUser})(UserShow);