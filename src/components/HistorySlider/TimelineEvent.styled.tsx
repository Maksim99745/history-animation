import styled from 'styled-components';

export const EventContainer = styled('div')<{ $left: string }>(({ $left }) => ({
  position: 'absolute',
  left: $left,
  top: 0,
  width: '320px',
}));

export const Year = styled('div')({
  fontFamily: '"Bebas Neue", sans-serif',
  lineHeight: '1.2',
  color: '#3877EE',
  fontSize: '25px',
  textTransform: 'uppercase',
  marginBottom: '10px',
});

export const Description = styled('div')({
  fontFamily: '"PT Sans", sans-serif',
  lineHeight: '30px',
  color: '#42567A',
  fontSize: '20px',
  whiteSpace: 'pre-wrap',
});
