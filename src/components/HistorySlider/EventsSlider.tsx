import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { TimeSegment } from '../../types';
import TimelineEvent from './TimelineEvent';
import { SwiperContainer } from './EventsSlider.styled';
import 'swiper/css';
import 'swiper/css/navigation';

interface EventsSliderProps {
  activeSegment: TimeSegment;
  activeSegmentId: number;
}

const EventsSlider = ({ activeSegment, activeSegmentId }: EventsSliderProps) => {
  if (!activeSegment) return null;

  return (
    <SwiperContainer>
      <button
        className="swiper-button-prev-custom"
        aria-label="Предыдущие события"
      >
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M7.29291 0.707092L2.29291 5.70709L7.29291 10.7071" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
      
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        speed={600}
        allowTouchMove={false}
        watchOverflow={true}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        className="events-swiper"
        key={activeSegmentId}
      >
        {activeSegment.events.map((event, eventIndex) => (
          <SwiperSlide key={`${activeSegment.id}-${event.date}-${eventIndex}`}>
            <TimelineEvent year={event.date} description={event.description} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="swiper-button-next-custom"
        aria-label="Следующие события"
      >
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M0.707093 0.707092L5.70709 5.70709L0.707093 10.7071" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
    </SwiperContainer>
  );
};

export default EventsSlider;
