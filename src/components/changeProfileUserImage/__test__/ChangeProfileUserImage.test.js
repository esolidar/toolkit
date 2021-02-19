import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ChangeProfileUserImage from '../index';

const fx = jest.fn();
const props = {
  translateMessage: fx,
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
  translateMessage: fx,
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
    render(
      <IntlProvider locale="en">
        <ChangeProfileUserImage {...props} />
      </IntlProvider>
    );

    const title = screen.getByTestId('title-change-profile-user-image');
    expect(title).toHaveTextContent('About you');
  });

  it('should exist image', () => {
    render(
      <IntlProvider locale="en">
        <ChangeProfileUserImage {...props} />
      </IntlProvider>
    );

    const image = screen.getByTestId('thumb-change-profile-user-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveStyle(
      'background-image: url(https://cdn.testesolidar.com/users/51792/1613562326.jpg?v=1613562326?no-cache=485);'
    );
  });

  it('should appear no image', () => {
    render(
      <IntlProvider locale="en">
        <ChangeProfileUserImage {...propsWithoutImage} />
      </IntlProvider>
    );

    const image = screen.getByTestId('thumb-change-profile-user-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveStyle(
      'background-image: url(https://static.testesolidar.com/frontend/assets/no-image.png);'
    );
  });

  it('should exist button', () => {
    render(
      <IntlProvider locale="en">
        <ChangeProfileUserImage {...props} />
      </IntlProvider>
    );

    const button = screen.getByTestId('button-change-profile-user-image');
    expect(button).toBeInTheDocument();
  });
});
