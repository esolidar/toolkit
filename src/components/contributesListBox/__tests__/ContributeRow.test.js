import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ContributeRow from '../ContributeRow';

configure({ adapter: new Adapter() });

const propsHidden = {
  contribute: {
    id: 140,
    company_id: null,
    payment_product_id: 468,
    message: '',
    hidden: 1,
    updated_at: '2020-04-09 16:30:18',
    created_at: '2020-04-09 16:30:18',
    laravel_through_key: 39,
    contributor: null,
    payment_product: {
      id: 468,
      payment_id: 337,
      product_id: 39,
      quantity: 1,
      amount: 26,
      currency_id: 1,
      info: '{"hidden":"1","message":"","checked":1}',
      updated_at: '2020-04-09 16:30:17',
      created_at: '2020-04-09 16:30:17',
      currency: {
        id: 1,
        name: 'Euro',
        small: 'EUR',
        value: '1.174',
        symbol: '€',
        status: true,
        lastUpdate: '2020-10-14 00:00:03',
      },
    },
  },
  env: {
    cdn_static_url: 'https://static.esolidar.com',
    cdn_uploads_url: 'https://cdn.testesolidar.com',
  },
};

const propsNoHidden = {
  contribute: {
    id: 140,
    company_id: null,
    payment_product_id: 468,
    message: '',
    hidden: 0,
    updated_at: '2020-04-09 16:30:18',
    created_at: '2020-04-09 16:30:18',
    laravel_through_key: 39,
    contributor: {
      firstName: 'Miguel',
      id: 1,
      image: 'https://static.esolidar.com/users/1/1602528294.jpg',
      institution: null,
      institution_id: null,
      lastName: 'Vieira',
      name: 'Miguel Vieira',
      s3_key: 'users/1/1602528294.jpg',
      streamImage: 'amazons3',
      thumbs: {
        original: 'https://cdn.testesolidar.com/users/1/1602528294.jpg',
        standard: 'https://cdn.testesolidar.com/users/1/1602528294-STANDARD.jpg',
        thumb: 'https://cdn.testesolidar.com/users/1/1602528294-THUMB.jpg',
      },
    },
    payment_product: {
      id: 468,
      payment_id: 337,
      product_id: 39,
      quantity: 1,
      amount: 26,
      currency_id: 1,
      info: '{"hidden":"1","message":"","checked":1}',
      updated_at: '2020-04-09 16:30:17',
      created_at: '2020-04-09 16:30:17',
      currency: {
        id: 1,
        name: 'Euro',
        small: 'EUR',
        value: '1.174',
        symbol: '€',
        status: true,
        lastUpdate: '2020-10-14 00:00:03',
      },
    },
  },
  env: {
    cdn_static_url: 'https://static.esolidar.com',
    cdn_uploads_url: 'https://cdn.testesolidar.com',
  },
};

describe('ContributeRow', () => {
  it('renders the ContributeRow component', () => {
    const component = shallow(
      <ContributeRow contribute={propsHidden.contribute} env={propsHidden.env} />
    );
    expect(component).toHaveLength(1);
    expect(component.find('.contribute-row-box').length).toBe(1);
    expect(component.find('.contribute-row-date').length).toBe(1);
    expect(component.find('.user').length).toBe(1);
  });

  it('With anonymous image', () => {
    const component = shallow(
      <ContributeRow contribute={propsHidden.contribute} env={propsHidden.env} />
    );
    expect(component.find('img').prop('src')).toEqual(
      'https://static.esolidar.com/frontend/assets/anonymous-user.svg'
    );
  });

  it('With user image', () => {
    const component = shallow(
      <ContributeRow contribute={propsNoHidden.contribute} env={propsNoHidden.env} />
    );
    expect(component.find('img').prop('src')).toEqual(
      'https://cdn.testesolidar.com/users/1/1602528294-THUMB.jpg'
    );
  });
});
