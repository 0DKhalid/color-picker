import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pallete from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import './App.css';
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
      <Route  render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500} >
            <Switch location={location}>
              <Route
                exact
                path='/'
                render={routeProps => (
                  <div className='page'>
                  <PaletteList
                    {...routeProps}
                    palettes={this.state.palettes}
                    deletePalette={this.deletePaleteHandller}
                  />
                  </div>
                )}
              />
              <Route
                exact
                path='/palette/new'
                render={routeProps => (
                  <div className='page'>
                  <NewPaletteForm
                    {...routeProps}
                    savePaletteColors={this.savePaletteColors}
                    palettes={this.state.palettes}
                  />
                  </div>
                )}
              />
              <Route
                exact
                path='/palette/:id'
                render={routeProps => (
                  <div className='page'>
                  <Pallete
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.id)
                    )}
                  />
                  </div>
                )}
              />
              <Route
                exact
                path='/palette/:paletteId/:colorId'
                render={routeProps => (
                  <div className='page'>
                  <SingleColorPalette
                    palette={generatePalette(
                      this.findPalette(routeProps.match.params.paletteId)
                    )}
                    colorId={routeProps.match.params.colorId}
                  />
                  </div>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
      
    );
  }
}

export default App;
