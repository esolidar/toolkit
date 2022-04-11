import { VideoDetails } from '../../../../components/preview/Preview.types';

interface Props {
  id: string;
  control?: any;
  name: string;
  required: boolean;
  reply: string;
  onFinishVideoValidation(videoDetails: any): void;
  onDeletePreview(): void;
  onClearReply(): void;
  videoDetails: VideoDetails;
}

export default Props;
