import styled from 'styled-components';

export const EventContainer = styled('div')({
  width: '100%',
  maxWidth: '320px',
  '@media (max-width: 768px)': {
    width: '166px',
    flexShrink: 0,
  },
});

export const Year = styled('div')({
  fontFamily: '"Bebas Neue", sans-serif',
  lineHeight: '1.2',
  color: '#3877EE',
  fontSize: '25px',
  textTransform: 'uppercase',
  marginBottom: '10px',
  '@media (max-width: 768px)': {
    fontSize: '16px',
    lineHeight: '120%',
    marginBottom: '15px',
  },
});

export const Description = styled('div')({
  fontFamily: '"PT Sans", sans-serif',
  lineHeight: '30px',
  color: '#42567A',
  fontSize: '20px',
  whiteSpace: 'pre-wrap',
  '@media (max-width: 768px)': {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '145%',
  },
});
