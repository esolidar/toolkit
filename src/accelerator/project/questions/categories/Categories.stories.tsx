import { VFC, ReactNode, useState } from 'react';
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

const TemplateEmpty: Story<Props> = (args: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleChangeCategories = ids => {
    setSelectedCategories(ids);
  };

  return (
    <StorybookFormProvider>
      <div className="content-step-page">
        <Categories
          {...args}
          handleChangeCategories={handleChangeCategories}
          reply={selectedCategories}
        />
      </div>
    </StorybookFormProvider>
  );
};

const Template: Story<Props> = (args: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([275, 306, 307]);

  const handleChangeCategories = ids => {
    setSelectedCategories(ids);
  };

  return (
    <StorybookFormProvider>
      <div className="content-step-page">
        <Categories
          {...args}
          handleChangeCategories={handleChangeCategories}
          reply={selectedCategories}
        />
      </div>
    </StorybookFormProvider>
  );
};

export const Default: Story<Props> = TemplateEmpty.bind({});
export const WithSelectedCategories: Story<Props> = Template.bind({});

Default.args = {
  categoriesList: projectCategories.data,
  reply: [],
};

WithSelectedCategories.args = {
  categoriesList: projectCategories.data,
};
