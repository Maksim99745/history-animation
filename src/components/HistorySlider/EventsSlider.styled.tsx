import styled from 'styled-components';

export const SwiperContainer = styled('div')({
  marginTop: '101px',
  marginLeft: '80px',
  margin: '101px 20px 0 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '25px',
  '& .events-swiper': {
    flex: 1,
    overflow: 'hidden',
  },
  '& .swiper-wrapper': {
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '& .swiper-button-prev-custom, & .swiper-button-next-custom': {
    width: '40px',
    height: '40px',
    background: 'white',
    boxShadow: '0px 0px 15px rgba(56, 119, 238, 0.10)',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    zIndex: 10,
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
    '& svg': {
      display: 'block',
    },
    '&.swiper-button-disabled': {
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
    },
  },
});
