import styled from 'styled-components';

export const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  background: '#F4F5F9',
});

export const MainContent = styled('div')({
  position: 'relative',
  maxWidth: '1920px',
  margin: '0 auto',
  height: '100vh',
  padding: '0 16.67%',
  paddingTop: '170px',
  overflow: 'visible',
});

export const TopSection = styled('div')({
  zIndex: 2,
});

export const TimelineWrapper = styled('div')({
  position: 'absolute',
  width: '530px',
  height: '530px',
  left: '50%',
  transform: 'translateX(-50%)',
  top: 'calc(50vh - 265px)',
  flexShrink: 0,
});
