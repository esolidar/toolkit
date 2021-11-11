import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const copy = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const item = sourceClone[droppableSource.index];

  destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  return destClone;
};

const Kiosk = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  border: 2px solid #eaebec;
  border-radius: 8px;
  background: #ffffff;
  padding: 16px 24px;
`;

const ItemKiosk = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border: ${props => (props.isDragging ? '1px solid #eaebec' : 'none')};
  box-shadow: ${props =>
    props.isDragging
      ? '0px 16px 48px rgba(26, 27, 28, 0.04), 0px 4px 24px rgba(26, 27, 28, 0.04)'
      : 'none'};
  border-radius: 8px;
  background: #fff;
  padding: 16px;
  font-size: 17px;
  &:hover {
    background-color: rgba(12, 131, 128, 0.08);
    color: #0c8380;
  }
`;

const ItemList = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  width: 648px;
  margin-bottom: 32px;
`;

const Clone = styled(ItemKiosk)`
  + div {
    display: none !important;
  }
`;

const Handle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0.5rem;
`;

const Content = styled.div`
  ${({ showPlaceholder }) =>
    showPlaceholder
      ? `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 72px;
  color: #6c7679;
  background: #fff;
  border: 2px dashed #dadcde;
  border-radius: 8px;
  width: 648px;
  height: 168px;

  > * {
    &:nth-child(2) {
       position: absolute !important;
    }
  }

 &:hover {
   border: 2px dashed #81cce5;
   color: #227c9d;
 }
  `
      : `width: fit-content`}
`;

// const Notice = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 72px;
//   color: ##6c7679;
//   background: #ffffff;
//   border: 2px dashed #dadcde;
//   border-radius: 8px;
//   width: 648px;
//   &:hover {
//     border: 2px dashed #81cce5;
//     color: #227c9d;
//   }
// `;

const Section = styled.div`
  padding: 16px;
  line-height: 1.5;
  color: #aaa;
  border: 1px solid gray;
  border-radius: 8px;
  width: 648px;
  height: 229px;
  background-color: white;
`;

const ShortAnswer = styled.div`
  padding: 16px;
  line-height: 1.5;
  color: #aaa;
  border: 1px solid gray;
  border-radius: 8px;
  width: 648px;
  height: 329px;
  background-color: white;
`;

const LongAnswer = styled.div`
  padding: 16px;
  line-height: 1.5;
  color: #aaa;
  border: 1px solid gray;
  border-radius: 8px;
  width: 648px;
  height: 429px;
  background-color: white;
`;

const ITEMS = [
  {
    id: 'item-0',
    content: 'Section',
    component: (
      <Section>
        <h1>Hi</h1>
        <p>I am a section</p>
      </Section>
    ),
  },
  {
    id: 'item-1',
    content: 'Short Answer',
    component: (
      <ShortAnswer>
        <h1>Hello</h1>
        <p>I am a short answer</p>
      </ShortAnswer>
    ),
  },
  {
    id: 'item-2',
    content: 'Long Answer',
    component: (
      <LongAnswer>
        <h1>Good morning</h1>
        <p>I am a long answer</p>
      </LongAnswer>
    ),
  },
];

// const queryAttr = 'data-rbd-drag-handle-draggable-id';

const DragAndDrop = () => {
  const [list, setList] = useState([]);
  // const [placeholderProps, setPlaceholderProps] = useState({});

  const onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId)
      setList(reorder(list, source.index, destination.index));
    else setList(copy(ITEMS, list, source, destination));

    // setPlaceholderProps({});
  };

  // const onDragUpdate = update => {
  //   if (!update.destination) {
  //     return;
  //   }
  //   const { draggableId } = update;
  //   const initialIndex = update.source.index;
  //   const destinationIndex = update.destination.index;

  //   const domQuery = `[${queryAttr}='${draggableId}']`;
  //   const draggedDOM = document.querySelector(domQuery);
  //   console.log(domQuery);
  //   console.log(draggedDOM);

  //   if (!draggedDOM) {
  //     return;
  //   }
  //   const { clientHeight, clientWidth } = draggedDOM;
  //   console.log(clientHeight);
  //   console.log(clientWidth);

  //   const arr = [...draggedDOM.parentNode.children];
  //   if (initialIndex < destinationIndex) {
  //     arr.splice(initialIndex, 1);
  //   }

  //   const clientY =
  //     parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
  //     arr.slice(0, destinationIndex).reduce((total, curr) => {
  //       const style = curr.currentStyle || window.getComputedStyle(curr);
  //       const marginBottom = parseFloat(style.marginBottom);
  //       return total + curr.clientHeight + marginBottom;
  //     }, 0);

  //   setPlaceholderProps({
  //     clientHeight,
  //     clientWidth,
  //     clientY,
  //     clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft),
  //   });
  // };

  return (
    // <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="ITEMS" isDropDisabled={true}>
        {(provided, snapshot) => (
          <Kiosk ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
            {ITEMS.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <>
                    <ItemKiosk
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      isDragging={snapshot.isDragging}
                      style={provided.draggableProps.style}
                    >
                      {item.content}
                    </ItemKiosk>
                    {snapshot.isDragging && <Clone>{item.content}</Clone>}
                  </>
                )}
              </Draggable>
            ))}
          </Kiosk>
        )}
      </Droppable>
      <Droppable key={list} droppableId="list">
        {(provided, snapshot) => (
          <Content
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            showPlaceholder={!list.length}
          >
            {list.length > 0 ? (
              list.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <ItemList
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      isDragging={snapshot.isDragging}
                      style={provided.draggableProps.style}
                    >
                      {item.component}
                      <Handle {...provided.dragHandleProps}>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                          />
                        </svg>
                      </Handle>
                    </ItemList>
                  )}
                </Draggable>
              ))
            ) : (
              <div>Drag & drop to add your first question</div>
            )}
            {provided.placeholder}
            {/* <div
              style={{
                position: 'absolute',
                top: placeholderProps.clientY,
                left: placeholderProps.clientX,
                height: placeholderProps.clientHeight,
                width: placeholderProps.clientWidth,
                background: '#EDFAFF',
                border: '2px dashed #D1EFF9',
                borderRadius: '8px',
              }}
            /> */}
          </Content>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragAndDrop;
