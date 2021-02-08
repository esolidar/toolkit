import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Faqs from '../Faqs';

configure({ adapter: new Adapter() });

const tabs = [
  {
    type: 'general',
    text: 'General Questions',
  },
  {
    type: 'charities',
    text: 'For Charities',
  },
  {
    type: 'users',
    text: 'For Users',
  },
];

const faqs = [
  {
    id: 1,
    type: 'users',
    title_pt: null,
    description_pt: null,
    title_en: 'How can I donate?',
    description_en: 'For each product listed.',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 1,
    lastUpdate: '2016-04-06 10:59:57',
    dateAdded: '2015-03-12 00:00:00',
  },
  {
    id: 2,
    type: 'charities',
    title_pt:
      'Que tipo de organizações sem fins lucrativos estão registadas ou se podem registar na eSolidar?',
    description_pt:
      'A eSolidar garante a conformidade de todas as organizações sem fins lucrativos.',
    title_en: 'Which charities are on the site?',
    description_en:
      'Charities must be registered with the government and have a mission that is not tied to hate, extremism or violence in any way. Signup is free and we welcome all charities who meet these criteria to join.',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 0,
    lastUpdate: '2015-10-13 10:36:00',
    dateAdded: '2015-03-12 00:00:00',
  },
];

describe('Faqs page', () => {
  it('renders the Faqs component', () => {
    const component = shallow(
      <Faqs
        lang="pt"
        tabs={tabs}
        faqs={faqs}
        type="general"
        changeType={jest.fn()}
        changeId={() => {}}
        isLoading={false}
      />
    );
    expect(component).toHaveLength(1);
  });

  it('render FaqsTabs and FaqsItems component', () => {
    const component = shallow(
      <Faqs
        lang="pt"
        tabs={tabs}
        faqs={faqs}
        type="general"
        changeType={jest.fn()}
        changeId={() => {}}
        isLoading={false}
      />
    );
    expect(component.find('FaqTabs').length).toBe(1);
    expect(component.find('FaqItem').length).toBe(1);
  });

  it('test faq loading', () => {
    const component = shallow(
      <Faqs
        lang="pt"
        tabs={tabs}
        faqs={faqs}
        type="general"
        changeType={jest.fn()}
        changeId={() => {}}
        isLoading={true}
      />
    );
    expect(component.find('Loading').length).toBe(1);
  });

  it('test faq with empty array faqs', () => {
    const component = shallow(
      <Faqs
        lang="pt"
        tabs={tabs}
        faqs={[]}
        type="general"
        changeType={jest.fn()}
        changeId={() => {}}
        isLoading={false}
      />
    );
    expect(component.find('FormattedMessage').length).toBe(1);
  });
});
