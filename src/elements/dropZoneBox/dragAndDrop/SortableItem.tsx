import React from 'react';
import { useIntl } from 'react-intl';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Preview from '../../../components/preview';
import Icon from '../../icon';

interface Image {
  image: string;
}

interface Props {
  value: Image;
  id: any;
  env: string;
  handleDeleteImage(id: number): void;
  index: number;
}

const SortableItem = ({ value, id, env, handleDeleteImage, index }: Props) => {
  const intl = useIntl();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style: any = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? '100' : 'auto',
    opacity: isDragging ? 0.3 : 1,
  };

  const previewImageSrc = value.image.includes('http')
    ? `${value.image}?width=216px&height=144`
    : `${env}/${value.image}?width=216px&height=144px`;

  return (
    <div ref={setNodeRef} style={style}>
      <div className="drag-and-drop-thumbs">
        <div {...listeners} {...attributes} className="drag-and-drop-thumbs__item">
          <Preview
            badgeText={index === 0 ? intl.formatMessage({ id: 'toolkit.cover' }) : null}
            img={{ src: previewImageSrc, alt: 'thumb' }}
          />
        </div>
        <button
          type="button"
          className="drag-and-drop-thumbs__delete-button"
          onClick={() => handleDeleteImage(id)}
        >
          <Icon name="X" size="sm" />
        </button>
      </div>
    </div>
  );
};

export default SortableItem;
