import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DescriptionDetail from '../index';

configure({ adapter: new Adapter() });

const propsDefault = {
  title: 'Description',
  description: 'Test Description',
  showmoreDesc: false,
  showMoreDescButton: false,
};

const props = {
  title: 'Description',
  // eslint-disable-next-line max-len
  description:
    'Sed lacinia vehicula lorem mollis varius. Aliquam non tincidunt nibh. Suspendisse sapien est, auctor vel libero ut, pretium suscipit nisl. Pellentesque ut enim in dui aliquet aliquam ac sed nibh. Fusce nibh augue, dictum et turpis in, sollicitudin ornare est. Maecenas tincidunt ipsum et feugiat fermentum. Vestibulum sed aliquet ante. Nunc rhoncus, lectus nec venenatis vestibulum, nibh magna sodales nunc, eleifend luctus nisi magna eu magna. Cras mauris dolor, aliquet at laoreet sed, condimentum et mauris. Praesent lacinia purus vitae risus feugiat lobortis. Maecenas quis nulla varius, posuere lacus non, hendrerit metus. Cras euismod justo ac eros sollicitudin, id imperdiet risus sodales.',
  showmoreDesc: true,
  showMoreDescButton: true,
};

describe('DescriptionDetail component', () => {
  it('render DescriptionDetail correctly', () => {
    const wrapper = shallow(<DescriptionDetail />);
    expect(wrapper).toHaveLength(1);
  });

  it('exist title', () => {
    const wrapper = shallow(<DescriptionDetail {...propsDefault} />);
    expect(wrapper.find('.shipping-header').length).toBe(1);
    expect(wrapper.find('.shipping-header').text()).toEqual('Description');
  });

  it('exist description', () => {
    const wrapper = shallow(<DescriptionDetail {...propsDefault} />);
    expect(wrapper.find('.description-text').length).toBe(1);
    expect(wrapper.find('.description-text').text()).toEqual('Test Description');
  });

  it('exist button show more', () => {
    const wrapper = shallow(<DescriptionDetail {...props} />);
    expect(wrapper.find('.readmore-button').length).toBe(1);
  });
});
