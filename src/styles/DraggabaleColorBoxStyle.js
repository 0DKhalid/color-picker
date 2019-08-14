import sizes from './sizes';
export default {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: '#fff',
      transform: 'scale(1.5)'
    },
    [sizes.dwon('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.dwon('md')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.dwon('xs')]: {
      width: '100%',
      height: '5%'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
  }
};
