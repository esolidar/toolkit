import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserSettingsAboutYou from '../UserSettingsAboutYou';

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

describe('UserSettingsAboutYou component', () => {
  it('renders "UserSettingsAboutYou" correctly', () => {
    const component = shallow(<UserSettingsAboutYou {...props} />);

    expect(component.find('[data-testid="title-settings-about-you"]').length).toBe(1);
    expect(component.find('[data-testid="thumb-settings-about-you"]').length).toBe(1);
  });

  it('should exist title', () => {
    render(
      <IntlProvider locale="en">
        <UserSettingsAboutYou {...props} />
      </IntlProvider>
    );

    const title = screen.getByTestId('title-settings-about-you');
    expect(title).toHaveTextContent('About you');
  });

  it('should exist image', () => {
    render(
      <IntlProvider locale="en">
        <UserSettingsAboutYou {...props} />
      </IntlProvider>
    );

    const image = screen.getByTestId('thumb-settings-about-you');
    expect(image).toBeInTheDocument();
    expect(image).toHaveStyle(
      'background-image: url(https://cdn.testesolidar.com/users/51792/1613562326.jpg?v=1613562326?no-cache=485);'
    );
  });

  it('should appear no image', () => {
    render(
      <IntlProvider locale="en">
        <UserSettingsAboutYou {...propsWithoutImage} />
      </IntlProvider>
    );

    const image = screen.getByTestId('thumb-settings-about-you');
    expect(image).toBeInTheDocument();
    expect(image).toHaveStyle(
      'background-image: url(https://static.testesolidar.com/frontend/assets/no-image.png);'
    );
  });

  it('should exist button', () => {
    render(
      <IntlProvider locale="en">
        <UserSettingsAboutYou {...props} />
      </IntlProvider>
    );

    const button = screen.getByTestId('button-user-settings-about-you');
    expect(button).toBeInTheDocument();
  });
});
