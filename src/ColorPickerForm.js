import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './styles/ColorPickerFormStyle';
import chroma from 'chroma-js';

class ColorPickerForm extends Component {
  state = {
    currentColor: 'teal',
    newColorName: ''
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameTaken', value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUniqe', value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  onChageHandller = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  updateBtnColor = ({ hex }) => {
    this.setState({ currentColor: hex });
  };

  addColorsToScreen = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.setState({ newColorName: '' });
    this.props.addColorsToScreen(newColor);
  };
  render() {
    const { isPaletteFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    const isLight = chroma(currentColor).luminance() >= 0.5;
    return (
      <div>
        <ChromePicker
          className={classes.picker}
          color={currentColor}
          onChangeComplete={currentColor => this.updateBtnColor(currentColor)}
        />
        <ValidatorForm
          instantValidate={false}
          onSubmit={this.addColorsToScreen}
        >
          <TextValidator
            className={classes.colorNameInput}
            label='Color Name'
            name='newColorName'
            value={newColorName}
            variant='filled'
            margin='normal'
            onChange={this.onChageHandller}
            validators={['required', 'isColorNameTaken', 'isColorUniqe']}
            errorMessages={[
              'this field is required',
              'This Name has taken, pick another one',
              'This Color has taken, pick another one'
            ]}
          />
          <Button
            className={classes.colorBtn}
            variant='contained'
            type='submit'
            color='primary'
            style={{
              backgroundColor: isPaletteFull ? 'grey' : currentColor,
              color: isLight ? 'rgba(0, 0, 0,0.4)' : '#fff'
            }}
            disabled={isPaletteFull}
          >
            Add Color
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
