import Survey from './Survey';

export default {
  title: 'Components/Survey',
  component: Survey,
};

const Template = args => <Survey {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['Survey.test.js'],
};
Default.args = {
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
      title: 'Eu percebo como a minha função contribui para o sucesso da empresa.',
      title_en: 'I understand how my job contibutes to the success of the company.',
      form_question_id: 1,
      kpi: 'none',
      required: 1,
      status: 'A',
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
