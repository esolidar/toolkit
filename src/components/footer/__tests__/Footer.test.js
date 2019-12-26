/* global expect */
/* global jest */
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-localstorage-mock';
import Footer from '../Footer';

const changed = jest.fn();
const propIcons = [
  { class: 'icon-facebook1', url: 'https://www.facebook.com/esolidar' },
  { class: 'icon-twitter1', url: '#' },
  { class: 'icon-linkedin21', url: '#' },
  { class: 'icon-google-plus1', url: '#' },
];
const propLanguages = [
  { id: 0, name: 'pt', translate: 'Português (PT)' },
  { id: 1, name: 'br', translate: 'Português (BR)' },
  { id: 2, name: 'en', translate: 'English' },
];
const propMainMenuFooter = [
  { link: { id: 'footer.menu.join.us', default: 'Follow us' }, url: '#', target: '_self' },
  { link: { id: 'footer.menu.join.us', default: 'Follow us' }, url: '#', target: '_self' },
  { link: { id: 'footer.menu.join.us', default: 'Follow us' }, url: '#', target: '_self' },
];
const propSecondMenuFooter = [
  { link: { id: 'footer.menu.join.us', default: 'Follow us' }, url: '#', target: '_self' },
  {
    link: { id: 'footer.menu.join.us', default: 'Follow us' },
    url: '#',
    target: '_self',
    submenu: [
      { link: { id: 'footer.menu.join.us', default: 'Follow us' }, url: '#', target: '_self' },
      { link: { id: 'footer.menu.join.us', default: 'Follow us' }, url: '#', target: '_self' },
    ],
  },
];
const propBottomMenuFooter = [
  { link: { id: 'footer.menu.terms', default: 'Terms and Conditions' }, url: '#', target: '_self' },
  { link: { id: 'footer.menu.policy', default: 'Privacy Policy' }, url: '#', target: '_self' },
];
const propCurrentCurrency = {
  id: 1, name: 'Euro', small: 'EUR', value: 1.114, symbol: '€', status: 1, lastUpdate: '2019-12-16 12:00:03',
};
const propCurrencies = [
  {
    id: 1, name: 'Euro', small: 'EUR', value: 1.114, symbol: '€', status: 1, lastUpdate: '2019-12-16 12:00:03',
  },
  {
    id: 1, name: 'U. S. Dollar', small: 'USD', value: 1.114, symbol: '€', status: 1, lastUpdate: '2019-12-16 12:00:03',
  },
];

describe('Footer component', () => {
  it('renders Footer correctly', () => {
    const component = shallow(
      <Footer
        showCurrency={false}
        languages={propLanguages}
        currentLang="pt"
        onChangeLang={changed}
      />,
    );
    expect(component).toHaveLength(1);
  });

  it('renders Footer correctly with 3 items in Main Menu', () => {
    const component = shallow(
      <Footer
        mainMenuFooter={propMainMenuFooter}
        showCurrency={false}
        languages={propLanguages}
        currentLang="pt"
        onChangeLang={changed}
      />,
    );
    expect(component.find('li')).toHaveLength(3);
  });

  it('renders Footer correctly with 4 items in Second Menu', () => {
    const component = shallow(
      <Footer
        secondMenuFooter={propSecondMenuFooter}
        showCurrency={false}
        languages={propLanguages}
        currentLang="pt"
        onChangeLang={changed}
      />,
    );
    expect(component.find('li')).toHaveLength(4);
    expect(component.find('ul > li > ul > li')).toHaveLength(2);
  });

  it('renders Footer correctly with 2 items in Bottom Menu', () => {
    const component = shallow(
      <Footer
        bottomMenuFooter={propBottomMenuFooter}
        showCurrency={false}
        languages={propLanguages}
        currentLang="pt"
        onChangeLang={changed}
      />,
    );
    expect(component.find('.bottom-footer li')).toHaveLength(2);
  });

  it('renders Footer correctly with Social Icons', () => {
    const component = shallow(
      <Footer
        showCurrency={false}
        socialIcons={propIcons}
        languages={propLanguages}
        currentLang="pt"
        onChangeLang={changed}
      />,
    );
    expect(component.find('SocialNetworks')).toHaveLength(1);
    expect(component.find('SocialNetworks').dive().find('.socialNetworks')).toHaveLength(1);
    expect(component.find('SocialNetworks').dive().find('.socialNetworks a')).toHaveLength(4);
  });

  it('renders Footer correctly with showCurrency', () => {
    const component = shallow(
      <Footer
        showCurrency={true}
        currentCurrency={propCurrentCurrency}
        currencies={propCurrencies}
        currencyChanged={changed}
        languages={propLanguages}
        currentLang="pt"
        onChangeLang={changed}
      />,
    );
    expect(component.find('ChangeCurrency')).toHaveLength(1);
    expect(component.find('ChangeCurrency').dive().find('.changeCurrency')).toHaveLength(1);
    expect(component.find('ChangeCurrency').dive().find('DropdownButton')).toHaveLength(1);
  });

  it('renders Footer correctly with showCurrency', () => {
    const component = shallow(
      <Footer
        showCurrency={false}
        languages={propLanguages}
        currentLang="pt"
        onChangeLang={changed}
      />,
    );
    expect(component.find('ChangeLanguage')).toHaveLength(1);
    expect(component.find('ChangeLanguage').dive().find('.changeLanguage')).toHaveLength(1);
    expect(component.find('ChangeLanguage').dive().find('.changeLanguage span')).toHaveLength(3);
  });
});
