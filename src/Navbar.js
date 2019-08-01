import React, { Component } from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem, Snackbar } from '@material-ui/core';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  state = {
    format: 'hex',
    open: false
  };

  handleChangeFormat = e => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  };
  closeSnakBar = () => {
    this.setState({ open: false });
  };

  render() {
    const { level, onLevelChange } = this.props;
    const { format, open } = this.state;
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
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id='message-d'>Format Changed To {format.toUpperCase()}</span>
          }
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          onClose={this.closeSnakBar}
          action={
            <button className='close-snakbar' onClick={this.closeSnakBar}>
              &times;
            </button>
          }
        />
      </header>
    );
  }
}

export default Navbar;
