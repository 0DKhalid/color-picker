import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPaletteStyle';
class MiniPalette extends Component {
  deletePalette = event => {
    event.stopPropagation();
    this.props.openDialog();
  };
  render() {
    const {
      colors,
      classes,
      paletteName,
      emoji,
      redirctToColorPage
    } = this.props;
    const miniColorBox = colors.map(color => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
      />
    ));
    return (
      <div className={classes.root} onClick={redirctToColorPage}>
        <DeleteIcon
          onClick={this.deletePalette}
          className={classes.deleteIcon}
          style={{ transition: 'all 0.3s ease-in-out' }}
        />
        <div className={classes.colors}>{miniColorBox}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
