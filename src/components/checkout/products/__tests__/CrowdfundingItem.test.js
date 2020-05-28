/* global expect */

import React from 'react';
import { shallow } from 'enzyme';
import CrowdfundingItem from '../CrowdfundingItem';

const item = {
  currency: {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: '1.087',
    symbol: '€',
  },
  id: 42,
  campaign: {
    id: 38,
    user_id: null,
    institution_id: 1,
    company_id: 1,
    sub_category_id: 91,
    product_id: 42,
    title: 'Phasellus rhoncus, justo vitae consectetur ultrices, nisi lorem gravida justo',
    title_en: null,
    tags: null,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id velit sit amet nisi fringilla fringilla sed convallis tortor. Maecenas commodo vestibulum ligula ut facilisis.',
    description_en: null,
    video: 'null',
    reward: 0,
    reward_description: null,
    goal: 70000,
    minimum_contribution: 10,
    currency_id: 1,
    start_date: '2020-04-15 12:00:00',
    end_date: '2020-06-30 12:00:00',
    timezone: 'UTC',
    position: 0,
    recipient_visible: 1,
    status: 'approved',
    esolidar_list: 0,
    contributes_count: 0,
    contributes_sum: 0,
    product: {
      id: 42,
      payment_method_id: 11,
      type: 'crowdfunding',
      updated_at: '2020-04-23 15:37:18',
      created_at: '2020-04-15 09:48:10',
      payment_method: {
        id: 11,
        paypal: 1,
        stripe: 1,
        sibs_checkout: 0,
        sibs_mbway: 0,
        sibs_multibanco: 0,
        sibs_directdebit_sepa: 0,
        sibs_cc: 0,
        utrust: 0,
      },
    },
    institution: {
      name: 'institution name',
    },
    images: [
      {
        id: 23,
        crowdfunding_id: 38,
        image: 'crowdfundings/707314d0-4db8-45ac-91df-5cacfc548428.jpeg',
      },
    ],
    currency: {
      id: 1,
      name: 'Euro',
      small: 'EUR',
      value: '1.087',
      symbol: '€',
      status: true,
    },
  },
  type: 'crowdfunding',
  amount: 10,
  quantity: 1,
  extra: {
    hidden: 0,
    message: '',
    checked: 1,
  },
};
const itemNoInstitution = {
  currency: {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: '1.087',
    symbol: '€',
  },
  id: 42,
  campaign: {
    id: 38,
    user_id: null,
    institution_id: null,
    company_id: 1,
    sub_category_id: 91,
    product_id: 42,
    title: 'Phasellus rhoncus, justo vitae consectetur ultrices, nisi lorem gravida justo',
    title_en: null,
    tags: null,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id velit sit amet nisi fringilla fringilla sed convallis tortor. Maecenas commodo vestibulum ligula ut facilisis.',
    description_en: null,
    video: 'null',
    reward: 0,
    reward_description: null,
    goal: 70000,
    minimum_contribution: 10,
    currency_id: 1,
    start_date: '2020-04-15 12:00:00',
    end_date: '2020-06-30 12:00:00',
    timezone: 'UTC',
    position: 0,
    recipient_visible: 1,
    status: 'approved',
    esolidar_list: 0,
    contributes_count: 0,
    contributes_sum: 0,
    product: {
      id: 42,
      payment_method_id: 11,
      type: 'crowdfunding',
      updated_at: '2020-04-23 15:37:18',
      created_at: '2020-04-15 09:48:10',
      payment_method: {
        id: 11,
        paypal: 1,
        stripe: 1,
        sibs_checkout: 0,
        sibs_mbway: 0,
        sibs_multibanco: 0,
        sibs_directdebit_sepa: 0,
        sibs_cc: 0,
        utrust: 0,
      },
    },
    institution: null,
    images: [
      {
        id: 23,
        crowdfunding_id: 38,
        image: 'crowdfundings/707314d0-4db8-45ac-91df-5cacfc548428.jpeg',
      },
    ],
    currency: {
      id: 1,
      name: 'Euro',
      small: 'EUR',
      value: '1.087',
      symbol: '€',
      status: true,
    },
  },
  type: 'crowdfunding',
  amount: 10,
  quantity: 1,
  extra: {
    hidden: 0,
    message: '',
    checked: 1,
  },
};
const onChangCheckBox = () => {};
const onAddToCheckout = () => {};
const onChangeMessage = () => {};
const removeCartItem = () => {};
const nextStep = () => {};
const env = {
  serverlessResizeImage: 'https://image.testesolidar.com',
};
const translateMessage = () => 'Some text';

describe('CrowdfundingItem component', () => {
  it('renders CrowdfundingItem correctly', () => {
    const component = shallow(<CrowdfundingItem
      item={item}
      translateMessage={translateMessage}
      env={env}
      nextStep={nextStep}
      removeCartItem={removeCartItem}
      onChangeMessage={onChangeMessage}
      onAddToCheckout={onAddToCheckout}
      onChangCheckBox={onChangCheckBox}
    />);
    expect(component).toHaveLength(1);
    expect(component.find('TextareaField')).toHaveLength(1);
    expect(component.find('.checkout-supports')).toHaveLength(1);
  });

  it('renders CrowdfundingItem correctly without institution', () => {
    const component = shallow(<CrowdfundingItem
      item={itemNoInstitution}
      translateMessage={translateMessage}
      env={env}
      nextStep={nextStep}
      removeCartItem={removeCartItem}
      onChangeMessage={onChangeMessage}
      onAddToCheckout={onAddToCheckout}
      onChangCheckBox={onChangCheckBox}
    />);
    expect(component).toHaveLength(1);
    expect(component.find('.checkout-supports')).toHaveLength(0);
  });
});
