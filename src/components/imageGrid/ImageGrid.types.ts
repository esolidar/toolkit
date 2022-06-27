import Image from '../../interfaces/image.types';

interface Props {
  items: Image[];
  type: 'grid' | 'inline';
  editMode: boolean;
  onDeleteImage(id: number): void;
}

export default Props;
