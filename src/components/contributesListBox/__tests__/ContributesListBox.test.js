import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ContributesListBox from '../index';
import ContributesList from '../ContributesList';

configure({ adapter: new Adapter() });

const props = {
  contributesList: [
    {
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
  ],
  loadingContributesList: false,
  loadingContributes: false,
  total: 10,
  showMoreContributes: () => {},
  env: {
    cdn_static_url: 'https://static.esolidar.com',
    cdn_uploads_url: 'https://cdn.testesolidar.com',
  },
};

describe('ContributesListBox', () => {
  it('renders the CrowdfundingContributesListBox component', () => {
    const wrapper = shallow(
      <ContributesListBox
        contributesList={props.contributesList}
        loadingContributesList={props.loadingContributesList}
        total={props.total}
        showMoreContributes={props.showMoreContributes}
        env={props.env}
      />
    );
    expect(wrapper).toHaveLength(1);
  });

  it('should show loading', () => {
    const wrapper = shallow(
      <ContributesListBox
        contributesList={props.contributesList}
        loadingContributesList={true}
        total={props.total}
        showMoreContributes={props.showMoreContributes}
        env={props.env}
      />
    );
    expect(wrapper.find('.loading-contributes-list').length).toBe(1);
  });

  it('should render ContributesList', () => {
    const component = shallow(
      <ContributesListBox
        contributesList={props.contributesList}
        loadingContributesList={false}
        total={props.total}
        showMoreContributes={props.showMoreContributes}
        env={props.env}
      />
    );
    expect(component.containsMatchingElement(<ContributesList />)).toEqual(true);
  });
});
