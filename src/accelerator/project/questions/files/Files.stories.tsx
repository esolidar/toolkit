import { Story, Meta } from '@storybook/react';
import Files from './Files';
import Props from './Files.types';
import projectConfig from '../../../../../__mocks__/projectConfig';
import projectFiles from '../../../../../__mocks__/projectFiles';

const questions = JSON.parse(projectConfig.data.form);
const fileUploader = questions.customQuestions.filter(i => i.type === 'fileUploader')[0].form;

export default {
  title: 'Accelerator/Project/Questions/Files',
  component: Files,
  parameters: {
    jest: ['Images.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <div className="active-page">
    <div className="content-step-page">
      <Files {...args} />
    </div>
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  question: fileUploader.question,
  description: fileUploader.description,
  reply: [projectFiles.data[0]],
  handleDeleteFile: id => {
    alert(id);
  },
  handleSelectFile: () => {},
  onDropError: errorList => {
    console.log(errorList);
  },
};
