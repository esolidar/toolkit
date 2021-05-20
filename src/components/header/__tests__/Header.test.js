import { shallow } from 'enzyme';
import Header from '../index';

describe('Header component', () => {
  it('renders Header correctly', () => {
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });

  it('renders Header logged out user on eSolidar', () => {
    const component = shallow(
      <Header
        isUserLogged={false}
        esolidarMainUrl="https://www.esolidar.com/"
        esolidarUrl="https://community.testesolidar.com/"
        esolidarBlogUrl=""
        esolidarHelpUrl=""
        businessCompanyName=""
        dashboardUrl=""
        institutionUrl=""
        lang="pt"
      />
    );

    expect(component.find('img')).toHaveLength(2);
    expect(component.find('NavLink')).toHaveLength(9);
    expect(component.find('NavDropdown')).toHaveLength(2);
    expect(component.find('DropdownItem')).toHaveLength(6);
  });

  it('renders Header logged company user on eSolidar', () => {
    const component = shallow(
      <Header
        isUserLogged={true}
        esolidarMainUrl="https://www.esolidar.com/"
        esolidarUrl="https://community.testesolidar.com/"
        esolidarBlogUrl=""
        esolidarHelpUrl=""
        businessCompanyName=""
        dashboardUrl="/social-feed"
        institutionUrl=""
        lang="pt"
      />
    );
    expect(component.find('img')).toHaveLength(2);
    expect(component.find('NavLink')).toHaveLength(3);
    expect(component.find('NavLink').first().props().href).toEqual('/social-feed');
  });

  it('renders Header logged npo user on eSolidar', () => {
    const component = shallow(
      <Header
        isUserLogged={true}
        esolidarMainUrl="https://www.esolidar.com/"
        esolidarUrl="https://community.testesolidar.com/"
        esolidarBlogUrl=""
        esolidarHelpUrl=""
        businessCompanyName=""
        dashboardUrl=""
        institutionUrl="/npo/store/1600-npo-test"
        lang="pt"
      />
    );
    expect(component.find('img')).toHaveLength(2);
    expect(component.find('NavLink')).toHaveLength(3);
    expect(component.find('NavLink').first().props().href).toEqual('/npo/store/1600-npo-test');
  });

  it('renders Header logged user on Business', () => {
    const component = shallow(
      <Header
        isUserLogged={true}
        esolidarMainUrl="https://www.esolidar.com/"
        esolidarUrl="https://community.testesolidar.com/"
        esolidarBlogUrl=""
        esolidarHelpUrl=""
        businessCompanyName="CompanyName"
        dashboardUrl=""
        institutionUrl=""
        lang="pt"
      />
    );
    expect(component.find('img')).toHaveLength(1);
    expect(component.find('NavLink')).toHaveLength(3);
    expect(component.find('NavLink').first().text()).toMatch('CompanyName');
  });
});
