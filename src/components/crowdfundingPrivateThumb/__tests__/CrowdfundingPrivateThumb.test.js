import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { advanceTo } from 'jest-date-mock';
import CrowdfundingPrivateThumb from '../CrowdfundingPrivateThumb';

jest.useFakeTimers();
configure({ adapter: new Adapter() });

const thumb = {
  id: 34,
  user_id: null,
  institution_id: 66,
  company_id: 1,
  sub_category_id: null,
  product_id: 38,
  title: 'Campanha de teste',
  title_en: null,
  tags: null,
  description: 'asdasdasd',
  description_en: null,
  video: null,
  contributes_sum: 10,
  reward: 0,
  reward_description: null,
  goal: 100,
  minimum_contribution: 1,
  currency_id: 1,
  start_date: '2020-10-28 23:00:00',
  end_date: '2020-11-30 23:00:00',
  position: 0,
  recipient_visible: 1,
  status: 'approved',
  esolidar_list: 0,
  images: [
    {
      id: 8,
      crowdfunding_id: 34,
      image: 'institution/crowdfunding/970a2734-9f57-4794-9e4b-0ce1c415c922.png',
    },
  ],
  institution: {
    thumbs: {
      detail:
        'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/institutions/952d21fa-61ef-48f4-87cd-37e12ad23ae1-DETAIL.jpeg',
      thumb:
        'https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/institutions/952d21fa-61ef-48f4-87cd-37e12ad23ae1-THUMB.jpeg',
    },
  },
  currency: {
    id: 1,
    name: 'Euro',
    small: 'EUR',
    value: 1.08,
    symbol: '€',
    status: 1,
    lastUpdate: '2020-04-03 12:00:25',
  },
};

const env = {
  serverlessResizeImage: 'https://image.testesolidar.com',
};

const translations = {
  pending: 'Pending',
  startsIn: 'Starts in',
  endsIn: 'Ends in',
  endedIn: 'Ended in',
  raised: 'Raised',
};

const convertedValue = '12.00€';

describe('FeaturesMenu page', () => {
  it('renders the FeaturesMenu component', () => {
    advanceTo(new Date(2020, 10, 10, 0, 0, 0));
    const component = shallow(
      <CrowdfundingPrivateThumb
        thumb={thumb}
        env={env}
        translations={translations}
        convertedValue={convertedValue}
      />
    );
    expect(component).toHaveLength(1);
  });

  it('expect return 30-04-2020 in ending date', () => {
    advanceTo(new Date(2020, 10, 10, 0, 0, 0));
    const component = shallow(
      <CrowdfundingPrivateThumb
        thumb={thumb}
        env={env}
        translations={translations}
        convertedValue={convertedValue}
      />
    );
    expect(component.find('.date-text').text()).toEqual('30-11-2020');
  });

  it('expect return running class', () => {
    advanceTo(new Date(2020, 10, 10, 0, 0, 0));
    const component = shallow(
      <CrowdfundingPrivateThumb
        thumb={thumb}
        env={env}
        translations={translations}
        convertedValue={convertedValue}
      />
    );
    expect(component.find('.label-text').text()).toEqual('Ends in');
    expect(component.find('._date').hasClass('running')).toBe(true);
  });

  it('expect return soon class', () => {
    advanceTo(new Date(2020, 1, 1, 0, 0, 0));
    const component = shallow(
      <CrowdfundingPrivateThumb
        thumb={thumb}
        env={env}
        translations={translations}
        convertedValue={convertedValue}
      />
    );
    expect(component.find('.label-text').text()).toEqual('Starts in');
    expect(component.find('._date').hasClass('soon')).toBe(true);
  });

  it('expect return ended class', () => {
    advanceTo(new Date(2022, 1, 1, 0, 0, 0));
    const component = shallow(
      <CrowdfundingPrivateThumb
        thumb={thumb}
        env={env}
        translations={translations}
        convertedValue={convertedValue}
      />
    );
    expect(component.find('.label-text').text()).toEqual('Ended in');
    expect(component.find('._date').hasClass('ended')).toBe(true);
  });

  it('expect return raised value 12.00€', () => {
    const component = shallow(
      <CrowdfundingPrivateThumb
        thumb={thumb}
        env={env}
        translations={translations}
        convertedValue={convertedValue}
      />
    );
    expect(component.find('.raised-value').text()).toEqual('12.00€');
  });
});
