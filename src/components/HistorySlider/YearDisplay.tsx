import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TimeSegment } from '../../types';
import { YearContainer, YearText } from './YearDisplay.styled';

interface YearDisplayProps {
  segment: TimeSegment;
}

const YearDisplay = ({ segment }: YearDisplayProps) => {
  const yearsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (yearsRef.current) {
      gsap.fromTo(
        yearsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, [segment.id]);

  return (
    <YearContainer ref={yearsRef}>
      <YearText $color="#5D5FEF">{segment.startYear}</YearText>
      <YearText $color="#EF5DA8">{segment.endYear}</YearText>
    </YearContainer>
  );
};

export default YearDisplay;
