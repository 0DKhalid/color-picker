import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
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
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.onLevelChange}
        />
        {/* Nav */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Pallete;
