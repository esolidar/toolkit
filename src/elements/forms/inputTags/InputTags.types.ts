import InputTagsProps from '../../inputTags/InputTags.types';

interface Props {
  control: any;
  name: string;
  required?: boolean | string;
  inputTagsProps?: InputTagsProps;
  onChange?(e: any): any;
  onBlur?(): any;
}

export default Props;
