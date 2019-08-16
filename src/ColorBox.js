import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';
import styles from './styles/ColorBoxStyle';

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
            // className={`${classes.copyOverlay} ${copied && classes.showCopy}`}
            className={classNames(classes.copyOverlay, {
              [classes.showCopy]:copied
            })}
          />
          <div 
          // className={`${classes.copyMsg} ${copied && classes.showMsg}`}
          className={classNames(classes.copyMsg, {
            [classes.showMsg]:copied
          })}
          >
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
