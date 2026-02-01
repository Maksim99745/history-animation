import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { TimeSegment } from '../../types';
import TimelineEvent from './TimelineEvent';
import { SwiperContainer, EventsRow } from './EventsSlider.styled';
import 'swiper/css';

interface EventsSliderProps {
  segments: TimeSegment[];
  onSlideChange: (swiper: SwiperType) => void;
  onSwiper: (swiper: SwiperType) => void;
}

const EventsSlider = ({ segments, onSlideChange, onSwiper }: EventsSliderProps) => {
  return (
    <SwiperContainer>
      <Swiper
        modules={[Navigation]}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        slidesPerView={1}
        allowTouchMove={false}
        className="events-swiper"
      >
        {segments.map((segment, periodIndex) => (
          <SwiperSlide key={segment.id}>
            <EventsRow>
              {segment.events.map((event, eventIndex) => (
                <TimelineEvent
                  key={`${event.date}-${eventIndex}`}
                  year={event.date}
                  description={event.description}
                  position={eventIndex}
                />
              ))}
            </EventsRow>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default EventsSlider;
