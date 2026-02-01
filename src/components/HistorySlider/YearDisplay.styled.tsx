import styled from 'styled-components';

export const YearContainer = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  zIndex: 1,
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '80px',
  '@media (max-width: 768px)': {
    position: 'static',
    transform: 'none',
    justifyContent: 'center',
    gap: '35px',
    margin: 0,
  },
});

export const YearText = styled('span')<{ $color: string }>(({ $color }) => ({
  color: $color,
  fontSize: '200px',
  fontFamily: '"PT Sans", sans-serif',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '160px',
  letterSpacing: '-4px',
  wordWrap: 'break-word',
  '@media (max-width: 768px)': {
    fontSize: '56px',
    lineHeight: '120%',
    letterSpacing: '-2.24px',
  },
}));
