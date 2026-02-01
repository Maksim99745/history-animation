import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { TimeSegment } from '../../types';
import { YearContainer, YearText } from './YearDisplay.styled';

interface YearDisplayProps {
  segment: TimeSegment;
}

const YearDisplay = ({ segment }: YearDisplayProps) => {
  const yearsRef = useRef<HTMLDivElement>(null);
  const startYearRef = useRef<HTMLSpanElement>(null);
  const endYearRef = useRef<HTMLSpanElement>(null);
  const [displayStartYear, setDisplayStartYear] = useState(segment.startYear);
  const [displayEndYear, setDisplayEndYear] = useState(segment.endYear);
  const prevSegmentRef = useRef<TimeSegment | null>(null);

  useEffect(() => {
    const prevSegment = prevSegmentRef.current;
    prevSegmentRef.current = segment;

    if (!prevSegment) {
      // Первый рендер
      setDisplayStartYear(segment.startYear);
      setDisplayEndYear(segment.endYear);
      return;
    }

    // Анимация отсчёта для startYear
    const startDiff = segment.startYear - prevSegment.startYear;
    const startSteps = Math.abs(startDiff);
    const startDirection = startDiff > 0 ? 1 : -1;

    // Анимация отсчёта для endYear
    const endDiff = segment.endYear - prevSegment.endYear;
    const endSteps = Math.abs(endDiff);
    const endDirection = endDiff > 0 ? 1 : -1;

    if (startSteps === 0 && endSteps === 0) return;

    const timeline = gsap.timeline();

    // Анимация startYear
    if (startSteps > 0) {
      for (let i = 1; i <= startSteps; i++) {
        const targetYear = prevSegment.startYear + i * startDirection;
        timeline.call(() => {
          setDisplayStartYear(targetYear);
        }, [], i * 0.05); // Быстрое переключение: 0.05 секунды на шаг
      }
    }

    // Анимация endYear
    if (endSteps > 0) {
      for (let i = 1; i <= endSteps; i++) {
        const targetYear = prevSegment.endYear + i * endDirection;
        timeline.call(() => {
          setDisplayEndYear(targetYear);
        }, [], i * 0.05);
      }
    }

    // Финальная анимация появления
    timeline.to(yearsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [segment.id, segment.startYear, segment.endYear]);

  return (
    <YearContainer ref={yearsRef}>
      <YearText $color="#5D5FEF">{displayStartYear}</YearText>
      <YearText $color="#EF5DA8">{displayEndYear}</YearText>
    </YearContainer>
  );
};

export default YearDisplay;
