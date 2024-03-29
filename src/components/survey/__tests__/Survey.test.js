/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { shallow } from 'enzyme';
import Survey from '../index';

const props = {
  status: 'A',
  formTitleText: 'Your Opinion Counts.',
  formSummaryText:
    "To your company provide you the best experience possible, we'd like your help with this very brief, 30 second survey.",
  onSubmit: () => {},
  locale: 'pt',
  QuestionsGeneratorState: {},
  QuestionsGeneratorQuestions: [
    {
      id: 1,
      form_question_id: 1,
      kpi: 'none',
      required: 1,
      status: 'A',
      title: 'Eu percebo como a minha função contribui para o sucesso da empresa.',
      title_en: 'I understand how my job contibutes to the success of the company.',
      type: 'value',
      updated_at: '2019-12-04 10:40:31',
      created_at: '2017-07-04 15:28:35',
    },
  ],
  QuestionsGeneratorOnChange: () => {},
  QuestionsGeneratorErrors: {},
  SubmitSurveyText: 'Submit',
  errorFieldRequiredMessage: 'This field is required',
  NotAtAllText: 'Not at all',
  AbsolutelyText: 'Absolutely',
  isLoading: false,
  disabledText: 'disabled',
};

describe('Survey component', () => {
  it('renders Survey correctly', () => {
    const component = shallow(<Survey {...props} />);
    expect(component.find('FormQuestionsGenerator')).toHaveLength(1);
    expect(component).toHaveLength(1);
  });
});
