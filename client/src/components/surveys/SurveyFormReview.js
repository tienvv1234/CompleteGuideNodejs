// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  //  onClick={submitSurvey(formValues) the instant that
  // this component is rendered and the button tagged
  // right here is inters executed by our javascript interpreter
  // the submit survey will be called instantly because this look like a function call.
  // ==> so in order for this thing to be kind of deplayed in execution until user actually clicks on it
  // so we are going to wrap this with an arrow function
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>

      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

// after wire up the connect function connect()(SurveyFormReview)
// we need the function mapStateToProps for taking our redux state and kind of
// transforming them into some props to send down to the component
function mapStateToProps(state) {
  // this state will return all payload data in combine reducer
  // form reducers being provided by redux form
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(
  mapStateToProps,
  actions,
)(withRouter(SurveyFormReview));
// when using withRouter so now the survey form view know about
// the history object that is provided by react router
// that object is passed into the component on the prop's object