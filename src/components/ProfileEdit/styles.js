import { Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 600px;
  margin: auto 0;
`;
export const InputField = styled(Field)`
  margin-bottom: 20px !important;
`;

export const Actions = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
`;
export const StyledButton = styled(Button)`
  color: #fff !important;
  background: ${props => props.theme.main} !important;
`;
