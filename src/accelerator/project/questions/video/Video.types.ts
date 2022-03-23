interface Props {
  name: string;
  reply: string;
  required: boolean;
  id?: string;
  control?: any;
  onDeletePreview(): void;
  onFinishVideoValidation(videoDetails: any): void;
}

export default Props;
