import { VFC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import Categories from './Categories';
import Props from './Categories.types';
import projectCategories from '../../../../../__mocks__/projectCategories';

export default {
  title: 'Accelerator/Project/Questions/Categories',
  component: Categories,
  parameters: {
    jest: ['Categories.test.js'],
  },
} as Meta;

const StorybookFormProvider: VFC<{ children: ReactNode }> = ({ children }: any) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}>{children}</form>
    </FormProvider>
  );
};

const Template: Story<Props> = (args: Props) => (
  <StorybookFormProvider>
    <div className="content-step-page">
      <Categories {...args} />
    </div>
  </StorybookFormProvider>
);

export const Default: Story<Props> = Template.bind({});
export const WithSelectedCategories: Story<Props> = Template.bind({});

Default.args = {
  categoriesList: projectCategories.data,
  selectedCategories: [],
  handleChangeCategories: () => {},
};

WithSelectedCategories.args = {
  categoriesList: projectCategories.data,
  selectedCategories: [275, 306, 307],
  handleChangeCategories: () => {},
};
