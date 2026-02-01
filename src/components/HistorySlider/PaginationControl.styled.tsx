import styled from 'styled-components';

export const PaginationContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '120px',
  zIndex: 2,
  marginTop: '393px',
  marginLeft: '80px'
});

export const Counter = styled('div')({
  fontFamily: '"PT Sans", sans-serif',
  color: '#42567A',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: 'normal',
  wordWrap: 'break-word',
});

export const ButtonsContainer = styled('div')({
  display: 'flex',
  gap: '20px',
});

export const NavButton = styled('button')<{ $disabled?: boolean }>(({ $disabled }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    background: 'transparent',
    border: '1px solid rgba(66.18, 85.79, 122.19, 0.50)',
    borderRadius: '50%',
    cursor: $disabled ? 'not-allowed' : 'pointer',
    transition: 'opacity 0.3s ease',
    padding: 0,
    opacity: $disabled ? 0.3 : 1,
  })
);

export const ArrowIcon = styled('svg')<{ $isLeft?: boolean }>(({ $isLeft }) => ({
  width: '6.25px',
  height: '12.5px',
  fill: 'none',
  stroke: '#42567A',
  strokeWidth: '2',
  transform: $isLeft ? 'rotate(180deg)' : 'none',
  transformOrigin: 'center',
}));
