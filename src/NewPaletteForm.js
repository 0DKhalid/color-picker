import React, { Component } from 'react';
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
import arrayMove from 'array-move';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import seedColors from './seedColors';
import styles from './styles/NewPaletteFormStyle';
class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };

  state = {
    open: false,
    colors: seedColors[0].colors
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addColorsToScreen = newColor => {
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ''
    });
  };

  onChageHandller = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  onSubmitColors = newPalette => {
    newPalette.id = newPalette.paletteName
      .toLocaleLowerCase()
      .replace(' ', '-');
    newPalette.colors = this.state.colors;

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
    let allColors = this.props.palettes.map(palette => palette.colors).flat();
    let random;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      random = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[random];
      isDuplicateColor = this.state.colors.some(
        color => color.name === randomColor.name
      );
    }
    this.setState({ colors: [...this.state.colors, randomColor] });
  };
  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = maxColors <= this.state.colors.length;
    return (
      <div className={classes.root}>
        <PaletteFormNav
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
          <div className={classes.container}>
            <Typography variant='h4' gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.btns}>
              <Button
                className={classes.btn}
                variant='contained'
                color='secondary'
                onClick={this.clearePalette}
              >
                Cleare a Palette
              </Button>
              <Button
                className={classes.btn}
                variant='contained'
                color='primary'
                onClick={this.randomColor}
                disabled={isPaletteFull}
              >
                Rndom Color
              </Button>
            </div>
            <ColorPickerForm
              isPaletteFull={isPaletteFull}
              addColorsToScreen={this.addColorsToScreen}
              colors={colors}
            />
          </div>
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
            distance={20}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
