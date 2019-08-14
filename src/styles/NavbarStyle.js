import sizes from './sizes';
export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
  },
  logo: {
    marginRight: ' 15px',
    padding: '0 13px',
    fontSize: ' 22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: '#000'
    },
    [sizes.dwon('xs')]: {
      display: 'none'
    }
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      background: 'transparent'
    },
    '& .rc-slider-rail': {
      height: '8px'
    },
    '& .rc-slider-handle, .rc-slider-handle:active,  .rc-slider-handle:hover, .rc-slider-handle:focus': {
      background: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginLeft: '-7px',
      marginTop: '-3px'
    },
    [sizes.dwon('md')]: {
      width: '150px'
    }
  },
  selectFormat: {
    margin: 'auto',
    marginRight: '1rem'
  },
  closeSnakbar: {
    fontSize: '20px',
    fontWeight: 'bold',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    outline: 'none'
  }
};
