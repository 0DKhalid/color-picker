export default {
  up() {},
  dwon(size) {
    const sizes = {
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px',
      xl: '1600'
    };
    return `@media (max-width:${sizes[size]})`;
  }
};
