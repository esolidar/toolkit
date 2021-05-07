import { FormattedMessage } from 'react-intl';
import SupportedSection from './SupportedSection';

export default {
  title: 'Components/SupportedSection',
  component: SupportedSection,
};

const Template = args => <SupportedSection {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  jest: ['SupportedSection.test.js'],
};
Default.args = {
  href: 'https://esolidar.local:8081/b/teste13',
  imgSrc: 'https://cdn.testesolidar.com/brands/91d24167-d115-48c8-99b2-0a2dc8b6fc0e-THUMB.png',
  text: (
    <FormattedMessage
      id="crowdfunding.detail.companySupport"
      values={{
        companyName: 'eSolidar',
      }}
    />
  ),
};
