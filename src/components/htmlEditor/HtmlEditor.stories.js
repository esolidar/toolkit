import HtmlEditor from './HtmlEditor';

export default {
  title: 'Components/HtmlEditor',
  component: HtmlEditor,
};

const Template = args => <HtmlEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialContent: '<p>Titulo</p>',
};
