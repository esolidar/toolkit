interface Items {
  title: string;
  counter?: string | number;
  disabled?: boolean;
  checked?: boolean;
}

interface Props {
  groupName: string;
  items: Items[];
  onChange(): void;
}

export default Props;
