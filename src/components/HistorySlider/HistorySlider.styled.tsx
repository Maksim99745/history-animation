import styled from 'styled-components';

export const Container = styled('div')({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  background: '#F4F5F9',
});

export const MainContent = styled('div')({
  position: 'relative',
  maxWidth: '1920px',
  margin: '0 auto',
  minHeight: '100vh',
  padding: '170px 16.67% 200px',
  display: 'flex',
  flexDirection: 'column',
});

export const TopSection = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '40px',
  position: 'relative',
});

export const CategoryInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#42567A',
  fontSize: '20px',
  fontFamily: '"PT Sans", sans-serif',
  '& > span:first-child': {
    fontWeight: '400',
  },
  '& > span:last-child': {
    fontWeight: '700',
  },
});

export const TimelineWrapper = styled('div')({
  position: 'relative',
  width: '530px',
  height: '530px',
  margin: '0 auto',
  flexShrink: 0,
});
