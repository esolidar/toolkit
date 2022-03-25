import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import Preview from '../preview';
import FileCard from '../fileCard';
import convertFileSize from '../../utils/convertFileSize';
import Props from './DragAndDrop.types';
import getEnvVar from '../../utils/getEnvVar';

const DragAndDrop = ({
  itemsList = [],
  handleDeleteItems,
  handleOrderItems,
  type = 'images',
  customClassName,
  customOverlay,
  component,
  errorBadge,
  privateBadge,
}: Props) => {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState([...itemsList]);
  const serverlessResizeImage = getEnvVar('SERVER_LESS_RESIZE_IMAGE');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = event => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = event => {
    setActiveId(null);
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.findIndex(item => active.id === item.id);
        const newIndex = items.findIndex(item => over.id === item.id);
        const ordered = arrayMove(items, oldIndex, newIndex);
        handleOrderItems(ordered);

        return ordered;
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div className="drag-and-drop-component">
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items.map((item, index) => {
            let props = {};
            if (type === 'images') {
              props = {
                id: item.id,
                value: item,
                index,
                handleDeleteImage: id => handleDeleteItems(id, item),
              };
            }
            if (type === 'files') {
              props = {
                file: item,
                id: item.id,
                deleteFile: id => handleDeleteItems(id, item),
                errorBadge,
                privateBadge,
              };
            }

            return (
              <div className={`drag-and-drop-${type}`} key={item.id}>
                {React.createElement(component, props)}
              </div>
            );
          })}

          <DragOverlay>
            {activeId ? (
              <>
                {type === 'images' && (
                  <OverlayPreview
                    image={`${serverlessResizeImage}/${
                      items[items.findIndex(image => image.id === activeId)].image
                    }?width=216px&height=144px`}
                  />
                )}
                {type === 'files' && (
                  <OverlayFile file={items[items.findIndex(file => file.id === activeId)]} />
                )}
                {type === 'custom' && <div className={customClassName}>{customOverlay}</div>}
              </>
            ) : null}
          </DragOverlay>
        </SortableContext>
      </div>
    </DndContext>
  );
};

interface OverlayProps {
  image: string;
}

const OverlayFile = ({ file }: any) => (
  <div className="drag-and-drop-component__drag">
    <FileCard
      showDownloadButton={true}
      title={file.name}
      file={file.file}
      helper={convertFileSize(file.file_size || file.size)}
      dropdownItems={[]}
    />
  </div>
);

const OverlayPreview = ({ image }: OverlayProps) => (
  <div className="drag-and-drop-component__drag">
    <Preview
      img={{
        src: image,
        alt: 'thumb',
      }}
    />
  </div>
);

export default DragAndDrop;
