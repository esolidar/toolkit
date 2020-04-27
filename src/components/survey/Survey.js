import React from 'react';
import PropTypes from 'prop-types';
import FormQuestionsGenerator from '../formQuestionsGenerator/FormQuestionsGenerator';

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
  <div className="survey col-md-9">
    {status === 'A'
        && (
          <div className="col-sm-12">
            <div className="box survey-form-title">
              <h3>
                {formTitleText}
              </h3>
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
                  <button type="submit" className="btn btn-submit-servey" disabled={isLoading}>
                    {SubmitSurveyText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
    {status === 'D'
        && (
          <div className="col-sm-12 survey-disabled">
            <div className="box">
              <h3 className="text-center">
                {disabledText}
              </h3>
            </div>
          </div>
        )}
  </div>
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
