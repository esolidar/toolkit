import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import FormQuestionsGenerator from '../formQuestionsGenerator';
import Button from '../../elements/button';

const Survey = ({
  status,
  formTitleText,
  formSummaryText,
  onSubmit,
  locale,
  QuestionsGeneratorState,
  QuestionsGeneratorQuestions,
  QuestionsGeneratorOnChange,
  QuestionsGeneratorErrors,
  SubmitSurveyText,
  errorFieldRequiredMessage,
  NotAtAllText,
  AbsolutelyText,
  isLoading,
  disabledText,
}) => (
  <Col sm={12} lg={9} className="survey">
    {status === 'A' && (
      <Col sm={12}>
        <div className="box survey-form-title">
          <h3>{formTitleText}</h3>
          <p>{formSummaryText}</p>
        </div>
        <div className="content-form">
          <form
            id="form-survey"
            onSubmit={onSubmit}
            method="post"
            encType="application/x-www-form-urlencoded"
          >
            <FormQuestionsGenerator
              locale={locale}
              state={QuestionsGeneratorState}
              questions={QuestionsGeneratorQuestions}
              onChange={QuestionsGeneratorOnChange}
              errors={QuestionsGeneratorErrors}
              errorFieldRequiredMessage={errorFieldRequiredMessage}
              NotAtAllText={NotAtAllText}
              AbsolutelyText={AbsolutelyText}
            />
            <div className="text-right">
              <Button
                extraClass="primary-full"
                text={SubmitSurveyText}
                type="submit"
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </Col>
    )}
    {status === 'D' && (
      <Col sm={12} className="survey-disabled">
        <div className="box">
          <h3 className="text-center">{disabledText}</h3>
        </div>
      </Col>
    )}
  </Col>
);

Survey.propTypes = {
  status: PropTypes.string.isRequired,
  formTitleText: PropTypes.string,
  formSummaryText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  QuestionsGeneratorState: PropTypes.object.isRequired,
  QuestionsGeneratorQuestions: PropTypes.array.isRequired,
  QuestionsGeneratorOnChange: PropTypes.func.isRequired,
  QuestionsGeneratorErrors: PropTypes.object,
  SubmitSurveyText: PropTypes.string.isRequired,
  errorFieldRequiredMessage: PropTypes.string.isRequired,
  NotAtAllText: PropTypes.string.isRequired,
  AbsolutelyText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  disabledText: PropTypes.string.isRequired,
};

export default Survey;
