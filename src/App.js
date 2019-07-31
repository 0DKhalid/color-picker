import React, { Component } from 'react';
import Pallete from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

class App extends Component {
  render() {
    console.log();
    return (
      <div className='App'>
        <Pallete palette={generatePalette(seedColors[3])} />
      </div>
    );
  }
}

export default App;
