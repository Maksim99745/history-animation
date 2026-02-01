import styled from 'styled-components';

export const PaginationContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '120px',
  zIndex: 2,
  marginTop: '393px',
  marginLeft: '80px',
  '@media (max-width: 768px)': {
    position: 'relative',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: '78px',
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '40px',
    zIndex: 10,
    order: 2,
  },
});

export const LeftColumn = styled('div')({
  display: 'none',
  '@media (max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
  },
});

export const Counter = styled('div')({
  fontFamily: '"PT Sans", sans-serif',
  color: '#42567A',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: 'normal',
  wordWrap: 'break-word',
});

export const DesktopCounter = styled(Counter)({
  '@media (max-width: 768px)': {
    display: 'none',
  },
});

export const ButtonsContainer = styled('div')({
  display: 'flex',
  gap: '20px',
});

export const DesktopButtonsContainer = styled(ButtonsContainer)({
  '@media (max-width: 768px)': {
    display: 'none',
  },
});

export const DotsContainer = styled('div')({
  display: 'none',
  '@media (max-width: 768px)': {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export const Dot = styled('div')<{ $active?: boolean }>(({ $active }) => ({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: '#42567A',
  opacity: $active ? 1 : 0.4,
  transition: 'all 0.3s ease',
}));

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
    '@media (max-width: 768px)': {
      width: '25px',
      height: '25px',
    },
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
  '@media (max-width: 768px)': {
    width: '25px',
    height: '25px',
    transform: 'none',
  },
}));
