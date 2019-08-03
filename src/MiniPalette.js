import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: '#fff',
    border: '1px solid #000',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',

    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    backgroundColor: '#daele4',
    height: '100px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: '#000',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px'
  }
};

const MiniPalette = ({
  classes,
  paletteName,
  emoji,
  colors,
  redirctToColorPage
}) => {
  const miniColorBox = colors.map(color => (
    <div
      key={color.name}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    />
  ));
  return (
    <div className={classes.root} onClick={redirctToColorPage}>
      <div className={classes.colors}>{miniColorBox}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
