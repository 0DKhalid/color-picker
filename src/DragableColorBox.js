import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: '#fff',
      transform: 'scale(1.5)'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
  }
};

const DraggableColorBox = ({
  name,
  color,
  classes: { root, boxContent, deleteIcon }
}) => (
  <div style={{ backgroundColor: color }} className={root}>
    <div className={boxContent}>
      <span>{name}</span>
      <DeleteIcon className={deleteIcon} />
    </div>
  </div>
);

export default withStyles(styles)(DraggableColorBox);
