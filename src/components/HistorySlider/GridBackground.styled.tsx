import styled from 'styled-components';

export const GridContainer = styled('div')({
  position: 'absolute',
  height: '100vh',
  left: '16.67%',
  top: 0,

  maxWidth: 'calc(100% - 33.34%)',
  pointerEvents: 'none',
  zIndex: 0,
  '@media (max-width: 768px)': {
    display: 'none',
  },
});

export const GridSvg = styled('svg')({
  display: 'block',
  width: '100%',
  height: '100%',
});
