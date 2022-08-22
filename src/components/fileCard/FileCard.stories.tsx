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
export const Disabled: Story<Props> = Template.bind({});
export const WithDateUploaded: Story<Props> = Template.bind({});
export const WithDescription: Story<Props> = Template.bind({});
export const WithBadges: Story<Props> = Template.bind({});
export const WithOptions: Story<Props> = Template.bind({});

Default.args = {
  title: 'esolidar - Ajudando a ajudar.pdf',
  size: 15650,
};

Disabled.args = {
  title: 'esolidar - Ajudando a ajudar.pdf',
  size: 15650,
  disabled: true,
};

WithDateUploaded.args = {
  title: 'esolidar - Ajudando a ajudar.pdf',
  size: 15650,
  dateUploaded: '2022-03-25 12:00:01',
};

WithDescription.args = {
  title: 'esolidar - Ajudando a ajudar.pdf',
  size: 15650,
  subtitle: 'Donec eleifend erat a nibh faucibus.',
};

WithBadges.args = {
  title: 'esolidar - Ajudando a ajudar.pdf',
  size: 15650,
  showBadgePrivate: true,
  showBadgeFailed: true,
};

WithOptions.args = {
  title: 'esolidar - Ajudando a ajudar.pdf',
  size: 15650,
  dropdownItems: [
    {
      id: 0,
      leftIcon: 'Edit2',
      onClick: () => {},
      text: 'Edit',
    },
    {
      id: 1,
      leftIcon: 'Trash',
      onClick: () => {},
      text: 'Delete',
    },
  ],
  showDownloadButton: true,
  file: 'whitelabel/9/projects/444/public-comment/files/regulamento-leilao-2017-EN-8f714f3f-6ef5-4d86-bc8b-ed0647209644.pdf',
};
