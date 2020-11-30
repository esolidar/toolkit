/* eslint-disable no-prototype-builtins */
import React from 'react';
import PropTypes from 'prop-types';
import TextareaField from '../../elements/textareaField/TextareaField';
import TextField from '../../elements/textField/TextField';
import FormQuestionValueRow from './FormQuestionValueRow';

const FormQuestionsGenerator = ({
  locale,
  state,
  questions,
  onChange,
  errors,
  errorFieldRequiredMessage,
  NotAtAllText,
  AbsolutelyText,
}) => {
  const questionsList = questions.map((question) => {
    const inputValue = state[`form_question_${question.form_question_id}`] ? state[`form_question_${question.form_question_id}`] : '';
    return (
      <div className="form-group box" key={question.id}>
        {question.type === 'value' && (
        <div className="radio-wrap text-left">
          <h5>{locale !== 'en' ? question.title : question.title_en}</h5>
          <FormQuestionValueRow
            question={question}
            onChange={onChange}
            value={state[inputValue]}
            NotAtAllText={NotAtAllText}
            AbsolutelyText={AbsolutelyText}
          />
        </div>
        )}
        {question.type === 'input' && (
        <TextField
          label={locale !== 'en' ? question.title : question.title_en}
          onChange={onChange}
          error={errors.input}
          field={`form_question_${question.form_question_id}`}
          fieldTranslate=""
          value={inputValue}
        />
        )}
        {question.type === 'textarea' && (
        <TextareaField
          label={locale !== 'en' ? question.title : question.title_en}
          onChange={onChange}
          error={errors.textarea}
          field={`form_question_${question.form_question_id}`}
          fieldTranslate=""
          value={inputValue}
        />
        )}
        {errors.hasOwnProperty(`form_question_${question.form_question_id}`)
      && <span className="error">{errorFieldRequiredMessage}</span>}
      </div>
    );
  });

  return (
    <div>{questionsList}</div>
  );
};

FormQuestionsGenerator.propTypes = {
  locale: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  errorFieldRequiredMessage: PropTypes.string.isRequired,
  NotAtAllText: PropTypes.string.isRequired,
  AbsolutelyText: PropTypes.string.isRequired,
  errors: PropTypes.object,
};

export default FormQuestionsGenerator;
