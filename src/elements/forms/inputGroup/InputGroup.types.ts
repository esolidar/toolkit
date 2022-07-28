import inputGroupFormProps from '../../inputGroup/InputGroup.types';

interface Props {
  control: any;
  name: string;
  required?: boolean | string;
  inputGroupFormProps?: inputGroupFormProps;
  onChange?(e: any): any;
  onBlur?(): any;
}

export default Props;
