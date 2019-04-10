import React from 'react';
import {
  StyledModalWindow,
  ModalContentWrapper,
  Message,
  ButtonModalWrapper,
  StyledButton,
} from './style';

const ModalWindow = ({ isOpen, closeModal, modalMessage }) => (
  <StyledModalWindow isOpen={isOpen}>
    <ModalContentWrapper>
      <Message>{modalMessage}</Message>
      <ButtonModalWrapper>
        <StyledButton onClick={closeModal} variant="contained">
          Cancel
        </StyledButton>
        <StyledButton variant="contained">Apply</StyledButton>
      </ButtonModalWrapper>
    </ModalContentWrapper>
  </StyledModalWindow>
);

export default ModalWindow;
