import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteFooterStyle';

const PaletteFooter = ({
  paletteName,
  emoji,
  classes: { paletteFooter, emojiFooter }
}) => (
  <footer className={paletteFooter}>
    {paletteName} <span className={emojiFooter}>{emoji}</span>
  </footer>
);

export default withStyles(styles)(PaletteFooter);
