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
import { Fade } from 'react-awesome-reveal';
import SortableItem from './SortableItem';
import Preview from '../../../components/preview';

interface Props {
  imagesList: any[];
  env: string;
  handleDeleteImage(id: number, item: any): void;
  handleOrderImages(array: any): void;
}

const DragAndDrop = ({ imagesList = [], env, handleDeleteImage, handleOrderImages }: Props) => {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState([...imagesList]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = event => {
    setActiveId(event.active.id);
  };

  const handleReveal = inView => {
    if (inView) {
      const element = document.getElementsByClassName('active-page')[0];
      const card = document.getElementsByClassName('checkbox-card');

      if (card.length < imagesList.length && element) element.scrollTop = element.scrollHeight;
    }
  };

  const handleDragEnd = event => {
    setActiveId(null);
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.findIndex(item => active.id === item.id);
        const newIndex = items.findIndex(item => over.id === item.id);
        const ordered = arrayMove(items, oldIndex, newIndex);
        handleOrderImages(ordered);
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
          <Fade onVisibilityChange={handleReveal} cascade duration={700} damping={0.1} triggerOnce>
            {items.map((item, index) => {
              return (
                <SortableItem
                  key={item.id}
                  id={item.id}
                  value={item}
                  env={env}
                  index={index}
                  handleDeleteImage={id => handleDeleteImage(id, item)}
                />
              );
            })}
          </Fade>
          <DragOverlay>
            {activeId ? (
              <div className="drag-and-drop-component__drag">
                <Preview
                  img={{
                    src: `${env}/${
                      items[items.findIndex(image => image.id === activeId)].image
                    }?width=216px&height=144px`,
                    alt: 'thumb',
                  }}
                />
              </div>
            ) : null}
          </DragOverlay>
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default DragAndDrop;
