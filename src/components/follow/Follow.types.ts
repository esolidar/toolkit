interface Followers {
  followersCount: number;
  following: boolean;
}

interface Props {
  followers: Followers;
  href: string;
  title: string;
  onClickCopyToClipboard(): void;
  disabled?: boolean;
  onClickFollow(): void;
  onClickUnFollow(): void;
}

export default Props;
