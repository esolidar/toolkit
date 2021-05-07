import Icon from './Icon';
import icons from '../../constants/icons';

export default {
  title: 'Components/Icon',
  component: Icon,
};

const Template = () => (
  <div className="d-flex" style={{ flexFlow: 'wrap' }}>
    {icons.map(icon => (
      <div className="p-3 d-flex align-items-center flex-column" style={{ width: '20%' }}>
        <Icon iconClass={icon.name} />
        <div>{icon.name}</div>
        <div>{icon.font}</div>
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  jest: ['Icon.test.js'],
};
Default.args = {};
