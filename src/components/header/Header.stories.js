import React from 'react';
import Header from './Header';

export default {
  title: 'Components/Header/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['Header.test.js'],
};
Default.args = {
  isUserLogged: false,
  esolidarMainUrl: 'https://www.esolidar.com/',
  esolidarUrl: 'https://community.testesolidar.com/',
  esolidarBlogUrl: 'https://impactosocial.esolidar.com/',
  esolidarHelpUrl: 'https://www.help.esolidar.com/',
  businessCompanyName: '',
  dashboardUrl: '',
  institutionUrl: '',
  lang: 'pt',
};
