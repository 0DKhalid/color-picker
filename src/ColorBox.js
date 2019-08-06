import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { Link } from 'react-router-dom';
import './ColorBox.css';

class ColorBox extends Component {
  state = {
    copied: false
  };

  onCopiedHandller = () => {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  };

  render() {
    const { background, name, paletteId, colorId, showMoreLink } = this.props;
    const isDark = chroma(background).luminance() <= 0.6;
    const isLight = chroma(background).luminance() >= 0.6;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.onCopiedHandller}>
        <div style={{ background }} className='ColorBox'>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p className={isLight && 'dark-text'}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={isDark && 'light-text'}>{name}</span>
            </div>
            <button className={`copy-btn ${isLight && 'dark-text'}`}>
              Copy
            </button>
          </div>
          {showMoreLink && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={event => event.stopPropagation()}
            >
              <span className={`see-more ${isLight && 'dark-text'}`}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
