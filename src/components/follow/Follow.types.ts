interface Props {
  follower: any;
  href: string;
  title: string;
  onClickCopyToClipboard(): void;
  disabled?: boolean;
  onClickFollow(): void;
  onClickUnFollow(): void;
}

export default Props;
