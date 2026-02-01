import {
  PaginationContainer,
  LeftColumn,
  Counter,
  ButtonsContainer,
  DesktopCounter,
  DesktopButtonsContainer,
  NavButton,
  ArrowIcon,
  DotsContainer,
  Dot,
} from './PaginationControl.styled';

interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const PaginationControl = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: PaginationControlProps) => {
  return (
    <PaginationContainer>
      <LeftColumn>
        <Counter>
          {String(currentPage).padStart(2, '0')}/{String(totalPages).padStart(2, '0')}
        </Counter>
        <ButtonsContainer>
          <NavButton
            onClick={onPrevious}
            disabled={currentPage === 1}
            $disabled={currentPage === 1}
            aria-label="Предыдущая страница"
          >
            <ArrowIcon $isLeft viewBox="0 0 25 25" fill="none">
              <circle cx="12.5" cy="12.5" r="12" transform="matrix(-1 0 0 1 25 0)" stroke="#42567A" strokeOpacity="0.5" />
              <path d="M13.7489 9.37506L10.6239 12.5001L13.7489 15.6251" stroke="#42567A" strokeWidth="2" />
            </ArrowIcon>
          </NavButton>
          <NavButton
            onClick={onNext}
            disabled={currentPage === totalPages}
            $disabled={currentPage === totalPages}
            aria-label="Следующая страница"
          >
            <ArrowIcon viewBox="0 0 25 25" fill="none">
              <circle cx="12.5" cy="12.5" r="12" stroke="#42567A" strokeOpacity="0.5" />
              <path d="M11.2511 9.37506L14.3761 12.5001L11.2511 15.6251" stroke="#42567A" strokeWidth="2" />
            </ArrowIcon>
          </NavButton>
        </ButtonsContainer>
      </LeftColumn>
      <DotsContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <Dot key={index} $active={index + 1 === currentPage} />
        ))}
      </DotsContainer>
      <DesktopCounter>
        {String(currentPage).padStart(2, '0')}/{String(totalPages).padStart(2, '0')}
      </DesktopCounter>
      <DesktopButtonsContainer>
        <NavButton
          onClick={onPrevious}
          disabled={currentPage === 1}
          $disabled={currentPage === 1}
          aria-label="Предыдущая страница"
        >
          <ArrowIcon $isLeft viewBox="0 0 7 12" fill="none">
            <path d="M1 1L6 6L1 11" stroke="#42567A" strokeWidth="2" />
          </ArrowIcon>
        </NavButton>
        <NavButton
          onClick={onNext}
          disabled={currentPage === totalPages}
          $disabled={currentPage === totalPages}
          aria-label="Следующая страница"
        >
          <ArrowIcon viewBox="0 0 7 12" fill="none">
            <path d="M1 1L6 6L1 11" stroke="#42567A" strokeWidth="2" />
          </ArrowIcon>
        </NavButton>
      </DesktopButtonsContainer>
    </PaginationContainer>
  );
};

export default PaginationControl;
