import Container from '../../elements/container/Container.types';

interface Props {
  container?: Container;
  title: string;
  body: string;
  icon?: string;
  image?: string;
  altImage?: string;
  buttons: JSX.Element;
}

export default Props;
