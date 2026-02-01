import styled from 'styled-components';

export const HeaderContainer = styled('div')({
  position: 'relative',
  zIndex: 2,
});

export const Title = styled('h1')({
  fontFamily: '"PT Sans", sans-serif',
  fontWeight: '700',
  lineHeight: '1.2',
  color: '#42567A',
  fontSize: '56px',
  width: '353px',
  whiteSpace: 'pre-wrap',
  margin: 0,
});

export const DecorativeLine = styled('div')({
  position: 'absolute',
  height: '120px',
  left: '-78px',
  top: '7px',
  width: '5px',
});

export const LineSvg = styled('svg')({
  display: 'block',
  width: '100%',
  height: '100%',
});
