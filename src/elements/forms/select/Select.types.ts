interface Props {
  control: any;
  name: string;
  required?: boolean | string;
  selectFormProps?: any;
  onChange?(e: any): any;
  onBlur?(): any;
}

export default Props;
