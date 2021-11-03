/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import WizardHeader from './WizardHeader';
import Props from '../Wizard.types';

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
export const NoSubtitle: Story<Props> = Template.bind({});

Default.args = {
  closeWizard: () => {},
  title: 'A title',
  subtitle: 'Volunteering',
  status: 'draft',
  buttonDarkText: 'Save & Close',
  buttonPrimaryText: 'Publish',
  cdnStaticUrl: 'https://static.esolidar.com',
  saved: false,
  disabledDarkButton: false,
  disabledPrimaryButton: true,
};

NoSubtitle.args = {
  closeWizard: () => {},
  title: 'Program details',
  status: 'draft',
  buttonDarkText: 'Save & Close',
  buttonPrimaryText: 'Publish',
  cdnStaticUrl: 'https://static.esolidar.com',
  disabledDarkButton: false,
  disabledPrimaryButton: true,
};
