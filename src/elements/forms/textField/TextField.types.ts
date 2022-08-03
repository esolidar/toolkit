interface Props {
  control: any;
  name: string;
  required?: boolean | string;
  textFieldProps?: any;
  onChange?(e: any): any;
  onBlur?(e: any): any;
  dataTestId?: string;
  validate?: any;
}
export default Props;
