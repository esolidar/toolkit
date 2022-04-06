interface Props {
  sdgList: any[];
  isValid: boolean;
  required: boolean;
  reply: number[];
  preferredList: number[];
  handleSelectSdgs(ids: number[]): void;
  type?: string;
}

export default Props;
