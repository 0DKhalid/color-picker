import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from '@material-ui/core';
import { AddToPhotos } from '@material-ui/icons';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyle';
class PaletteFormNav extends Component {
  state = {
    newPaletteName: '',
    showForm: false
  };

  showFormHandller = () => {
    this.setState({ showForm: true });
  };
  hideForm = () => {
    this.setState({ showForm: false });
  };
  render() {
    const { showForm } = this.state;
    const {
      classes,
      open,
      handleDrawerOpen,
      onSubmitColors,
      palettes
    } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color='default'
          position='fixed'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <AddToPhotos />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to='/'>
              <Button
                variant='contained'
                color='secondary'
                className={classes.btn}
              >
                Go Back
              </Button>
            </Link>
            <Button
              variant='contained'
              color='primary'
              onClick={this.showFormHandller}
              className={classes.btn}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {showForm && (
          <PaletteMetaForm
            palettes={palettes}
            onSubmitColors={onSubmitColors}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
