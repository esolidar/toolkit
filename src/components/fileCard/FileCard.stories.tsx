import { Story, Meta } from '@storybook/react';
import FileCard from './FileCard';
import Props from './FileCard.types';

export default {
  title: 'Components/FileCard',
  component: FileCard,
  parameters: {
    jest: ['FileCard.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="mt-5">
    <FileCard {...args} />
  </div>
);

export const Default: Story<Props> = Template.bind({});
export const Simple: Story<Props> = Template.bind({});

Default.args = {
  showDownloadButton: true,
  title: 'esolidar - Ajudando a ajudar.pdf',
  badge: 'Private',
  subtitle:
    'Donec eleifend erat a nibh faucibus, sit amet tempor tortor pulvinar. Sed vestibulum luctus gravida.',
  helper: 'Uploaded on 2022-03-16 15:33:19 - 1.44 Mb',
  dropdownItems: [
    {
      id: 0,
      leftIcon: 'Edit2',
      onClick: () => {},
      show: true,
      text: 'Edit',
    },
    {
      id: 0,
      leftIcon: 'Trash',
      onClick: () => {},
      show: true,
      text: 'Delete',
    },
  ],
};

Simple.args = {
  showDownloadButton: false,
  disabled: true,
  image:
    'https://image.testesolidar.com/whitelabel/5/project-config/be8814f2-0970-4d54-b348-9ed205161928.jpg?width=100px&height=100px',
  title: 'esolidar - Ajudando a ajudar.pdf',
  helper: 'Uploaded on 2022-03-16 15:33:19 - 1.44 Mb',
  dropdownItems: [
    {
      id: 0,
      leftIcon: 'Trash',
      onClick: () => {},
      show: true,
      text: 'Delete',
    },
  ],
};
