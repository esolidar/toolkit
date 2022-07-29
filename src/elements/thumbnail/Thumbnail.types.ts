// import InputLabelProps from '../inputLabel/InputLabel.types';

interface Image {
  src: string;
  alt?: string;
}

interface Props {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  img: Image;
  url?: string;
  title?: string;
  description?: string;
  inputLabelProps?: any;
}

export default Props;
