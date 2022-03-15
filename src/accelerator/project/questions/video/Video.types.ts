interface Props {
  name: string;
  reply: string;
  required: boolean;
  id?: string;
  control?: any;
  onDeletePreview(): void;
}

export default Props;
