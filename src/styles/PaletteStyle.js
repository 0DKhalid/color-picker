export default {
  Palette: {
    height: '100vh',
    display: ' flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },

  PaletteColor: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    opacity: 1,
    marginBottom: '-3.5px',
    backgroundColor: '#000',
    '& a': {
      color: '#fff',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      opacity: 1
    }
  }
};
