/* eslint-disable no-alert */
import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';
import { Story, Meta } from '@storybook/react';
import WizardOrdered from './WizardOrdered';
import Props from './WizardOrdered.types';
import TextareaField from '../../elements/textareaField';
import WizardHeader from '../wizard/header/WizardHeader';
import Viewport from '../viewport';
import CustomQuestionsSectionProps from '../../accelerator/project/questions/section/Section';
import Success from '../../accelerator/project/questions/success/Success';
import Checkbox from '../../accelerator/project/questions/checkbox/Checkbox';
import projectConfig from '../../../__mocks__/projectConfig';
import user from '../../../__mocks__/user';
import company from '../../../__mocks__/company';

const questions = JSON.parse(projectConfig.data.form);

const StorybookFormProvider: VFC<{ children: ReactNode }> = ({ children }: any) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}>{children}</form>
    </FormProvider>
  );
};

const Page1 = ({ userName }: any) => (
  <Viewport size="lg" centred={false}>
    <>
      <h2>Description</h2>
      <p>Welcome aboard {userName}.</p>
      <p>
        Describe your project idea in a concise and descriptive manner, sharing all the amazing
        things you want to achieve!
      </p>
      <TextareaField
        field="Textarea_name"
        id="textareaField-id"
        onChange={() => {}}
        value=""
        maxLength={400}
        required
        showOptionalLabel
        size="lg"
      />
    </>
  </Viewport>
);

const Page2 = () => (
  <>
    <h2>Other Description</h2>
    <TextareaField
      cssClass=""
      defaultValue="Textarea"
      field="Textarea_name"
      help="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lorem quis magna rhoncus, iaculis ullamcorper tortor venenatis."
      id="textareaField-id"
      label="Aliquam fringilla"
      onChange={() => {}}
      placeholder="Placeholder"
      required
      showOptionalLabel
      size="lg"
    />
  </>
);

const Page3 = () => (
  <>
    <h2>Page 3</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non tincidunt libero. Aenean
      justo purus, venenatis tristique metus a, luctus pharetra ligula. Nullam accumsan felis nisl.
      Integer vitae viverra lorem, egestas vehicula libero. Pellentesque viverra pellentesque tellus
      ac mattis. Quisque laoreet vulputate erat gravida lacinia. Nunc sed hendrerit ipsum, commodo
      rutrum quam. Morbi velit augue, maximus in ipsum eu, aliquet aliquam lacus. Sed a libero
      turpis.
    </p>
  </>
);

const Page4 = () => (
  <>
    <h2>Page 4</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </>
);

export default {
  title: 'Components/WizardOrdered',
  component: WizardOrdered,
  parameters: {
    jest: ['WizardOrdered.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <StorybookFormProvider>
    <div>
      <WizardOrdered {...args} />
    </div>
  </StorybookFormProvider>
);

export const Open: Story<Props> = Template.bind({});

const section = questions.customQuestions.filter(i => i.type === 'section')[0].form;
const checkboxes = questions.customQuestions.filter(i => i.type === 'checkboxes')[0].form;

Open.args = {
  showWizard: true,
  header: (
    <WizardHeader
      disabledDarkButton={false}
      closeWizard={() => {}}
      handleDarkButton={() => {}}
      buttonDarkText="Save & Close"
      buttonPrimaryText="Publish"
      handlePrimaryButton={() => {}}
      cdnStaticUrl=""
      disabledPrimaryButton={false}
      isLoading={false}
      isDraft={true}
      title="Destino4All"
      editMode={false}
    />
  ),
  pages: [
    { page: <Checkbox {...checkboxes} /> },
    {
      page: (
        <CustomQuestionsSectionProps
          title={section.title}
          description={section.description}
          privacy={section.privacy}
          required={false}
        />
      ),
    },
    { page: <Page1 userName={user.firstName} /> },
    { page: <Page4 /> },
    { page: <Page1 userName={user.firstName} /> },
    { page: <Page2 /> },
    { page: <Page3 /> },
    { page: <Success userName={user.firstName} companyName={company.name} /> },
  ],
  validForm: true,
  handleCloseWizard: () => {
    alert('handleCloseWizard');
  },
  isSuccess: false,
  companyName: company.name,
};
