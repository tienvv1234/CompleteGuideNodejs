// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // reduxForm helper here is what allows redux form to communicate with our redux store
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    // the function handleSubmit from the reduxForm
    // <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}> this have no parentheses -->() because we are not invoking on surveys submit so we do not have a set of parentheses after it
    // remember if we passed a set or if we placed a set of parentheses right here that call back function would be call instant that our javascript interperte evalueted this line of code. and we don't that 
    // we want to only call this function after the user has submitted or attempt to dismiss the form
    // note nếu thêm this.props.onSurveyFormSubmi() function sẽ call function này khi mà render nếu bỏ this.props.onSurveyFormSubmi thi nó sẽ call khi người dùng ấn vào submit form
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveyFormSubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // if the errors have property map to name of the field,
  // then redux form will automatically take the error
  // we set in there and pass it as a prop to our custom field component (SurveyField)
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }
  });

  return errors;
}

// the reduxForm allows our component to communicate with the redux store at the top of our application that is enclosed by that provider tag
// the function validate will automatically run when user submit the form
// this is reduxForm helper
export default reduxForm({
  validate,
  form: 'surveyForm', // this will return reduxForm with key 'surveyForm'
  destroyOnUnmount: false // default is true and will remove all values of fields, if false will keep the values for all fields, we tell reduxForm don't try to get rid of the values
})(SurveyForm);