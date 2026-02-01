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
  const angleStep = 360 / segments.length;
  const activeIndex = segments.findIndex((s) => s.id === activeSegmentId);
  const targetRotation = -activeIndex * angleStep;

  const getDotPosition = (index: number) => {
    const dotStartAngle = -45;
    const angle = ((index * angleStep + dotStartAngle) * Math.PI) / 180;
    const radius = 264.5;
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

    dotsRef.current.forEach((dot) => {
      if (!dot) return;
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

    if (categoryLabelRef.current) {
      const startPos = getDotPosition(0);
      if (activeIndex === -1) {
        gsap.set(categoryLabelRef.current, {
          left: `calc(50% + ${startPos.x}px + 28px + 20px)`,
          top: `calc(50% + ${startPos.y}px)`,
        });
      } else {
        gsap.to(categoryLabelRef.current, {
          left: `calc(50% + ${startPos.x}px + 28px + 20px)`,
          top: `calc(50% + ${startPos.y}px)`,
          duration: 1,
          ease: 'power3.inOut',
        });
      }
    }
  }, [targetRotation, activeIndex]);

  const activeSegment = segments.find((s) => s.id === activeSegmentId);

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
