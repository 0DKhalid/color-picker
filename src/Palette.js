import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

import './Palette.css';

class Pallete extends Component {
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
      <div className='Palette'>
        {/* Nav */}
        <Navbar
          level={level}
          onLevelChange={this.onLevelChange}
          handleChange={this.onColorFormatChange}
          showLivelSlider
        />
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Pallete;
