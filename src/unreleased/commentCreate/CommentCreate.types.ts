interface Props {
  placeholder?: string;
  onSubmitComment(comment: string): void;
  userThumb?: string;
  id?: string;
  textAreaId: string;
  startsHidden?: boolean;
}

export default Props;
