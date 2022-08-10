import InputLabelProps from '../inputLabel/InputLabel.types';

interface Image {
  src: string;
  alt?: string;
}

interface HasCropper {
  showCropper: boolean;
  aspectRatioW: number;
  aspectRatioH: number;
  minWidth: number;
  minHeight: number;
}

interface DropZoneBoxProps {
  onSelect(): void;
  deleteImageGallery?(): void;
  onDropError?(): void;
  accept: string;
  showFooterCropper: boolean;
  hasCropper: HasCropper;
}

interface Props {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  img: Image;
  url?: string;
  title?: string;
  description?: string;
  inputLabelProps?: InputLabelProps;
  upload?: boolean;
  dropZoneBoxProps?: DropZoneBoxProps;
  handleOnSelectImage?(): void;
  minHeight?: number;
}

export default Props;
