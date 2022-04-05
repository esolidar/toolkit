interface Props {
  sdgList: any[];
  reply: number[];
  preferredList: number[];
  handleSelectSdgs(ids: number[]): void;
  type?: string;
}

export default Props;
