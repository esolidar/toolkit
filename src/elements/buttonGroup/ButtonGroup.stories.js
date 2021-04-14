import ButtonGroup from './ButtonGroup';

export default {
  title: 'Elements/ButtonGroup',
  component: ButtonGroup,
};

const Template = args => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonList: [
    {
      isActive: true,
      onClick: () => {},
      text: 'Activos',
    },
    {
      isActive: false,
      onClick: () => {},
      text: 'Inactivos',
    },
  ],
};
