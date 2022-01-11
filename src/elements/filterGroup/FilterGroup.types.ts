interface Items {
  title: string;
  value: string;
  counter?: string;
  disabled?: boolean;
  checked?: boolean;
  icon?: string;
}

interface Props {
  groupName: string;
  items: Items[];
  onChange(): void;
}

export default Props;
