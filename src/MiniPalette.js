import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyle';
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
