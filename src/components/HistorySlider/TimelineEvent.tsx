import { EventContainer, Year, Description } from './TimelineEvent.styled';

interface TimelineEventProps {
  year: string;
  description: string;
  position: number;
}

const TimelineEvent = ({ year, description, position }: TimelineEventProps) => {
  const leftPositions = ['20.83%', '41.67%', '66.67%'];

  return (
    <EventContainer $left={leftPositions[position]}>
      <Year>{year}</Year>
      <Description>{description}</Description>
    </EventContainer>
  );
};

export default TimelineEvent;
