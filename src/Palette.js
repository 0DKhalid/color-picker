import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

import './Palette.css';

class Pallete extends Component {
  state = {
    level: 500
  };

  onLevelChange = level => {
    console.log(level);
    this.setState({ level });
  };

  render() {
    const { level } = this.state;
    const colorBoxes = this.props.palette.colors[level].map(color => (
      <ColorBox key={color.hex} name={color.name} background={color.hex} />
    ));
    return (
      <div className='Palette'>
        <Navbar level={level} onLevelChange={this.onLevelChange} />
        {/* Nav */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Pallete;
