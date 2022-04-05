import { Story, Meta } from '@storybook/react';
import { format, addDays, subDays } from 'date-fns';
import AcceleratorSubmitProjectBox from './AcceleratorSubmitProjectBox';
import { getToday, dateFormat } from '../../constants/date';
import Props from './AcceleratorSubmitProjectBox.types';

export default {
  title: 'Components/Accelerator/AcceleratorSubmitProjectBox',
  component: AcceleratorSubmitProjectBox,
  parameters: {
    jest: ['AcceleratorSubmitProjectBox.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div style={{ maxWidth: '750px' }}>
    <AcceleratorSubmitProjectBox {...args} />
  </div>
);

const today = getToday();

export const Soon: Story<Props> = Template.bind({});
export const Running: Story<Props> = Template.bind({});
export const Closed: Story<Props> = Template.bind({});
export const Ended: Story<Props> = Template.bind({});
export const Archived: Story<Props> = Template.bind({});

Soon.args = {
  projectConfig: {
    start_at: format(addDays(today, 2), dateFormat),
    closed_at: format(addDays(today, 20), dateFormat),
    ended_at: format(addDays(today, 30), dateFormat),
    timezone: 'Europe/Lisbon',
  },
  locale: 'pt',
  submitProjectButton: () => {},
};

Running.args = {
  projectConfig: {
    start_at: format(subDays(today, 2), dateFormat),
    closed_at: format(addDays(today, 20), dateFormat),
    ended_at: format(addDays(today, 30), dateFormat),
    timezone: 'Europe/Lisbon',
  },
  locale: 'pt',
  submitProjectButton: () => {},
};

Ended.args = {
  projectConfig: {
    start_at: format(subDays(today, 18), dateFormat),
    closed_at: format(subDays(today, 5), dateFormat),
    ended_at: format(subDays(today, 3), dateFormat),
    timezone: 'Europe/Lisbon',
  },
  locale: 'pt',
  submitProjectButton: () => {},
};

Closed.args = {
  projectConfig: {
    start_at: format(subDays(today, 18), dateFormat),
    closed_at: format(subDays(today, 5), dateFormat),
    ended_at: format(addDays(today, 3), dateFormat),
    timezone: 'Europe/Lisbon',
  },
  locale: 'pt',
  submitProjectButton: () => {},
};

Archived.args = {
  projectConfig: {
    start_at: format(subDays(today, 5), dateFormat),
    closed_at: format(addDays(today, 10), dateFormat),
    ended_at: format(addDays(today, 15), dateFormat),
    archived_at: format(subDays(today, 2), dateFormat),
    timezone: 'Europe/Lisbon',
  },
  locale: 'pt',
  submitProjectButton: () => {},
};
