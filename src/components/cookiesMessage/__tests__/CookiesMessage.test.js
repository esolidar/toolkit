/* eslint-disable max-len */

import { shallow } from 'enzyme';
import CookiesMessage from '../index';

const onClickFunc = jest.fn();
const propMsg =
  "A eSolidar utiliza cookies - pequenos ficheiros informativos - para melhorar a sua experiência de navegação. Ao continuar, aceita que o façamos, a não ser que altere as suas definições, pelo que queremos que consulte a nossa Política de Cookies, antes de prosseguir <a href='#'>aqui</a>";

describe('CookiesMessage component', () => {
  it('renders CookiesMessage correctly', () => {
    const component = shallow(
      <CookiesMessage message={propMsg} btnText="Concordo" btnClick={onClickFunc} />
    );
    expect(component).toHaveLength(1);
  });
});
