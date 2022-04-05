/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import WizardHeader from './WizardHeader';
import Props from './WizardHeader.types';

export default {
  title: 'Components/Wizard/WizardHeader',
  component: WizardHeader,
  parameters: {
    jest: ['Card.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ width: '100%' }}>
    <WizardHeader {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const EditTitle: Story<Props> = Template.bind({});
export const NoSubtitle: Story<Props> = Template.bind({});

Default.args = {
  closeWizard: () => {},
  title: 'A title',
  subtitle: 'Volunteering',
  buttonDarkText: 'Save & Close',
  buttonPrimaryText: 'Publish',
  cdnStaticUrl: 'https://static.esolidar.com',
  saved: false,
  disabledDarkButton: false,
  disabledPrimaryButton: true,
  isDraft: true,
};

EditTitle.args = {
  closeWizard: () => {},
  title: '',
  editMode: true,
  buttonDarkText: 'Save & Close',
  buttonPrimaryText: 'Publish',
  cdnStaticUrl: 'https://static.esolidar.com',
  saved: false,
  disabledDarkButton: false,
  disabledPrimaryButton: true,
  isDraft: true,
  isLive: true,
  showStartHereTooltip: true,
};

NoSubtitle.args = {
  closeWizard: () => {},
  title: 'Program details',
  buttonDarkText: 'Save & Close',
  buttonPrimaryText: 'Publish',
  cdnStaticUrl: 'https://static.esolidar.com',
  disabledDarkButton: false,
  disabledPrimaryButton: true,
  isDraft: true,
  isLive: true,
};
