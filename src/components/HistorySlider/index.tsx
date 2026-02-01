import { useState } from 'react';
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
  TimelineWrapper,
} from './HistorySlider.styled';

const HistorySlider = () => {
  const [activeSegmentId, setActiveSegmentId] = useState(historyData.segments[0].id);
  const activeSegment = historyData.segments.find((s) => s.id === activeSegmentId);
  const activeIndex = historyData.segments.findIndex((s) => s.id === activeSegmentId);

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
            onSegmentChange={setActiveSegmentId}
          />
          {activeSegment && <YearDisplay segment={activeSegment} />}
        </TimelineWrapper>
        <PaginationControl
          currentPage={activeIndex + 1}
          totalPages={historyData.segments.length}
          onPrevious={() => {
            const prevIndex = activeIndex > 0 ? activeIndex - 1 : historyData.segments.length - 1;
            setActiveSegmentId(historyData.segments[prevIndex].id);
          }}
          onNext={() => {
            const nextIndex = activeIndex < historyData.segments.length - 1 ? activeIndex + 1 : 0;
            setActiveSegmentId(historyData.segments[nextIndex].id);
          }}
        />
        {activeSegment && (
          <EventsSlider activeSegment={activeSegment} activeSegmentId={activeSegmentId} />
        )}
      </MainContent>
    </Container>
  );
};

export default HistorySlider;
