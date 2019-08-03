import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
// import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start-flex'
  },
  contanier: {
    width: '50%',
    display: 'flex',
    alignItems: 'start-flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: '#fff'
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
};
class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <div className={classes.contanier}>
            <nav className={classes.nav}>
              <h1>React Colors</h1>
            </nav>
            <div className={classes.palettes}>
              {palettes.map(palette => (
                <MiniPalette key={palette.id} {...palette} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
