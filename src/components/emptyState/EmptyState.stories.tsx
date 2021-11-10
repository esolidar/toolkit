import { Story, Meta } from '@storybook/react';
import Button from '../../elements/button';
import EmptyState from './EmptyState';
import Props from './EmptyState.types';

export default {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    jest: ['Pagination.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <EmptyState {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const WithImage: Story<Props> = Template.bind({});
export const WithIcon: Story<Props> = Template.bind({});

Default.args = {
  container: {
    rounded: true,
    shadow: true,
    borderSize: 1,
  },
  title: 'You haven’t set up your accelerator... yet!',
  body: 'Create your program and start receiving project applications',
  altImage: 'Image',
  buttons: <Button extraClass="primary-full" onClick={() => {}} text="Set up now" />,
};

WithImage.args = {
  container: {
    rounded: true,
    shadow: true,
    borderSize: 1,
  },
  title: 'You haven’t set up your accelerator... yet!',
  body: 'Create your program and start receiving project applications ',
  image: 'https://s3.eu-west-1.amazonaws.com/esolidar.com/frontend/icons/ic-acceleration.svg',
  buttons: (
    <>
      <Button extraClass="dark" onClick={() => {}} text="Set up now" />
      <Button extraClass="primary-full" onClick={() => {}} text="Set up now" />
    </>
  ),
};

WithIcon.args = {
  container: {
    rounded: true,
    shadow: true,
    borderSize: 1,
  },
  title: 'You haven’t set up your accelerator... yet!',
  body: 'Create your program and start receiving project applications ',
  icon: 'icon-ic-website',
  buttons: (
    <>
      <Button extraClass="dark" onClick={() => {}} text="Set up now" />
      <Button extraClass="primary-full" onClick={() => {}} text="Set up now" />
    </>
  ),
};
