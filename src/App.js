import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pallete from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

const getPalettes = JSON.parse(window.localStorage.getItem('palettes'));
class App extends Component {
  state = {
    palettes: getPalettes || seedColors
  };
  findPalette = id => {
    return this.state.palettes.find(palette => palette.id === id);
  };

  savePaletteColors = newPalette => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  };
  deletePaleteHandller = id => {
    this.setState(
      prevState => ({
        palettes: prevState.palettes.filter(palette => palette.id !== id)
      }),
      this.syncLocalStorage
    );
  };
  syncLocalStorage = () => {
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={routeProps => (
            <PaletteList
              {...routeProps}
              palettes={this.state.palettes}
              deletePalette={this.deletePaleteHandller}
            />
          )}
        />
        <Route
          exact
          path='/palette/new'
          render={routeProps => (
            <NewPaletteForm
              {...routeProps}
              savePaletteColors={this.savePaletteColors}
              palettes={this.state.palettes}
            />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Pallete
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={routeProps => (
            <SingleColorPalette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
      </Switch>
      // <div className='App'>
      //   <Pallete palette={generatePalette(seedColors[3])} />
      // </div>
    );
  }
}

export default App;
