import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DragableColorBox from './DragableColorBox';

const DraggableColorList = ({ colors, deleteColor }) => (
  <div style={{ height: '100%' }}>
    {colors.map((color, i) => (
      <DragableColorBox
        index={i}
        key={color.name}
        color={color.color}
        name={color.name}
        deleteColorHandller={() => deleteColor(color.name)}
      />
    ))}
  </div>
);

export default SortableContainer(DraggableColorList);
