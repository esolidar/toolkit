import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { render, screen } from '../../../../__customQueries__/test-utils';
import ChangeProfileUserImage from '../index';

const fx = jest.fn();
const props = {
  color: {
    primaryColor: '#ddd',
  },
  thumb: 'https://cdn.testesolidar.com/users/51792/1613562326.jpg?v=1613562326?no-cache=485',
  errors: '',
  onDrop: fx,
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
  },
};

const propsWithoutImage = {
  color: {
    primaryColor: '#ddd',
  },
  errors: '',
  onDrop: fx,
  env: {
    serverlessResizeImage: 'https://image.testesolidar.com',
  },
};

describe('ChangeProfileUserImage component', () => {
  it('renders "ChangeProfileUserImage" correctly', () => {
    const component = shallow(<ChangeProfileUserImage {...props} />);

    expect(component.find('[data-testid="title-change-profile-user-image"]').length).toBe(1);
    expect(component.find('[data-testid="thumb-change-profile-user-image"]').length).toBe(1);
  });

  it('should exist title', () => {
    render(<ChangeProfileUserImage {...props} />);

    const title = screen.getByTestId('title-change-profile-user-image');
    expect(title).toHaveTextContent('Profile');
  });

  it('should exist image', () => {
    render(<ChangeProfileUserImage {...props} />);

    const image = screen.getByTestId('thumb-change-profile-user-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveStyle(
      'background-image: url(https://cdn.testesolidar.com/users/51792/1613562326.jpg?v=1613562326?no-cache=485);'
    );
  });

  it('should appear no image', () => {
    render(<ChangeProfileUserImage {...propsWithoutImage} />);

    const image = screen.getByTestId('thumb-change-profile-user-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveStyle(
      'background-image: url(https://static.testesolidar.com/frontend/assets/no-image.png);'
    );
  });

  it('should exist button', () => {
    render(<ChangeProfileUserImage {...props} />);

    const button = screen.getByTestId('button-change-profile-user-image');
    expect(button).toBeInTheDocument();
  });
});
