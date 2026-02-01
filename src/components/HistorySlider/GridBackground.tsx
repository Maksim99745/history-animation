import { GridContainer, GridSvg } from './GridBackground.styled';

const GridBackground = () => {
  return (
    <GridContainer>
      <GridSvg viewBox="0 0 1441 1080" fill="none">
        <path d="M0.5 0V1080" opacity="0.1" stroke="#42567A" />
        <path d="M720.5 0V1080" opacity="0.1" stroke="#42567A" />
        <path d="M1440.5 0V1080" opacity="0.1" stroke="#42567A" />
        <path d="M0.5 480H1440.5" opacity="0.1" stroke="#42567A" />
      </GridSvg>
    </GridContainer>
  );
};

export default GridBackground;
