import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Sdg from './Sdg';
import Props from './Sdg.types';
import sdgList from '../../../../../__mocks__/sdgList';

export default {
  title: 'Accelerator/Project/Questions/Sdg',
  component: Sdg,
  parameters: {
    jest: ['Sdg.test.js'],
  },
} as Meta;

const TemplateEmpty: Story<Props> = (args: Props) => {
  const [selectedSdgs, setSelectedSdgs] = useState<number[]>([]);

  const handleSelectSdgs = ids => {
    setSelectedSdgs(ids);
  };

  return (
    <div className="content-step-page">
      <Sdg {...args} handleSelectSdgs={handleSelectSdgs} reply={selectedSdgs} />
    </div>
  );
};

const Template: Story<Props> = (args: Props) => {
  const [selectedSdgs, setSelectedSdgs] = useState<number[]>([1, 2, 4]);

  const handleSelectSdgs = ids => {
    setSelectedSdgs(ids);
  };

  return (
    <div className="active-page">
      <div className="content-step-page">
        <Sdg {...args} handleSelectSdgs={handleSelectSdgs} reply={selectedSdgs} />
      </div>
    </div>
  );
};

export const Default: Story<Props> = TemplateEmpty.bind({});
export const WithSelectedSdgs: Story<Props> = Template.bind({});

Default.args = {
  sdgList: sdgList.data,
  preferredList: [2, 3, 5],
};

WithSelectedSdgs.args = {
  sdgList: sdgList.data,
  preferredList: [2, 3],
};
