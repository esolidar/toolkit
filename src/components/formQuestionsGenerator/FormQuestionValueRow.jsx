import React from 'react';
import PropTypes from 'prop-types';

const FormQuestionValueRow = ({ question, onChange, NotAtAllText, AbsolutelyText }) => {
  const questionInputRadioValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const listInputRadioValueOptions = questionInputRadioValues.map(value => (
    <label
      key={value}
      className="button-label"
      htmlFor={`${question.id}_${question.form_question_id}_${value}`}
    >
      <input
        id={`${question.id}_${question.form_question_id}_${value}`}
        className="hidden"
        type="radio"
        name={`form_question_${question.form_question_id}`}
        value={value}
        onChange={onChange}
      />

      <h3>{value}</h3>
    </label>
  ));

  return (
    <div className="com-sm-12">
      <div className="survey-value-label-1">{NotAtAllText}</div>
      {listInputRadioValueOptions}
      <div className="survey-value-label-2">{AbsolutelyText}</div>
    </div>
  );
};

FormQuestionValueRow.propTypes = {
  question: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  NotAtAllText: PropTypes.string.isRequired,
  AbsolutelyText: PropTypes.string.isRequired,
};

export default FormQuestionValueRow;
