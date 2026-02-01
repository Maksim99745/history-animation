import styled from 'styled-components';

export const TimelineContainer = styled('div')({
  position: 'relative',
  width: '530px',
  height: '530px',
});

export const OrbitWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const Orbit = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  transformOrigin: 'center center',
  top: 0,
  left: 0,
  zIndex: 2,
});

export const CircleSvg = styled('svg')({
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
});

export const DotsSvg = styled('svg')({
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  pointerEvents: 'none',
});

export const DotWrapper = styled('div')<{
  $x: number;
  $y: number;
  $isActive: boolean;
}>(({ $x, $y, $isActive }) => ({
  position: 'absolute',
  left: `calc(50% + ${$x}px)`,
  top: `calc(50% + ${$y}px)`,
  transform: 'translate(-50%, -50%)',
  display: $isActive ? 'flex' : 'block',
  alignItems: 'center',
  gap: '20px',
  zIndex: $isActive ? 10 : 5,
}));

export const ActiveDotContainer = styled('div')({
  position: 'relative',
  width: '56px',
  height: '56px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ActiveDot = styled('svg')({
  display: 'block',
  width: '56px',
  height: '56px',
  position: 'absolute',
  top: 0,
  left: 0,
  transform: 'rotate(90deg)',
  transformOrigin: 'center center',
});

export const InactiveDot = styled('div')({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: '#42567A',
  opacity: 1,
  margin: '0 auto', // Центрирование внутри DotWrapper
});

export const DotLabel = styled('div')({
  position: 'relative',
  color: '#42567A',
  fontSize: '20px',
  fontFamily: '"PT Sans", sans-serif',
  fontWeight: '400',
  lineHeight: '30px',
  transformOrigin: 'center center',
  zIndex: 1,
});

export const CategoryLabel = styled('div')({
  position: 'absolute',
  transform: 'translateY(-50%)',
  color: '#42567A',
  fontSize: '20px',
  fontFamily: '"PT Sans", sans-serif',
  fontWeight: '700',
  lineHeight: '30px',
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  zIndex: 15,
  pointerEvents: 'none',
});
