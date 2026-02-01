import styled from 'styled-components';

export const DividerLine = styled('div')({
  display: 'none',
  '@media (max-width: 768px)': {
    display: 'block',
    height: '1px',
    width: '100%',
    marginTop: '57px',
    marginBottom: '20px',
    background: 'transparent',
    borderTop: '1px solid #C7CDD9',
  },
});
