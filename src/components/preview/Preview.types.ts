interface Image {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
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
  onFinishVideoValidation?(isValid: boolean): void;
  isVisible?: boolean;
}

export default Props;
