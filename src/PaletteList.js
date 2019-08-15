import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyle';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} timeout={500} classNames='fade'>
                <MiniPalette
                  {...palette}
                  redirctToColorPage={() => push(`/palette/${palette.id}`)}
                  deletePaletteHandller={deletePalette}
                  id={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
