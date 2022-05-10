export interface Item {
  url: string;
  thumbnail?: string;
  altTag?: string;
  type: string;
}

interface Props {
  listItems: Item[];
  video?: string;
  autoplay?: boolean;
}

export default Props;
