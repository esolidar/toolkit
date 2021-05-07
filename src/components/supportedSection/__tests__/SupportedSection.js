import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { IntlProvider, FormattedMessage } from 'react-intl';
import SupportedSection from '../index';

configure({ adapter: new Adapter() });

const props = {
  href: 'https://esolidar.local:8081/b/teste13',
  imgSrc: 'https://cdn.testesolidar.com/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e-THUMB.png',
  text: (
    <FormattedMessage
      id="crowdfunding.detail.companySupport"
      values={{
        companyName: 'eSolidar',
      }}
    />
  ),
};

describe('SupportedSection', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <IntlProvider locale="en">
        <SupportedSection {...props} />
      </IntlProvider>
    );
    expect(wrapper).toHaveLength(1);
  });
});
