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
      chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.6)' : '#fff'
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
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)'
  },
  showCopy: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMsg: {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: 0,
    color: '#fff',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px #000',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase'
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100'
    }
  },
  showMsg: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s'
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
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.onCopiedHandller}>
        <div style={{ background }} className={classes.colorBox}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${copied && classes.showCopy}`}
          />
          <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
            <h1>copied!</h1>
            <p className={classes.colorText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
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
