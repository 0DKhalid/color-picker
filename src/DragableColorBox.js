import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    marginBottom: '-3.5px'
  }
};

const DraggableColorBox = ({ color, classes: { root } }) => (
  <div style={{ backgroundColor: color }} className={root}>
    {color}
  </div>
);

export default withStyles(styles)(DraggableColorBox);
