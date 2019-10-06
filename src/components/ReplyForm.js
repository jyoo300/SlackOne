import React from 'react';
import {Field, reduxForm} from 'redux-form';

class ReplyForm extends React.Component {
	//if there is an error in the input form, an error message will be displayed
	renderError({error, touched}) {
		if(touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({input, label, meta}) => {
		const className = `field ${meta.error && meta.touched ? 'error': '' }`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues); 
	};

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				  <Field name="name" component={this.renderInput} label="Enter Your Name" />
				  <Field name="body" component={this.renderInput} label="Enter Your Reply" />
				  <button className="ui button primary">Submit</button>
			</form>
		);
	}
}

//validates that values are being entered for each variable
const validate = (formValues) => {
	const errors = {};
	if(!formValues.body) {
		errors.body = 'You must enter a reply';
	}
	if(!formValues.name) {
		errors.name = 'You must enter a name';
	}
	return errors;
};

export default reduxForm({
	form: 'replyForm',
	validate: validate
})(ReplyForm);