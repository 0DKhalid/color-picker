import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

const styles = {
  colorBox: {
    width: '20%',
    height: props => (props.showMoreLink ? '25%' : '50%'),
    margin: '0 auto',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover button': {
      opacity: 1
    }
  },
  colorText: {
    color: props =>
      chroma(props.background).luminance() >= 0.6 ? '#000' : '#fff'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.6 ? '#fff' : '#000'
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.6)' : '#fff',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    right: '0',
    bottom: '0',
    border: 'none',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  copyBtn: {
    color: props =>
      chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.6)' : '#fff',
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    opacity: 0
  }
};
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
    const {
      background,
      name,
      paletteId,
      colorId,
      showMoreLink,
      classes
    } = this.props;
    const isDark = chroma(background).luminance() <= 0.6;
    const isLight = chroma(background).luminance() >= 0.6;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.onCopiedHandller}>
        <div style={{ background }} className={classes.colorBox}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p className={classes.colorText}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyBtn}>Copy</button>
          </div>
          {showMoreLink && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={event => event.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
