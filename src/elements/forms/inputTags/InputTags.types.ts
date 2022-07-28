import inputTagsFormProps from '../../inputTags/InputTags.types';

interface Props {
  control: any;
  name: string;
  required?: boolean | string;
  inputTagsFormProps?: inputTagsFormProps;
  onChange?(e: any): any;
  onBlur?(): any;
}

export default Props;
