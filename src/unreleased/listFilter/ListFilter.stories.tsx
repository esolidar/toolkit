import { Story, Meta } from '@storybook/react';
import ListFilter from './ListFilter';
import Props from './ListFilter.types';
import TextField from '../../elements/textField';
import SelectField from '../../elements/selectField';

export default {
  title: 'Unreleased/ListFilter',
  component: ListFilter,
  parameters: {
    jest: ['ListFilter.test.tsx'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ListFilter {...args} />;

export const Default: Story<Props> = Template.bind({});
export const WithSpace: Story<Props> = Template.bind({});

Default.args = {
  items: [
    <TextField
      onChange={() => {}}
      placeholder="Search auctions"
      id="test"
      value=""
      leftIcon={{ name: 'icon-search', show: true }}
      dataTestId="text-field"
    />,
    <SelectField
      options={[
        { id: 0, name: 'Best match' },
        { id: 1, name: 'Newly listed' },
        { id: 2, name: 'Lowest goal' },
        { id: 3, name: 'Highest goal' },
        { id: 4, name: 'Ending soon' },
      ]}
      value="0"
      label="Sort by"
      onChange={() => {}}
      isLabelLeft
      dataTestId="select-field"
    />,
  ],
};

WithSpace.args = {
  items: [
    <TextField
      onChange={() => {}}
      placeholder="Search auctions"
      id="test"
      value=""
      leftIcon={{ name: 'icon-search', show: true }}
      dataTestId="text-field"
    />,
    'space',
    <SelectField
      options={[
        { id: 0, name: 'Best match' },
        { id: 1, name: 'Newly listed' },
        { id: 2, name: 'Lowest goal' },
        { id: 3, name: 'Highest goal' },
        { id: 4, name: 'Ending soon' },
      ]}
      value="0"
      label="Sort by"
      onChange={() => {}}
      isLabelLeft
      dataTestId="select-field"
    />,
  ],
};
