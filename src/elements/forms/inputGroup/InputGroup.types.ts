import InputGroupProps from '../../inputGroup/InputGroup.types';

interface Props {
  control: any;
  name: string;
  required?: boolean | string;
  inputGroupProps?: InputGroupProps;
  onChange?(e: any): any;
  onBlur?(): any;
}

export default Props;
