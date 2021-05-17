import { shallow } from 'enzyme';
import ChangeLanguage from '../index';

const propLanguages = [
  { id: 0, name: 'pt', translate: 'Português (PT)' },
  { id: 1, name: 'en', translate: 'English' },
];
const changed = jest.fn();

describe('ChangeLanguage component', () => {
  it('renders ChangeLanguage correctly', () => {
    const component = shallow(
      <ChangeLanguage languages={propLanguages} onChangeLang={changed} currentLang="pt" />
    );
    expect(component).toHaveLength(1);
  });

  it('renders ChangeLanguage and check how many buttons have', () => {
    const component = shallow(
      <ChangeLanguage languages={propLanguages} onChangeLang={changed} currentLang="pt" />
    );
    expect(component.find('button')).toHaveLength(2);
  });

  it('renders ChangeLanguage and simulates click events', () => {
    const component = shallow(
      <ChangeLanguage languages={propLanguages} onChangeLang={changed} currentLang="pt" />
    );
    component.find('button').first().simulate('click');
    expect(changed.mock.calls.length).toEqual(1);
  });
});
