/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import Wizard from './Wizard';
import Props from './Wizard.types';

export default {
  title: 'Components/Wizard',
  component: Wizard,
  parameters: {
    jest: ['Card.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div>
    <Wizard {...args}>
      <>
        <div style={{ textAlign: 'center' }}>Body Content Here</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ textAlign: 'center' }}>Body Content Here</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ textAlign: 'center' }}>Body Content Here</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ textAlign: 'center' }}>Body Content Here</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ textAlign: 'center' }}>Body Content Here</div>
      </>
    </Wizard>
  </div>
);

export const Open: Story<Props> = Template.bind({});
export const Close: Story<Props> = Template.bind({});
export const Simple: Story<Props> = Template.bind({});

Open.args = {
  showWizard: true,
  closeWizard: () => {},
  title: 'A title',
  // subtitle: 'Volunteering',
  status: 'draft',
  buttonDarkText: 'Save & Close',
  buttonPrimaryText: 'Publish',
  cdnStaticUrl: 'https://static.esolidar.com',
  saved: false,
  pages: [
    {
      title: 'General details',
      status: 'done',
      active: true,
    },
    {
      title: 'Categories ',
      status: 'not-done',
      active: false,
    },
    {
      title: 'Skills & Interests',
      status: 'not-done',
      active: false,
    },
    {
      title: 'Application form',
      status: 'not-done',
      active: false,
    },
  ],
  disabledDarkButton: false,
  disabledPrimaryButton: true,
  handleClickBack: () => {},
  handleClickNext: () => {},
  totalPages: 4,
  currentPage: 'generalDetails',
  disableClickNext: true,
  buttonNextText: 'Continue',
};

Close.args = {
  showWizard: false,
  closeWizard: () => {},
  title: 'A title',
  status: 'draft',
  buttonDarkText: 'Save & Close',
  buttonPrimaryText: 'Publish',
  cdnStaticUrl: 'https://static.esolidar.com',
  saved: false,
  pages: {
    published: false,
    active: 'applicationForm',
    edited: ['generalDetails', 'categories'],
    done: ['locationTime', 'categories'],
  },
  disabledDarkButton: false,
  disabledPrimaryButton: true,
  handleClickBack: () => {},
  handleClickNext: () => {},
  totalPages: 4,
  currentPage: 'applicationForm',
  disableClickNext: true,
  buttonNextText: 'Continue',
};

Simple.args = {
  showWizard: true,
  buttonDarkText: 'Close preview',
  cdnStaticUrl: 'https://static.esolidar.com',
  showFooter: false,
  showPaginator: false,
};
