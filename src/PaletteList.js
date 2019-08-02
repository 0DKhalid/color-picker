import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Colors</h1>
        {palettes.map(palette => (
          <MiniPalette key={palette.id} {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
