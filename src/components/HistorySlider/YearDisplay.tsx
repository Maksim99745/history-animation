import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { TimeSegment } from '../../types';
import { YearContainer, YearText } from './YearDisplay.styled';

interface YearDisplayProps {
  segment: TimeSegment;
}

const YearDisplay = ({ segment }: YearDisplayProps) => {
  const [displayStartYear, setDisplayStartYear] = useState(segment.startYear);
  const [displayEndYear, setDisplayEndYear] = useState(segment.endYear);
  const prevSegmentRef = useRef<TimeSegment | null>(null);

  useEffect(() => {
    const prevSegment = prevSegmentRef.current;
    prevSegmentRef.current = segment;

    if (!prevSegment) {
      return;
    }

    const startDiff = segment.startYear - prevSegment.startYear;
    const endDiff = segment.endYear - prevSegment.endYear;
    const startSteps = Math.abs(startDiff);
    const endSteps = Math.abs(endDiff);

    if (startSteps === 0 && endSteps === 0) return;

    const timeline = gsap.timeline();

    if (startSteps > 0) {
      const direction = startDiff > 0 ? 1 : -1;
      for (let i = 1; i <= startSteps; i++) {
        timeline.call(() => {
          setDisplayStartYear(prevSegment.startYear + i * direction);
        }, [], i * 0.05);
      }
    }

    if (endSteps > 0) {
      const direction = endDiff > 0 ? 1 : -1;
      for (let i = 1; i <= endSteps; i++) {
        timeline.call(() => {
          setDisplayEndYear(prevSegment.endYear + i * direction);
        }, [], i * 0.05);
      }
    }
  }, [segment.id]);

  return (
    <YearContainer>
      <YearText $color="#5D5FEF">{displayStartYear}</YearText>
      <YearText $color="#EF5DA8">{displayEndYear}</YearText>
    </YearContainer>
  );
};

export default YearDisplay;
