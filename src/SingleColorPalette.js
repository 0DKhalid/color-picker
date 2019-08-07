import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const styles = {
  Palette: {
    height: '100vh',
    display: ' flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },

  PaletteColor: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    opacity: 1,
    marginBottom: '-3.5px',
    backgroundColor: '#000',
    '& a': {
      color: '#fff',
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
      opacity: 1
    }
  }
};

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
    const { classes } = this.props;
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
      <div className={classes.Palette}>
        <Navbar showLivelSlider={false} handleChange={this.onFormatChange} />
        <div className={classes.PaletteColor}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>go back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
