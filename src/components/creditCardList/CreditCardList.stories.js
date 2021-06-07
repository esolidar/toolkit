import React from 'react';
import CreditCardList from './CreditCardList';

export default {
  title: 'Components/CreditCardList',
  component: CreditCardList,
};

const Template = args => <CreditCardList {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['CreditCardList.test.js'],
};
Default.args = {
  getStripeCreditCardlist: () => {},
  postStripeCreditCard: () => {},
  stripeCreditCard: {},
  showAddBtnCreditCard: true,
  stripeCreditCardList: {
    code: 200,
    data: [],
  },
  env: {
    stripe: {
      publishableKey:
        'pk_test_51HwraUDRsG5ScpiIgYWfWizITsiVhiyaKECi0YaOCVo5GoCB4kv2EXSRgsPowMfisHMUU9M7nn2Kz4AU2h0EtO2000BTReJHG1',
    },
  },
};
