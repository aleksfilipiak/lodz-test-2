import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createUser} from "../actions";

class UserCreate extends Component{
    renderField(field){

        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return(
            <div className={className}>
                <label>{field.label}</label>
                <input type="text" {...field.input} className="form-control"/>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values){
        this.props.createUser(values,()=>{
            this.props.history.push("/"); //callback
        });
    }

    render(){
        const {handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                label="Username"
                name="username"
                component={this.renderField}
                />

                <Field
                    label="Name"
                    name="name"
                    component={this.renderField}
                />
                <Field
                    label="Email"
                    name="email"
                    component={this.renderField}
                />
                <Field
                    label="Street"
                    name="address.street"
                    component={this.renderField}
                />
                <Field
                    label="Suite"
                    name="address.suite"
                    component={this.renderField}
                />
                <Field
                    label="City"
                    name="address.city"
                    component={this.renderField}
                />
                <Field
                    label="Zip code"
                    name="address.zipcode"
                    component={this.renderField}
                />
                <Field
                    label="Lat"
                    name="address.geo.lat"
                    component={this.renderField}
                />
                <Field
                    label="Lng"
                    name="address.geo.lng"
                    component={this.renderField}
                />
                <Field
                    label="Phone"
                    name="phone"
                    component={this.renderField}
                />
                <Field
                    label="Website"
                    name="website"
                    component={this.renderField}
                />
                <Field
                    label="Company name"
                    name="company.name"
                    component={this.renderField}
                />
                <Field
                    label="Company Catch Phrase"
                    name="company.catchPhrase"
                    component={this.renderField}
                />
                <Field
                    label="Company bs"
                    name="company.bs"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-success">Create</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if(!values.username){
        errors.username = "Give a username";
    }
    if(!values.lat){
        errors.lat = "Give a lat";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: "UserNewForm"
})(connect(null, {createUser})(UserCreate))