import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggabaleColorBoxStyle';

const DraggableColorBox = ({
  name,
  color,
  classes: { root, boxContent, deleteIcon },
  deleteColorHandller
}) => {
  return (
    <div style={{ backgroundColor: color }} className={root}>
      <div className={boxContent}>
        <span>{name}</span>
        <DeleteIcon className={deleteIcon} onClick={deleteColorHandller} />
      </div>
    </div>
  );
};

export default SortableElement(withStyles(styles)(DraggableColorBox));
