import ChangeLanguage from './ChangeLanguage';
import variables from '../../assets/sass/_export.scss';

export default {
  title: 'Components/ChangeLanguage',
  component: ChangeLanguage,
};

const Template = args => (
  <div
    style={{ background: variables['theme-colors-dark-primary'], width: '100%', padding: '15px' }}
  >
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
