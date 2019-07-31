import React, { Component } from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem } from '@material-ui/core';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  state = {
    format: 'hex'
  };

  handleChangeFormat = e => {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  };

  render() {
    const { level, onLevelChange, handleChange } = this.props;
    const { format } = this.state;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>colorpicker</a>
        </div>
        <div className='contanier-slider'>
          <span>Level: {this.props.level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={onLevelChange}
            />
          </div>
        </div>
        <div className='select-format'>
          <Select value={format} onChange={this.handleChangeFormat}>
            <MenuItem value='hex'>HEX - #ffffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgb(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
