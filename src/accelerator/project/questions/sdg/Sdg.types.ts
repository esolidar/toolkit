interface Props {
  sdgList: any[];
  required: boolean;
  requiredField: boolean;
  reply: number[];
  preferredList: number[];
  handleSelectSdgs(ids: number[]): void;
  type?: string;
}

export default Props;
