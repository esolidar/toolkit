import SelectColorProps from '../../selectColor/SelectColor.types';

interface Props {
  control: any;
  name: string;
  validate?: any;
  required?: boolean | string;
  selectColorProps?: SelectColorProps;
  onChange?(e: any): any;
  onBlur?(): any;
}

export default Props;
