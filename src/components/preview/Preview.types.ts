/* eslint-disable camelcase */
interface Image {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

declare type Provider = 'vimeo' | 'youtube' | '';

export interface VideoDetails {
  title: string;
  providerName: Provider;
  thumbnailUrl: string;
  isLoading: boolean;
  hasError: boolean;
  videoUrl: string;
}

interface Props {
  className?: string;
  img?: Image;
  handleDeleteImage?(e: any): void;
  handleClickPreview?(): void;
  fullScreen?: boolean;
  hover?: boolean;
  badgeText?: string;
  type?: 'image' | 'video';
  videoUrl?: string;
  onFinishVideoValidation?(videoDetails: any): void;
  isVisible?: boolean;
  videoDetails?: VideoDetails;
}

export default Props;
