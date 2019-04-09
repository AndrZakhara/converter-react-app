import Paper from '@material-ui/core/Paper';
import { Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  max-width: 750px;
`;
export const LoginTitle = styled.div`
  line-height: 53px;
  background: ${props => props.theme.main};
  color: #fff;
  border-radius: 5px 5px 0 0;
  width: 100%;
  text-align: center;
  font-size: 27px;
  font-weight: 700;
`;
export const StyledPaper = styled(Paper)`
  padding: 20px;
`;
export const TextField = styled(Field)`
  height: 52px;
`;
export const ErrorMsg = styled.div`
  text-align: center;
  color: red;
  height: 30px;
  font-size: 14px;
`;
export const SubmitBtn = styled(Button)`
  background: ${props => props.theme.main} !important;
  display: block;
  margin: 0 auto;
  padding: 7px 33px;
`;
