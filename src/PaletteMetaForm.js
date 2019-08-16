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
    stage: 'form',
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

  showEmojiPicker = () => {
    this.setState({ stage: 'emoji' });
  };
  savePalette = ({ native }) => {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: native
    };
    this.setState({ stage: '' });
    this.props.onSubmitColors(newPalette);
  };

  render() {
    const { hideForm } = this.props;
    const { newPaletteName, stage } = this.state;
    return (
      <div>
        <Dialog open={stage === 'emoji'}>
          <Picker title='Pick a Palette Emoji' onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={stage === 'form'}
          onClose={hideForm}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautiful palette, Make sure
                it`s unique!
              </DialogContentText>
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
      </div>
    );
  }
}

export default PaletteMetaForm;
