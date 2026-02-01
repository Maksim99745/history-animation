import { EventContainer, Year, Description } from './TimelineEvent.styled';

interface TimelineEventProps {
  year: string;
  description: string;
}

const TimelineEvent = ({ year, description }: TimelineEventProps) => {
  return (
    <EventContainer>
      <Year>{year}</Year>
      <Description>{description}</Description>
    </EventContainer>
  );
};

export default TimelineEvent;
