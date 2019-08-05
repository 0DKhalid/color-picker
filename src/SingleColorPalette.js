import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
  state = {
    _shades: this.gatherShades(this.props.palette, this.props.colorId),
    format: 'hex'
  };

  gatherShades(palette, colorToFilterBy) {
    // let shades = [];
    let allColors = palette.colors;

    /* anthore way */
    // for (let shade in allColors) {
    //   shades = shades
    //     .concat(allColors[shade])
    //     .filter(color => color.id === colorToFilterBy);
    // }
    const shades = Object.keys(allColors).map(shade =>
      allColors[shade]
        .filter(color => color.id === colorToFilterBy)
        .reduce((acc, cur) => Object.assign(acc, cur), {})
    );
    return shades.slice(1);
  }

  onFormatChange = value => this.setState({ format: value });

  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const { format, _shades } = this.state;
    const colorBoxes = _shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showMoreLink={false}
      />
    ));
    return (
      <div className='SingleColorBox Palette'>
        <Navbar showLivelSlider={false} handleChange={this.onFormatChange} />
        <div className='Palette-colors'>
          {colorBoxes}
          <div className='go-back ColorBox'>
            <Link to={`/palette/${id}`} className='go-back-btn'>
              go back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
