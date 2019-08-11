import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

class PaletteMetaForm extends Component {
  state = {
    open: true,

    newPaletteName: ''
  };
  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUniqe', value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  onChageHandller = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { onSubmitColors, hideForm } = this.props;
    const { newPaletteName } = this.state;
    return (
      <Dialog
        open={this.state.open}
        onClose={hideForm}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={() => onSubmitColors(newPaletteName)}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette, Make sure it`s
              unique!
            </DialogContentText>

            <Picker />
            <TextValidator
              name='newPaletteName'
              label='Palette Name'
              fullWidth
              margin='normal'
              value={newPaletteName}
              onChange={this.onChageHandller}
              validators={['required', 'isPaletteNameUniqe']}
              errorMessages={['Enter PaletteName', 'Name already used!']}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={hideForm} color='primary'>
              Cancel
            </Button>
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default PaletteMetaForm;
