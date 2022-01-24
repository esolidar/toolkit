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

    expect(
      getByClass('input-label-component__label size-lg change-profile-user-image-title')
    ).toBeTruthy();
    expect(
      getByClass('input-label-component__label size-lg change-profile-user-image-title')
    ).toHaveTextContent('Profile picture');
    expect(getByTestId('thumb-change-profile-user-image')).toBeTruthy();
  });

  it('should exist image', () => {
    const { getByTestId } = render(<Default />);

    expect(getByTestId('thumb-change-profile-user-image')).toBeTruthy();
  });

  it('should appear no image', () => {
    const { getByTestId } = render(<NoProfilePicture />);

    expect(getByTestId('thumb-change-profile-user-image')).toBeInTheDocument();
  });

  it('should have exist class change-profile-user-image__no-button', () => {
    const { getByClass } = render(<NoProfilePicture />);

    expect(
      getByClass('btn-esolidar btn-dark btn-md change-profile-user-image__no-button')
    ).toBeTruthy();
  });
});
