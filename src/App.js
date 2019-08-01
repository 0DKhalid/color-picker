import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pallete from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

class App extends Component {
  render() {
    console.log();
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette List Goes Here!</h1>} />
        <Route
          exact
          path='/palette/:id'
          render={() => <h1>Indvidual Palette!</h1>}
        />
      </Switch>
      // <div className='App'>
      //   <Pallete palette={generatePalette(seedColors[3])} />
      // </div>
    );
  }
}

export default App;
