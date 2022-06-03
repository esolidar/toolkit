interface Followers {
  followersCount: number;
  following: boolean;
}

interface FollowProps {
  followers: Followers;
  href: string;
  title: string;
  onClickCopyToClipboard(): void;
  disabled?: boolean;
  onClickFollow(): void;
  onClickUnFollow(): void;
}

export default FollowProps;
