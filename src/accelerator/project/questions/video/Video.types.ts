interface Props {
  control?: any;
  name: string;
  required: boolean;
  reply: string;
  onFinishVideoValidation(videoDetails: any): void;
  onDeletePreview(): void;
}

export default Props;
