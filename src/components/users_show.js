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
            return <div>Please, wait a moment</div>
        }

        return(
            <div>
                <Link to="/">Back to list</Link>
                <h3>{user.username}</h3>
                <h5>{user.name}</h5>
                <h5>{user.email}</h5>
                <h6>Address:</h6>
                <ul>
                    <li>Street: {user.address.street}</li>
                    <li>Suite: {user.address.suite}</li>
                    <li>City: {user.address.city}</li>
                    <li>Zipcode: {user.address.zipcode}</li>
                    <li>Localisation: lat {user.address.geo.lat} lng {user.address.geo.lng}</li>
                </ul>
                <h6>Company</h6>
                <ul>
                    <li>{user.company.name}</li>
                    <li>{user.company.catchPhrase}</li>
                    <li>{user.company.bs}</li>
                    <li>{user.phone}</li>
                    <li>{user.website}</li>
                </ul>
                <button
                className="btn btn-danger"
                onClick={this.onDeleteClick.bind(this)}
                >
                    Delete user
                </button>
            </div>
        )
    }
}


function mapStateToProps({users}, ownProps) {
    return {user: users[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchUser, deleteUser})(UserShow);