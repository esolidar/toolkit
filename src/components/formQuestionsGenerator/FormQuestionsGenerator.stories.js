import FormQuestionsGenerator from './FormQuestionsGenerator';

export default {
  title: 'Components/FormQuestionsGenerator',
  component: FormQuestionsGenerator,
};

const Template = args => (
  <div className="survey">
    <FormQuestionsGenerator {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  locale: 'pt',
  state: {},
  questions: [
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
  onChange: () => {},
  errorFieldRequiredMessage: 'This field is required',
  NotAtAllText: 'Not at all',
  AbsolutelyText: 'Absolutely',
  errors: {},
};
