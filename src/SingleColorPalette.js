import React, { Component } from 'react';
import ColorBox from './ColorBox';
class SingleColorPalette extends Component {
  state = {
    _shades: this.gatherShades(this.props.palette, this.props.colorId)
  };

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let shade in allColors) {
      shades = shades
        .concat(allColors[shade])
        .filter(color => color.id === colorToFilterBy);
    }

    return shades.slice(1);
  }

  render() {
    console.log(this.state._shades);
    const colorBoxes = this.state._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color.hex}
        showMoreLink={false}
      />
    ));
    return (
      <div className='Palette'>
        <h1>Single Color Palette</h1>
        <div className='Palette-colors'>{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
