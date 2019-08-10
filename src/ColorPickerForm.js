import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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
    this.props.addColorsToScreen(newColor);
  };
  render() {
    const { isPaletteFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

export default ColorPickerForm;
