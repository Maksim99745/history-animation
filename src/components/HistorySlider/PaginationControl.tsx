import {
  PaginationContainer,
  Counter,
  ButtonsContainer,
  NavButton,
  ArrowIcon,
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
          <ArrowIcon $isLeft viewBox="0 0 7 12" fill="none">
            <path d="M1 1L6 6L1 11" stroke="#42567A" strokeWidth="2" />
          </ArrowIcon>
        </NavButton>
        <NavButton
          onClick={onNext}
          disabled={currentPage === totalPages}
          $disabled={currentPage === totalPages}
          $isNext
          aria-label="Следующая страница"
        >
          <ArrowIcon viewBox="0 0 7 12" fill="none">
            <path d="M1 1L6 6L1 11" stroke="#42567A" strokeWidth="2" />
          </ArrowIcon>
        </NavButton>
      </ButtonsContainer>
    </PaginationContainer>
  );
};

export default PaginationControl;
