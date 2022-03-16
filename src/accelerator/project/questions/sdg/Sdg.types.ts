interface Props {
  sdgList: any[];
  selectedSdgs: number[];
  preferredList: number[];
  handleSelectSdgs(ids: number[]): void;
}

export default Props;
