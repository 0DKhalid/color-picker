import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyle';

class PaletteList extends Component {
  render() {
    const {
      deletePalette,
      palettes,
      classes,
      history: { push }
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.contanier}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette
                key={palette.id}
                {...palette}
                redirctToColorPage={() => push(`/palette/${palette.id}`)}
                deletePaletteHandller={deletePalette}
                id={palette.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
