import React from 'react';
import CrowdfundingPrivateThumb from './CrowdfundingPrivateThumb';

export default {
  title: 'Components/Crowdfundings/CrowdfundingPrivateThumb',
  component: CrowdfundingPrivateThumb,
};

const Template = args => <CrowdfundingPrivateThumb {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['CrowdfundingPrivateThumb.test.js'],
};
Default.args = {
  thumb: {
    as_company: 1,
    bank_account_data: '{}',
    comments_count: 18,
    company_id: 1,
    contributes_count: 18,
    contribution_raised: 327.05,
    created_at: '2018-01-10 11:23:32',
    created_user_id: 3,
    description: 'o cão do nel precisa de uma operaçao ao utero',
    end_date: '2020-10-20 23:00:00',
    given_directly_info: 'wdasfaf',
    goal: 500,
    iban: 'PT50 1234 4988 5445 4556 4333 0',
    id: 44,
    images: [
      {
        created_at: '2018-01-10 11:23:02',
        crowdfunding_id: 44,
        default: 1,
        id: 156,
        image:
          'https://cdn.testesolidar.com/companies/1/campaigns/88c86ff0-58e7-4cb3-9700-84dbb5a02723.jpeg',
        image_size: '171610',
        image_type: 'image/jpeg',
        position: 0,
        streamImage: 'amazons3',
        thumb: 0,
        thumbs: {
          detail:
            'https://cdn.testesolidar.com/companies/1/campaigns/88c86ff0-58e7-4cb3-9700-84dbb5a02723-DETAIL.jpeg',
          pin: 'https://cdn.testesolidar.com/companies/1/campaigns/88c86ff0-58e7-4cb3-9700-84dbb5a02723-PIN.jpeg',
          standard:
            'https://cdn.testesolidar.com/companies/1/campaigns/88c86ff0-58e7-4cb3-9700-84dbb5a02723-STANDARD.jpeg',
          thumb:
            'https://cdn.testesolidar.com/companies/1/campaigns/88c86ff0-58e7-4cb3-9700-84dbb5a02723-THUMB.jpeg',
        },
      },
    ],
    payment_method_given_directly: 1,
    payment_method_iban: 0,
    payment_method_paypal: 0,
    paypal_account: null,
    recipient: 'individual',
    recipient_name: 'Antonio Esolidar',
    recipient_user_id: 51592,
    recipient_visible: 1,
    reward: 1,
    reward_description: 'pode levar o cão para casa',
    start_date: '2020-09-20 23:00:00',
    status: 'approved',
    timezone: 'Europe/Lisbon',
    title: 'operação ao utero de um cao',
    updated_at: '2020-07-30 16:04:40',
    video: 'https://www.youtube.com/watch?v=ClHrPFGDg2o',
  },
  translations: {
    pending: 'Pending',
    startsIn: 'Starts in',
    endsIn: 'Ends in',
    endedIn: 'Ended in',
    raised: 'Raised',
  },
  convertedValue: '12.00€',
};
