import React from 'react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/testing-react';
import { render } from '../../../../__customQueries__/test-utils';
import Meta, {
  Default as DefaultWithImage,
  NoProfilePicture as NoProfilePictureStory,
} from '../ChangeProfileUserImage.stories';

const Default = composeStory(DefaultWithImage, Meta);
const NoProfilePicture = composeStory(NoProfilePictureStory, Meta);

describe('ChangeProfileUserImage component', () => {
  it('should exist title', () => {
    const { getByClass, getByTestId } = render(<Default />);

    expect(getByClass('control-label change-profile-user-image-title')).toBeTruthy();
    expect(getByClass('control-label change-profile-user-image-title')).toHaveTextContent(
      'Profile picture'
    );
    expect(getByTestId('thumb-change-profile-user-image')).toBeTruthy();
  });

  it('should exist image', () => {
    const { getByTestId } = render(<Default />);

    expect(getByTestId('thumb-change-profile-user-image')).toBeTruthy();
    expect(getByTestId('thumb-change-profile-user-image')).toHaveStyle(
      'background-image: url(https://cdn.testesolidar.com/users/51792/1613562326.jpg?v=1613562326?no-cache=485);'
    );
  });

  it('should appear no image', () => {
    const { getByTestId } = render(<NoProfilePicture />);

    expect(getByTestId('thumb-change-profile-user-image')).toBeInTheDocument();
    expect(getByTestId('thumb-change-profile-user-image')).toHaveStyle(
      'background-image: url(https://static.esolidar.com/frontend/assets/no-image/upload.svg);'
    );
  });

  it('should have exist class change-profile-user-image__no-button', () => {
    const { queryByTestId } = render(<NoProfilePicture />);

    expect(queryByTestId('button-change-profile-user-image')).not.toBeInTheDocument();
  });
});
