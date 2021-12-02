interface Image {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

interface Props {
  className?: string;
  img?: Image;
  handleDeleteImage(): void;
  fullScreen: boolean;
  badgeText: string;
}

export default Props;