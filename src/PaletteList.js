import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyle';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Close, Check } from '@material-ui/icons';
import { blue, red } from '@material-ui/core/colors';

class PaletteList extends Component {
  state = {
    openDialog: false,
    paletteId: ''
  };

  openDialog = id => {
    this.setState({ openDialog: true, paletteId: id });
  };

  closeDialog = () => {
    this.setState({ openDialog: false, paletteId: '' });
  };
  deletePaletteHandller = () => {
    this.props.deletePalette(this.state.paletteId);
    this.closeDialog();
  };
  render() {
    const {
      palettes,
      classes,
      history: { push }
    } = this.props;
    const { openDialog } = this.state;
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
                  openDialog={() => this.openDialog(palette.id)}
                  id={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          onClose={this.closeDialog}
          aria-labelledby='simple-dialog-title'
          open={openDialog}
        >
          <DialogTitle id='simple-dialog-title'>
            Delete this Palette ?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.deletePaletteHandller}>
              <ListItemAvatar>
                <Avatar style={{ background: blue[100], color: blue[600] }}>
                  <Check />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Delete' />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ background: red[100], color: red[600] }}>
                  <Close />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Cancel' />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
