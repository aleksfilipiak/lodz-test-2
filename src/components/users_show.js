import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchUser, deleteUser} from "../actions";
import {Link} from "react-router-dom";


class UserShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchUser(id);
    }

    onDeleteClick(){
        const {id} = this.props.match.params;

        this.props.deleteUser(id,()=>{
            this.props.history.push("/")
        })
    }

    render() {
        const {user} = this.props;

        if(!user){
            return <div>Something went wrong...</div>
        }

        return(
            <div>

                <h3>User: {user.username}</h3>
                <h5>Name: {user.name}</h5>
                <h5>Email {user.email}</h5>
                <h6>Address:</h6>
                <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Street: {user.address.street}</li>
                    <li className="list-group-item">Suite: {user.address.suite}</li>
                    <li className="list-group-item">City: {user.address.city}</li>
                    <li className="list-group-item">Zipcode: {user.address.zipcode}</li>
                    <li className="list-group-item">Localisation: lat {user.address.geo.lat} lng {user.address.geo.lng}</li>
                </ul>
                <h6>Company</h6>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{user.company.name}</li>
                    <li className="list-group-item">{user.company.catchPhrase}</li>
                    <li className="list-group-item">{user.company.bs}</li>
                    <li className="list-group-item">{user.phone}</li>
                    <li className="list-group-item">{user.website}</li>
                </ul>
                <button
                className="btn btn-danger mr-2"
                onClick={this.onDeleteClick.bind(this)}
                >
                    Delete user
                </button>
                <Link to="/" className="btn btn-primary">Back to list</Link>
            </div>
        )
    }
}


function mapStateToProps({users}, ownProps) {
    return {user: users[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchUser, deleteUser})(UserShow);