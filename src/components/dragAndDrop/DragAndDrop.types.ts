interface Props {
  itemsList: any[];
  handleDeleteItems(id: number, item: any): void;
  handleOrderItems(array: any): void;
  type: 'images' | 'files' | 'custom';
  component: any;
  customOverlay?: JSX.Element;
  customClassName?: string;
  errorBadge?: string;
  privateBadge?: string;
}

export default Props;
