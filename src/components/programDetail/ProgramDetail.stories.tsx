import { Story, Meta } from '@storybook/react';
import React from 'react';
import ProgramDetail from './ProgramDetail';
import Props from './ProgramDetail.types';
import Breadcrumbs from '../../elements/breadcrumbs';
import accelerationProgram from '../../../__mocks__/accelerationProgram';

export default {
  title: 'Components/ProgramDetail',
  component: ProgramDetail,
  parameters: {
    jest: ['ProgramDetail.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ProgramDetail {...args} />;

export const Default: Story<Props> = Template.bind({});
export const PreviewMode: Story<Props> = Template.bind({});
export const EmptyProgram: Story<Props> = Template.bind({});

Default.args = {
  programConfig: accelerationProgram,
  onSubmitProjectButton: () => {},
  breadcrumb: (
    <Breadcrumbs
      breadcrumbs={[
        {
          handleClick: () => {},
          title: 'Accelarator',
        },
        {
          handleClick: null,
          title: 'Project Title',
        },
      ]}
    />
  ),
};

const accelerationProgramPreview = {
  ...accelerationProgram,
};

accelerationProgramPreview.images = [];
accelerationProgramPreview.title = null;
accelerationProgramPreview.intro = null;
accelerationProgramPreview.location = null;
accelerationProgramPreview.who_should_apply = null;
accelerationProgramPreview.program_format = null;
accelerationProgramPreview.skills = [];
accelerationProgramPreview.interests = [];

PreviewMode.args = {
  programConfig: accelerationProgramPreview,
  onSubmitProjectButton: () => {},
  onClickAccelerator: () => {},
  breadcrumb: (
    <Breadcrumbs
      breadcrumbs={[
        {
          handleClick: () => {},
          title: 'Accelarator',
        },
        {
          handleClick: null,
          title: 'Project Title',
        },
      ]}
    />
  ),
  previewMode: true,
};

EmptyProgram.args = {
  programConfig: {},
  onSubmitProjectButton: () => {},
  onClickAccelerator: () => {},
  breadcrumb: (
    <Breadcrumbs
      breadcrumbs={[
        {
          handleClick: () => {},
          title: 'Accelarator',
        },
        {
          handleClick: null,
          title: 'Project Title',
        },
      ]}
    />
  ),
  previewMode: true,
};
