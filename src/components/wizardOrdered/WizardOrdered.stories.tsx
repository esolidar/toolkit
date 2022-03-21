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
import Images from '../../accelerator/project/questions/images';
import LongAnswer from '../../accelerator/project/questions/longAnswer';
import Categories from '../../accelerator/project/questions/categories';
import Sdg from '../../accelerator/project/questions/sdg';
import Files from '../../accelerator/project/questions/files';
import projectConfig from '../../../__mocks__/projectConfig';
import user from '../../../__mocks__/user';
import company from '../../../__mocks__/company';
import image from '../../../__mocks__/image';
import projectCategories from '../../../__mocks__/projectCategories';
import sdgList from '../../../__mocks__/sdgList';
import projectFiles from '../../../__mocks__/projectFiles';

const questions = JSON.parse(projectConfig.data.form);

const StorybookFormProvider: VFC<{ children: ReactNode }> = ({ children }: any) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}>{children}</form>
    </FormProvider>
  );
};

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
const files = questions.customQuestions.filter(({ type }) => type === 'fileUploader')[0];

Open.args = {
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
  isLoading: false,
  pages: [
    <Description userName={user.firstName} name="description" reply="" required />,
    <Video
      name="video"
      reply="https://youtu.be/f7x5IeWi0v8"
      required={false}
      onDeletePreview={() => {}}
    />,
    <Images
      reply={[
        {
          ...image,
          id: 1,
          image: 'whitelabel/20/project-config/5da1f8b5-7686-4760-9b1d-0985f4b1b9a3.jpg',
        },
        {
          ...image,
          id: 2,
          image: 'whitelabel/20/project-config/9c768e0f-62b2-42de-a4f7-cd628202dcce.jpg',
        },
        {
          ...image,
          id: 3,
          image: 'whitelabel/5/project-config/deaa24ad-b67d-4468-b27f-4993c2a4b4b7.jpg',
        },
        {
          ...image,
          id: 4,
          image: 'whitelabel/21/project-config/218fc584-cf8f-4c66-a438-e2699883b45f.jpg',
        },
      ]}
      handleOrderImages={() => {}}
      handleSelectImage={() => {}}
      handleDeleteImage={() => {}}
      cropModalStatus={false}
    />,
    <Categories
      categoriesList={projectCategories.data}
      reply={[]}
      handleChangeCategories={() => {}}
    />,
    <Sdg
      sdgList={sdgList.data}
      reply={[1, 3]}
      handleSelectSdgs={() => {}}
      preferredList={[2, 3]}
    />,
    <Section {...section} />,
    <Checkbox {...checkboxes.form} type={checkboxes.type} reply={[0, 3]} />,
    <Radiobox {...radioboxes.form} type={radioboxes.type} reply="2" />,
    <ShortAnswer {...shortAnswer.form} type={shortAnswer.type} reply="teste" />,
    <LongAnswer {...longAnswer.form} type={checkboxes.type} reply="teste" />,
    <Files
      {...files.form}
      reply={projectFiles.data}
      handleDeleteFile={() => {}}
      handleSelectFile={() => {}}
      onDropError={() => {}}
    />,
    <Success userName={user.firstName} companyName={company.name} />,
  ],
  isPageValid: true,
  companyName: company.name,
};
