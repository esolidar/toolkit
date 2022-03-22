interface Props {
  control: any;
  name: string;
  required?: boolean | string;
  htmlEditorProps?: any;
  onChange?(e: any): any;
  onBlur?(e: any): any;
}

export default Props;
