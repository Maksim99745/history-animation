import { useState, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { historyData } from '../../data/historyData';
import CircularTimeline from './CircularTimeline';
import YearDisplay from './YearDisplay';
import GridBackground from './GridBackground';
import TimelineHeader from './TimelineHeader';
import EventsSlider from './EventsSlider';
import PaginationControl from './PaginationControl';
import {
  Container,
  MainContent,
  TopSection,
  CategoryInfo,
  TimelineWrapper,
} from './HistorySlider.styled';
import { categoryLabels } from '../../constants/categories';

const HistorySlider = () => {
  const [activeSegmentId, setActiveSegmentId] = useState(historyData.segments[0].id);
  const swiperRef = useRef<SwiperType | null>(null);
  const activeSegment = historyData.segments.find((s) => s.id === activeSegmentId);
  const activeIndex = historyData.segments.findIndex((s) => s.id === activeSegmentId);

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.activeIndex;
    const newSegment = historyData.segments[newIndex];
    if (newSegment) {
      setActiveSegmentId(newSegment.id);
    }
  };

  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const handlePrevious = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <Container>
      <GridBackground />
      <MainContent>
        <TopSection>
          <TimelineHeader />
        </TopSection>
        <TimelineWrapper>
          <CircularTimeline
            segments={historyData.segments}
            activeSegmentId={activeSegmentId}
          />
          {activeSegment && <YearDisplay segment={activeSegment} />}
        </TimelineWrapper>
        <PaginationControl
          currentPage={activeIndex + 1}
          totalPages={historyData.segments.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
        <EventsSlider
          segments={historyData.segments}
          onSlideChange={handleSlideChange}
          onSwiper={handleSwiper}
        />
      </MainContent>
    </Container>
  );
};

export default HistorySlider;
