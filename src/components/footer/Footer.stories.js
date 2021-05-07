import Footer from './Footer';

export default {
  title: 'Components/Footer',
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
  newsletterTitle: 'Lorem Ipsum',
  socialTitle: 'Junte-se a nós',
  socialIcons: [
    { class: 'icon-facebook', url: 'https://www.facebook.com/esolidar' },
    { class: 'icon-twitter', url: '#' },
    { class: 'icon-linkedin2', url: '#' },
    { class: 'icon-google-plus', url: '#' },
  ],
  copyright: 'All rights reserved.',
  currentLang: 'pt',
  onChangeLang: () => console.log(''),
  currencyChanged: () => console.log(''),
  languages: [
    { id: 0, name: 'pt', translate: 'Português (PT)' },
    { id: 1, name: 'br', translate: 'Português (BR)' },
    { id: 2, name: 'en', translate: 'English' },
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
  mainMenuFooter: [
    { text: 'Follow us', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
    { text: 'Follow us', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
    { text: 'Follow us', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
    { text: 'Follow us', url: '#', target: '_self', lang: ['pt', 'br'] },
  ],
  secondMenuFooter: [
    { text: 'Follow us', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
    {
      text: 'Follow us',
      submenu: [
        { text: 'Follow us', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
        { text: 'Follow us', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
      ],
      lang: ['pt', 'br', 'en'],
    },
  ],
  bottomMenuFooter: [
    { text: 'Terms and Conditions', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
    { text: 'Privacy Policy', url: '#', target: '_self', lang: ['pt', 'br', 'en'] },
  ],
  addressText: 'Rua das Irmãs Missionárias do Espirito Santo, 33 Braga',
};
