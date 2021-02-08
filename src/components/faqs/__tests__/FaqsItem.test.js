import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FaqsItem from '../FaqsItem';

configure({ adapter: new Adapter() });

const env = {
  cdn_static_url: 'https://static.esolidar.com',
};

const changeId = jest.fn();
const items = [
  {
    id: 1,
    type: 'users',
    title_pt: 'teste',
    description_pt: 'teste',
    title_en: 'How can I donate?',
    description_en: 'For each product listed.',
    title_br: 'teste',
    description_br: 'teste',
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
    title_br: 'teste',
    description_br: 'teste',
    position: 1,
    howitworks: 0,
    lastUpdate: '2015-10-13 10:36:00',
    dateAdded: '2015-03-12 00:00:00',
  },
];

describe('FaqItem', () => {
  it('renders the FaqItem component', () => {
    const component = shallow(
      <FaqsItem
        env={env}
        id="2"
        faqId={2}
        changeId={changeId}
        title={items[1].title_pt}
        cardBody={items[1].description_pt}
      />
    );
    expect(component).toHaveLength(1);
  });

  it('expect one item with title and description', () => {
    const component = shallow(
      <FaqsItem
        env={env}
        id="2"
        faqId={2}
        changeId={changeId}
        title={items[1].title_pt}
        cardBody={items[1].description_pt}
      />
    );
    expect(component.find('div.accordion-title').length).toBe(1);
    expect(component.find('div.accordion-item').length).toBe(1);
  });

  it('the first element is closed and click open', () => {
    const component = shallow(
      <FaqsItem
        env={env}
        id=""
        faqId={2}
        changeId={changeId}
        title={items[1].title_pt}
        cardBody={items[1].description_pt}
      />
    );
    component.find('div.accordion-title').first().simulate('click');
    expect(changeId.mock.calls.length).toEqual(1);
    expect(component.find('div.accordion-title').first().hasClass('open')).toBe(true);
  });

  it('the first element is already open and click closes', () => {
    const component = shallow(
      <FaqsItem
        env={env}
        id="2"
        faqId={2}
        changeId={changeId}
        title={items[1].title_pt}
        cardBody={items[1].description_pt}
      />
    );
    component.find('div.accordion-title').first().simulate('click');
    expect(changeId.mock.calls.length).toEqual(2);
    expect(component.find('div.accordion-title').first().hasClass('open')).toBe(false);
  });
});
