interface Props {
  control: any;
  name: string;
  required?: boolean | string;
  textareaFieldProps?: any;
  onChange?(e: any): any;
  onBlur?(e: any): any;
  dataTestId?: string;
}
export default Props;
