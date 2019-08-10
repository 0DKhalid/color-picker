import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Typography,
  Divider,
  IconButton,
  Button
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import arrayMove from 'array-move';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFornNav';
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
  static defaultProps = {
    maxColors: 20
  };

  state = {
    open: false,
    currentColor: 'black',
    newColorName: '',
    colors: this.props.palettes[0].colors
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameTaken', value =>
      this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUniqe', value =>
      this.state.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateBtnColor = ({ hex }) => {
    this.setState({ currentColor: hex });
  };
  addColorsToScreen = () => {
    // console.log('click');
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ''
    });
  };

  onChageHandller = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  onSubmitColors = newPaletteName => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLocaleLowerCase().replace(' ', '-'),
      colors: this.state.colors
    };
    this.props.savePaletteColors(newPalette);
    this.props.history.push('/');
  };
  deleteColor = colorName => {
    this.setState({
      colors: this.state.colors.filter(({ name }) => name !== colorName)
    });
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };

  clearePalette = () => {
    this.setState({ colors: [] });
  };
  randomColor = () => {
    const allColors = this.props.palettes.map(palette => palette.colors).flat();
    let random = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[random];
    this.setState({ colors: [...this.state.colors, randomColor] });
  };
  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, currentColor, colors, newColorName } = this.state;
    const isPaletteFull = maxColors <= this.state.colors.length;
    return (
      <div className={classes.root}>
        <PaletteFormNav
          classes={classes}
          open={open}
          handleDrawerOpen={this.handleDrawerOpen}
          palettes={palettes}
          onSubmitColors={this.onSubmitColors}
        />
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
            <Button
              variant='contained'
              color='secondary'
              onClick={this.clearePalette}
            >
              Create Palette
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={this.randomColor}
              disabled={isPaletteFull}
            >
              Rndom Color
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={currentColor => this.updateBtnColor(currentColor)}
          />
          <ValidatorForm onSubmit={this.addColorsToScreen}>
            <TextValidator
              label='Color Name'
              name='newColorName'
              value={newColorName}
              onChange={this.onChageHandller}
              validators={['required', 'isColorNameTaken', 'isColorUniqe']}
              errorMessages={[
                'this field is required',
                'This Name has taken, pick another one',
                'This Color has taken, pick another one'
              ]}
            />
            <Button
              variant='contained'
              type='submit'
              color='primary'
              style={{
                backgroundColor: isPaletteFull ? 'grey' : currentColor
              }}
              disabled={isPaletteFull}
            >
              Add Color
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            deleteColor={this.deleteColor}
            axis='xy'
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
