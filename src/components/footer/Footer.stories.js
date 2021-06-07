import React from 'react';
import Footer from './Footer';

export default {
  title: 'Components/Footer/Footer',
  component: Footer,
};

const Template = args => (
  <div style={{ position: 'relative', minHeight: '300px' }}>
    <Footer {...args} />
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  jest: ['Footer.test.js'],
};
Default.args = {
  newsletterTitle: 'Subscribe to our newsletter',
  social: {
    title: 'Follow us',
    icons: [
      { name: 'facebook', url: 'https://www.facebook.com/esolidar' },
      { name: 'instagram', url: '#' },
      { name: 'twitter', url: '#' },
      { name: 'youtube', url: '#' },
      { name: 'linkedin', url: '#' },
    ],
  },
  copyright: 'All rights reserved.',
  currentLang: 'en',
  onChangeLang: () => console.log('onChangeLang'),
  currencyChanged: () => console.log('currencyChanged'),
  languages: [
    { id: 0, name: 'en', translate: 'English' },
    { id: 1, name: 'pt', translate: 'Português (PT)' },
    { id: 2, name: 'br', translate: 'Português (BR)' },
  ],
  showCurrency: true,
  currentCurrency: {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: 1.114,
    symbol: '€',
    status: 1,
    lastUpdate: '2019-12-16 12:00:03',
  },
  currencies: [
    {
      id: 1,
      name: 'Euro',
      small: 'EUR',
      value: 1.114,
      symbol: '€',
      status: 1,
      lastUpdate: '2019-12-16 12:00:03',
    },
    {
      id: 1,
      name: 'U. S. Dollar',
      small: 'USD',
      value: 1.114,
      symbol: '€',
      status: 1,
      lastUpdate: '2019-12-16 12:00:03',
    },
  ],
  mainMenuFooter: {
    title: 'Learn',
    links: [
      { text: 'Contact us', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
      { text: 'Help center', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
      { text: 'Resources', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
      { text: 'Blog', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
    ],
  },
  secondMenuFooter: {
    title: 'Why esolidar?',
    links: [
      { text: 'Business', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
      { text: 'Personal', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
      { text: 'Nonprofit', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
    ],
  },
  bottomMenuFooter: {
    links: [
      { text: 'Terms & Conditions', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
      { text: 'Privacy Policy', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
    ],
  },
};
