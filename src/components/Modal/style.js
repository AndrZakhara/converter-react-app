import Modal from 'react-modal';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const StyledModalWindow = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: gray;
  outline: none;
  width: 400px;
  height: 220px;
`;
export const ModalContentWrapper = styled(Paper)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const Message = styled.span`
  margin: 0 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonModalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const StyledButton = styled(Button)`
  min-width: 180px;
  background: ${props => props.theme.main} !important;
`;
