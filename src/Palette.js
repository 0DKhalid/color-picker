import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
class Pallete extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox name={color.name} background={color.color} />
    ));
    return (
      <div className='Palette'>
        {/* Nav */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Pallete;
