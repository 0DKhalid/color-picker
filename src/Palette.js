import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

import styles from './styles/PaletteStyle';

class Palette extends Component {
  state = {
    level: 500,
    format: 'hex'
  };

  onLevelChange = level => {
    // console.log(level);
    this.setState({ level });
  };

  onColorFormatChange = value => {
    this.setState({ format: value });
  };

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;

    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color[format]}
        colorId={color.id}
        paletteId={id}
        showMoreLink
      />
    ));
    return (
      <div className={classes.Palette}>
        {/* Nav */}
        <Navbar
          level={level}
          onLevelChange={this.onLevelChange}
          handleChange={this.onColorFormatChange}
          showLivelSlider
        />
        <div className={classes.PaletteColor}>{colorBoxes}</div>
        {/* footer */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
