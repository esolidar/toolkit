/* eslint-disable no-alert */
import { VFC, ReactNode, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';
import { Story, Meta } from '@storybook/react';
import WizardOrdered from './WizardOrdered';
import Props from './WizardOrdered.types';
import WizardHeader from '../wizard/header/WizardHeader';
import Section from '../../accelerator/project/questions/section';
import Success from '../../accelerator/project/questions/success';
import Checkbox from '../../accelerator/project/questions/checkbox';
import Radiobox from '../../accelerator/project/questions/radiobox';
import Description from '../../accelerator/project/questions/description';
import Video from '../../accelerator/project/questions/video';
import ShortAnswer from '../../accelerator/project/questions/shortAnswer';
import LongAnswer from '../../accelerator/project/questions/longAnswer';
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

export default {
  title: 'Components/WizardOrdered',
  component: WizardOrdered,
  parameters: {
    jest: ['WizardOrdered.test.js'],
  },
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const [activePage, setActivePage] = useState<number>(1);
  const [showWizard, setShowWizard] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const ChangePage = page => setActivePage(page);
  const handleCloseWizard = () => setShowWizard(false);
  const handlePublish = () => setIsSuccess(true);

  return (
    <StorybookFormProvider>
      <div>
        <button
          onClick={() => {
            setShowWizard(true);
            setActivePage(1);
            setIsSuccess(false);
          }}
        >
          Open Wizard
        </button>
        <WizardOrdered
          {...args}
          handlePublish={handlePublish}
          showWizard={showWizard}
          isSuccess={isSuccess}
          handleCloseWizard={handleCloseWizard}
          activePage={activePage}
          onChangePage={ChangePage}
        />
      </div>
    </StorybookFormProvider>
  );
};

export const Open: Story<Props> = Template.bind({});

const section = questions.customQuestions.filter(({ type }) => type === 'section')[0].form;
const checkboxes = questions.customQuestions.filter(({ type }) => type === 'checkboxes')[0];
const radioboxes = questions.customQuestions.filter(({ type }) => type === 'multiChoice')[0];
const shortAnswer = questions.customQuestions.filter(({ type }) => type === 'shortAnswer')[0];
const longAnswer = questions.customQuestions.filter(({ type }) => type === 'longAnswer')[0];

Open.args = {
  // showWizard: true,
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
    <Description userName={user.firstName} name="description" reply="" required />,
    <Video name="video" reply="https://youtu.be/iik25wqIuFo" required={false} />,
    <Page3 />,
    <Section {...section} />,
    <Checkbox {...checkboxes.form} type={checkboxes.type} reply={[0, 3]} />,
    <Radiobox {...radioboxes.form} type={radioboxes.type} reply="2" />,
    <ShortAnswer {...shortAnswer.form} type={shortAnswer.type} reply="teste" />,
    <LongAnswer {...longAnswer.form} type={checkboxes.type} reply="teste" />,
    <Success userName={user.firstName} companyName={company.name} />,
  ],
  isPageValid: true,
  companyName: company.name,
};
