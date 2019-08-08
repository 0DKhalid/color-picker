import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Button
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import DragableColorBox from './DragableColorBox';
const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class NewPaletteForm extends Component {
  state = {
    open: false,
    newColor: 'black',
    colors: ['blue', '#0f0']
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateBtnColor = ({ hex }) => {
    this.setState({ newColor: hex });
  };
  addColorsToScreen = () => {
    this.setState({ colors: [...this.state.colors, this.state.newColor] });
  };
  render() {
    const { classes } = this.props;
    const { open, newColor, colors } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant='h4'>Design Your Palette</Typography>
          <div>
            <Button variant='contained' color='secondary'>
              Cleare Palette
            </Button>
            <Button variant='contained' color='primary'>
              Rndom Color
            </Button>
          </div>
          <ChromePicker
            color={newColor}
            onChangeComplete={newColor => this.updateBtnColor(newColor)}
          />
          <Button
            variant='contained'
            color='primary'
            style={{ backgroundColor: newColor }}
            onClick={this.addColorsToScreen}
          >
            Add Color
          </Button>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />

          {colors.map(color => (
            <DragableColorBox color={color} />
          ))}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
