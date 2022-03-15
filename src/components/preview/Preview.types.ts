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
  handleDeleteImage?(): void;
  fullScreen?: boolean;
  hover?: boolean;
  badgeText?: string;
  type?: 'image' | 'video';
  videoUrl?: string;
  onErrorVideo?(): void;
}

export default Props;
