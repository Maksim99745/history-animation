import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TimeSegment } from '../../types';
import { categoryLabels } from '../../constants/categories';
import {
  TimelineContainer,
  OrbitWrapper,
  Orbit,
  CircleSvg,
  DotWrapper,
  ActiveDotContainer,
  ActiveDot,
  InactiveDot,
  DotLabel,
  CategoryLabel,
} from './CircularTimeline.styled';

interface CircularTimelineProps {
  segments: TimeSegment[];
  activeSegmentId: number;
  onSegmentChange?: (segmentId: number) => void;
}

const CircularTimeline = ({ segments, activeSegmentId, onSegmentChange }: CircularTimelineProps) => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const categoryLabelRef = useRef<HTMLDivElement>(null);
  const totalSegments = segments.length;
  const angleStep = 360 / totalSegments;
  const startAngle = -70; // 2 часа по часовой стрелке от правой позиции
  const activeIndex = segments.findIndex((s) => s.id === activeSegmentId);
  const targetRotation = activeIndex !== -1 ? -activeIndex * angleStep : 0;

  const getDotPosition = (index: number) => {
    const startAngle = -45;
    const angle = ((index * angleStep + startAngle) * Math.PI) / 180;
    const radius = 264.5; // Радиус круга (r="264.5" в SVG)
    // Центр круга в SVG: cx="268" cy="265", но относительно TimelineContainer центр на 265px
    // Поэтому радиус должен быть точно 264.5px от центра
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  useEffect(() => {
    if (orbitRef.current) {
      gsap.to(orbitRef.current, {
        rotation: targetRotation,
        duration: 1,
        ease: 'power3.inOut',
        transformOrigin: 'center center',
      });
    }

    dotsRef.current.forEach((dot, i) => {
      if (!dot) return;

      const isActive = i === activeIndex;
      const label = dot.querySelector('[data-dot-label]') as HTMLElement;

      if (label) {
        gsap.to(label, {
          rotation: -targetRotation,
          duration: 1,
          ease: 'power3.inOut',
          transformOrigin: 'center center',
        });
      }
    });

    if (categoryLabelRef.current && activeIndex !== -1) {
      // Позиция активной точки после вращения Orbit
      // Изначально точка на позиции activeIndex, после вращения на targetRotation
      // она оказывается в позиции 0 (стартовая позиция)
      const startPos = getDotPosition(0);
      
      gsap.to(categoryLabelRef.current, {
        left: `calc(50% + ${startPos.x}px + 28px + 20px)`,
        top: `calc(50% + ${startPos.y}px)`,
        duration: 1,
        ease: 'power3.inOut',
      });
    }
  }, [targetRotation, activeIndex, angleStep]);

  useEffect(() => {
    // Устанавливаем начальную позицию категории
    if (categoryLabelRef.current && activeIndex !== -1) {
      const startPos = getDotPosition(0);
      gsap.set(categoryLabelRef.current, {
        left: `calc(50% + ${startPos.x}px + 28px + 20px)`,
        top: `calc(50% + ${startPos.y}px)`,
      });
    }
  }, []);

  const activeSegment = segments.find((s) => s.id === activeSegmentId);
  const activePos = activeSegment
    ? getDotPosition(segments.findIndex((s) => s.id === activeSegmentId))
    : { x: 0, y: 0 };

  return (
    <TimelineContainer>
      <OrbitWrapper>
        <CircleSvg viewBox="0 0 530 530" fill="none">
          <circle
            cx="265"
            cy="265"
            r="264.5"
            stroke="#42567A"
            strokeOpacity="0.2"
            fill="none"
          />
        </CircleSvg>

        <Orbit ref={orbitRef}>
          {segments.map((segment, index) => {
            const pos = getDotPosition(index);
            const isActive = segment.id === activeSegmentId;

            return (
              <DotWrapper
                key={segment.id}
                ref={(el) => {
                  dotsRef.current[index] = el;
                }}
                $x={pos.x}
                $y={pos.y}
                $isActive={isActive}
                onClick={() => onSegmentChange?.(segment.id)}
                style={{ cursor: 'pointer' }}
              >
                {isActive ? (
                  <ActiveDotContainer>
                    <ActiveDot viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" fill="#F4F5F9" r="28" />
                      <circle
                        cx="28"
                        cy="28"
                        r="27.5"
                        stroke="#303E58"
                        strokeOpacity="0.5"
                      />
                    </ActiveDot>
                    <DotLabel data-dot-label>{index + 1}</DotLabel>
                  </ActiveDotContainer>
                ) : (
                  <InactiveDot />
                )}
              </DotWrapper>
            );
          })}
        </Orbit>
      </OrbitWrapper>
      {activeSegment && (
        <CategoryLabel ref={categoryLabelRef}>
          {categoryLabels[activeSegment.category] || activeSegment.category}
        </CategoryLabel>
      )}
    </TimelineContainer>
  );
};

export default CircularTimeline;
