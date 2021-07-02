import React from 'react';
import NotificationsBell from './NotificationsBell';

export default {
  title: 'Components/Header/NotificationsBell',
  component: NotificationsBell,
};

const Template = args => (
  <div className="d-flex justify-content-end">
    <NotificationsBell {...args} />
  </div>
);

export const Business = Template.bind({});
export const Community = Template.bind({});
export const NoUnreadNotifications = Template.bind({});
export const EmptyState = Template.bind({});

Business.parameters = {
  jest: ['NotificationsBell.test.js'],
};
Business.args = {
  notificationsHeadTitle: 'Notificações',
  totalNotifications: '20',
  onToggle: () => console.log(''),
  markAllAsReadTitle: 'Marcar todas como lidas',
  markAllAsReadFunc: () => console.log(''),
  handleScrollFunc: () => console.log(''),
  notifications: [
    {
      id: '49690f5e-ea1f-4475-af94-a4588dcac136',
      sender_id: null,
      receiver_id: '9',
      photo: {},
      detail:
        'https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-DETAIL.png',
      thumb:
        'https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-THUMB.png',
      cover_image:
        'https://cdn.testesolidar.com/companies/1/cover/,c761bea5-709f-4ac9-8195-9c347c78bc84.jpg',
      read_at: null,
      url: 'https://business.testesolidar.com/requests/detail/117#report',
      text: 'Finalize a sua iniciativa <u>Lorem Ipsum</u>, faça uma avaliação e anexe arquivos.',
      type: 'RequestNotReviewedByCompanyNotification',
      target: '_SELF',
      updated_at: '2020-02-07T15:47:28.000000Z',
      created_at: '2020-01-23T14:42:08.000000Z',
    },
    {
      id: '49690f5e-ea1f-4475-af94-a4588dcac137',
      sender_id: null,
      receiver_id: '9',
      photo: {},
      detail:
        'https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-DETAIL.png',
      thumb:
        'https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-THUMB.png',
      cover_image:
        'https://cdn.testesolidar.com/companies/1/cover/,c761bea5-709f-4ac9-8195-9c347c78bc84.jpg',
      read_at: '2020-02-07T15:47:28.000000Z',
      url: 'https://business.testesolidar.com/requests/detail/117#report',
      text: 'Finalize a sua iniciativa <u>Lorem Ipsum</u>, faça uma avaliação e anexe arquivos.',
      type: 'RequestNotReviewedByCompanyNotification',
      target: '_SELF',
      updated_at: '2020-02-07T15:47:28.000000Z',
      created_at: '2020-01-23T14:42:08.000000Z',
    },
  ],
  loadMoreFunc: () => console.log(''),
  hasMoreToLoad: false,
  markAsReadFunc: () => console.log(''),
};

Community.parameters = {
  jest: ['NotificationsBell.test.js'],
};
Community.args = {
  notificationsHeadTitle: 'Notificações',
  totalNotifications: '20',
  onToggle: () => console.log(''),
  markAllAsReadTitle: 'Marcar todas como lidas',
  markAllAsReadFunc: () => console.log(''),
  handleScrollFunc: () => console.log(''),
  notifications: [
    {
      notification_company_id: '1007',
      notification_description: 'Adicionou uma nova publicação.',
      notification_id: '182008',
      notification_image:
        'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/companies/5baa54d4-775a-40fa-81ef-8312226eea07.png',
      notification_image_alt: 'eSolidar',
      notification_image_type: 'company',
      notification_read: '0',
      notification_streamimage: 'amazons3',
      notification_time: '2021-06-01 07:41:19',
      notification_title_name: 'eSolidar',
      notification_url: 'https://community.esolidar.com/social-feed?post=579',
      notification_url_title: 'eSolidar',
      notification_user_id: null,
    },
    {
      notification_company_id: '1007',
      notification_description: 'Adicionou uma nova publicação.',
      notification_id: '182009',
      notification_image:
        'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/companies/5baa54d4-775a-40fa-81ef-8312226eea07.png',
      notification_image_alt: 'eSolidar',
      notification_image_type: 'company',
      notification_read: '1',
      notification_streamimage: 'amazons3',
      notification_time: '2021-06-01 07:41:19',
      notification_title_name: 'eSolidar',
      notification_url: 'https://community.esolidar.com/social-feed?post=579',
      notification_url_title: 'eSolidar',
      notification_user_id: null,
    },
  ],
  loadMoreFunc: () => console.log(''),
  hasMoreToLoad: false,
  markAsReadFunc: () => console.log(''),
  showMarkAllAsReadBtn: false,
};

NoUnreadNotifications.parameters = {
  jest: ['NotificationsBell.test.js'],
};
NoUnreadNotifications.args = {
  notificationsHeadTitle: 'Notificações',
  totalNotifications: '20',
  onToggle: () => console.log(''),
  markAllAsReadTitle: 'Marcar todas como lidas',
  markAllAsReadFunc: () => console.log(''),
  handleScrollFunc: () => console.log(''),
  notifications: [
    {
      notification_company_id: '1007',
      notification_description: 'Adicionou uma nova publicação.',
      notification_id: '182008',
      notification_image:
        'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/companies/5baa54d4-775a-40fa-81ef-8312226eea07.png',
      notification_image_alt: 'eSolidar',
      notification_image_type: 'company',
      notification_read: '1',
      notification_streamimage: 'amazons3',
      notification_time: '2021-06-01 07:41:19',
      notification_title_name: 'eSolidar',
      notification_url: 'https://community.esolidar.com/social-feed?post=579',
      notification_url_title: 'eSolidar',
      notification_user_id: null,
    },
    {
      notification_company_id: '1007',
      notification_description: 'Adicionou uma nova publicação.',
      notification_id: '182009',
      notification_image:
        'https://esolidar-production-uploads.s3.eu-west-1.amazonaws.com/companies/5baa54d4-775a-40fa-81ef-8312226eea07.png',
      notification_image_alt: 'eSolidar',
      notification_image_type: 'company',
      notification_read: '1',
      notification_streamimage: 'amazons3',
      notification_time: '2021-06-01 07:41:19',
      notification_title_name: 'eSolidar',
      notification_url: 'https://community.esolidar.com/social-feed?post=579',
      notification_url_title: 'eSolidar',
      notification_user_id: null,
    },
  ],
  loadMoreFunc: () => console.log(''),
  hasMoreToLoad: false,
  markAsReadFunc: () => console.log(''),
};

EmptyState.parameters = {
  jest: ['NoNotifications.test.js'],
};
EmptyState.args = {
  notificationsHeadTitle: 'Notificações',
  totalNotifications: '20',
  onToggle: () => console.log(''),
  markAllAsReadTitle: 'Marcar todas como lidas',
  markAllAsReadFunc: () => console.log(''),
  handleScrollFunc: () => console.log(''),
  notifications: [],
  loadMoreFunc: () => console.log(''),
  hasMoreToLoad: false,
  markAsReadFunc: () => console.log(''),
};
