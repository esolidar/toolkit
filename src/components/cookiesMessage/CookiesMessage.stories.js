import React from 'react';
import CookiesMessage from './CookiesMessage';

export default {
  title: 'Components/CookiesMessage',
  component: CookiesMessage,
};

const Template = args => <CookiesMessage {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['CookiesMessage.test.js'],
};
Default.args = {
  message:
    "A eSolidar utiliza cookies - pequenos ficheiros informativos - para melhorar a sua experiência de navegação. Ao continuar, aceita que o façamos, a não ser que altere as suas definições, pelo que queremos que consulte a nossa Política de Cookies, antes de prosseguir <a href='#'>aqui</a>",
  btnText: 'Concordo',
  btnClick: () => {
    console.log('aqui');
  },
};
