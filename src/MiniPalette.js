import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    '& h1': {
      color: '#fff'
    }
  }
};

const MiniPalette = ({ classes }) => (
  <div className={classes.main}>
    <h1> MiniPalette</h1>
  </div>
);

export default withStyles(styles)(MiniPalette);
