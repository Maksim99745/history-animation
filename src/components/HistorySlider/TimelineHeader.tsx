import { HeaderContainer, Title, DecorativeLine, LineSvg } from './TimelineHeader.styled';

const TimelineHeader = () => {
  return (
    <HeaderContainer>
      <DecorativeLine>
        <LineSvg viewBox="0 0 5 120" fill="none">
          <path
            d="M2.5 0V120"
            stroke="url(#paint0_linear_1_73)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_73"
              x1="3"
              x2="3"
              y1="-6"
              y2="102"
            >
              <stop stopColor="#3877EE" />
              <stop offset="1" stopColor="#EF5DA8" />
            </linearGradient>
          </defs>
        </LineSvg>
      </DecorativeLine>
      <Title>
        Исторические
        <br />
        даты
      </Title>
    </HeaderContainer>
  );
};

export default TimelineHeader;
