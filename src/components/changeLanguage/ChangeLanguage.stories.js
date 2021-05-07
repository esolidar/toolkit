import ChangeLanguage from './ChangeLanguage';

export default {
  title: 'Components/ChangeLanguage',
  component: ChangeLanguage,
};

const Template = args => (
  <div style={{ background: '#163352', width: '100%', padding: '15px' }}>
    <ChangeLanguage {...args} />
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ChangeLanguage.test.js'],
};
Default.args = {
  languages: [
    { id: 0, name: 'pt', translate: 'Português (PT)' },
    { id: 1, name: 'br', translate: 'Português (BR)' },
    { id: 2, name: 'en', translate: 'English' },
  ],
  onChangeLang: () => console.log(''),
  currentLang: 'pt',
};
