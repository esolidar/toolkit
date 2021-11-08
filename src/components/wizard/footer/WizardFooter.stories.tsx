/* eslint-disable no-alert */
import { Story, Meta } from '@storybook/react';
import WizardFooter from './WizardFooter';
import Props from '../Wizard.types';

export default {
  title: 'Components/Wizard/WizardFooter',
  component: WizardFooter,
  parameters: {
    jest: ['Card.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ width: '100%' }}>
    <WizardFooter {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  handleClickBack: () => {},
  handleClickNext: () => {},
  totalPages: 4,
  currentPage: 2,
  disableClickNext: true,
};
