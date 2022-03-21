interface Props {
  control: any;
  name: string;
  required?: boolean | string;
  textFieldProps?: any;
  onChange?(e: any): any;
  onBlur?(): any;
}

export default Props;
