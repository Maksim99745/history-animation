import styled from 'styled-components';

export const SwiperContainer = styled('div')({
  width: '100%',
  marginTop: '101px',
  '& .events-swiper': {
    overflow: 'visible',
  },
  '& .swiper-wrapper': {
    transitionTimingFunction: 'ease-in-out',
  },
  '& .swiper-slide': {
    height: 'auto',
  },
});

export const EventsRow = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100px',
});
