import sizes from './sizes';
import bg from './bg.svg';
export default {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    }
  },
  root: {
    /* background by SVGBackgrounds.com */
    backgroundColor: '#2a1aaa',
    backgroundImage: `url(${bg})`,
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll'
  },
  heading: {
    fontSize: '1.5rem'
  },
  contanier: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.dwon('lg')]: {
      width: '80%'
    },
    [sizes.dwon('md')]: {
      width: '60%'
    },
    [sizes.dwon('xs')]: {
      width: '60%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    '& a': {
      color: '#fff',
      textDecoration: 'none',
      backgroundColor: '#5060d9',
      padding: '10px 15px',
      borderRadius: '5px'
    },
    '& a:hover': {
      backgroundColor: '#374ad3',
      color: '#cccccc'
    }
  },

  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2rem',
    [sizes.dwon('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.dwon('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1rem'
    }
  }
};
