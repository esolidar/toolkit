interface Props {
  control: any;
  name: string;
  required?: boolean | string;
  TextfieldNumberProps?: any;
  onChange?(e: any): any;
  onBlur?(): any;
}

export default Props;
