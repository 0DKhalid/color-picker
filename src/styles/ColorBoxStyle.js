import chroma from 'chroma-js';
import sizes from './sizes';
export default {
  colorBox: {
    width: '20%',
    height: props => (props.showMoreLink ? '25%' : '50%'),
    margin: '0 auto',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover button': {
      opacity: 1
    },
    [sizes.dwon('lg')]: {
      width: '50%',
      height: props => (props.showMoreLink ? '20%' : '33.333%')
    },
    [sizes.dwon('md')]: {
      width: '50%',
      height: props => (props.showMoreLink ? '10%' : '20%')
    },
    [sizes.dwon('xs')]: {
      width: '100%',
      height: props => (props.showMoreLink ? '5%' : '10%')
    }
  },
  colorText: {
    color: props =>
      chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.6)' : '#fff'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.6 ? '#fff' : '#000'
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.6)' : '#fff',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    right: '0',
    bottom: '0',
    border: 'none',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  copyBtn: {
    color: props =>
      chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.6)' : '#fff',
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
    opacity: 0
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
    fontSize: '12px'
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)'
  },
  showCopy: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMsg: {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: 0,
    color: '#fff',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px #000',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
      [sizes.dwon('xs')]: {
        fontSize: '5rem'
      }
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100'
    }
  },
  showMsg: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s'
  }
};
