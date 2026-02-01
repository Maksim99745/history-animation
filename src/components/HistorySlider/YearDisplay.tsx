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

    const animateYear = (
      current: number,
      target: number,
      setter: (value: number) => void,
      timeline: gsap.core.Timeline
    ) => {
      const diff = target - current;
      const steps = Math.abs(diff);
      if (steps === 0) return;

      const direction = diff > 0 ? 1 : -1;
      for (let i = 1; i <= steps; i++) {
        timeline.call(() => {
          setter(current + i * direction);
        }, [], i * 0.05);
      }
    };

    const timeline = gsap.timeline();
    animateYear(prevSegment.startYear, segment.startYear, setDisplayStartYear, timeline);
    animateYear(prevSegment.endYear, segment.endYear, setDisplayEndYear, timeline);
  }, [segment.id]);

  return (
    <YearContainer>
      <YearText $color="#5D5FEF">{displayStartYear}</YearText>
      <YearText $color="#EF5DA8">{displayEndYear}</YearText>
    </YearContainer>
  );
};

export default YearDisplay;
