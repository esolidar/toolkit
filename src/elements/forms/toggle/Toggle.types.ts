interface Props {
  control: any;
  name: string;
  required?: boolean | string;
  toggleProps?: any;
  onChange?(e: any): any;
}

export default Props;
