import React from 'react';
import ValidateTelephone from './ValidateTelephone';

export default {
  title: 'Components/ValidateTelephone',
  component: ValidateTelephone,
};

const Template = args => <ValidateTelephone {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['ValidateTelephone.test.js'],
};
Default.args = {
  showOptionalLabel: true,
  localStorage: {
    lang: 'pt',
    user: JSON.stringify({ id: '51792', phones: [] }),
  },
  mobileValidatePost: () => {},
  validatePhone: {
    code: 200,
    data: {
      phone: {
        user_id: 1,
        phone: '+351919552199',
        code: 1955,
        twilio_sid: 'SM88bee75b4d214539a7f1db2828ac3ed3',
        dateAdded: '2020-12-28 12:40:19',
        updatedDate: '2020-12-28 12:40:19',
        id: 146,
      },
    },
  },
  mobileConfirmPost: () => {},
  confirmPhone: {
    code: 200,
    data: {
      confirm: true,
      phone: {
        id: 147,
        user_id: 1,
        phone: '+351919552199',
        code: '2869',
        main: 0,
        twilio_sid: 'SMeab42f2f139e44be90289f3aea71b4e3',
        verified: 1,
        updatedDate: '2020-12-28 12:54:29',
        dateAdded: '2020-12-28 12:54:09',
      },
    },
  },
};
