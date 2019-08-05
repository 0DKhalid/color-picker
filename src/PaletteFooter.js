import React from 'react';

const PaletteFooter = ({ paletteName, emoji }) => (
  <footer className='palette-footer'>
    {paletteName} <span className='footer-emoji'>{emoji}</span>
  </footer>
);

export default PaletteFooter;
