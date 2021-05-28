import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import Header from '../index';

describe('Header component', () => {
  it('renders Header correctly', () => {
    const component = mount(
      <IntlProvider locale="en">
        <Header
          communityLinks={[]}
          dashboardLinks={[]}
          cdnStaticUrl="https://static.esolidar.com"
        />
      </IntlProvider>
    );
    expect(component).toHaveLength(1);
  });

  it('renders Header logged out user on eSolidar', () => {
    const component = mount(
      <IntlProvider locale="en">
        <Header
          isUserLogged={false}
          esolidarMainUrl="https://www.esolidar.com/"
          esolidarUrl="https://community.testesolidar.com/"
          dashboardUrl=""
          institutionUrl=""
          lang="pt"
          communityLinks={[]}
          dashboardLinks={[]}
          cdnStaticUrl="https://static.esolidar.com"
        />
      </IntlProvider>
    )
      .mount()
      .mount();
    expect(component.find('img')).toHaveLength(2);
    expect(component.find('NavLink')).toHaveLength(10);
    expect(component.find('NavDropdown')).toHaveLength(2);
  });

  it('renders Header logged company user on eSolidar', () => {
    const component = mount(
      <IntlProvider locale="en">
        <Header
          isUserLogged={true}
          esolidarMainUrl="https://www.esolidar.com/"
          esolidarUrl="https://community.testesolidar.com/"
          dashboardUrl="/social-feed"
          institutionUrl=""
          lang="pt"
          communityLinks={[]}
          dashboardLinks={[]}
          cdnStaticUrl="https://static.esolidar.com"
        />
      </IntlProvider>
    );
    expect(component.find('img')).toHaveLength(2);
    expect(component.find('NavLink')).toHaveLength(3);
    expect(component.find('NavLink').first().props().href).toEqual('/social-feed');
  });

  it('renders Header logged npo user on eSolidar', () => {
    const component = mount(
      <IntlProvider locale="en">
        <Header
          isUserLogged={true}
          esolidarMainUrl="https://www.esolidar.com/"
          esolidarUrl="https://community.testesolidar.com/"
          dashboardUrl=""
          institutionUrl="/npo/store/1600-npo-test"
          lang="pt"
          communityLinks={[]}
          dashboardLinks={[]}
          cdnStaticUrl="https://static.esolidar.com"
        />
      </IntlProvider>
    );
    expect(component.find('img')).toHaveLength(2);
    expect(component.find('NavLink')).toHaveLength(3);
    expect(component.find('NavLink').first().props().href).toEqual('/npo/store/1600-npo-test');
  });
});
