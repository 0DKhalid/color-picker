import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Pallete from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

import Page from './Page';
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
    const { palettes } = this.state;
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='page' timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path='/'
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        {...routeProps}
                        palettes={palettes}
                        deletePalette={this.deletePaleteHandller}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/new'
                  render={routeProps => (
                    <Page>
                      <NewPaletteForm
                        {...routeProps}
                        savePaletteColors={this.savePaletteColors}
                        palettes={palettes}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:id'
                  render={routeProps => (
                    <Page>
                      <Pallete
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:paletteId/:colorId'
                  render={routeProps => (
                    <Page>
                      <SingleColorPalette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                        colorId={routeProps.match.params.colorId}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
