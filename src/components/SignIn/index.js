import React from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { Redirect } from 'react-router-dom';
import MailIcon from '@material-ui/icons/Mail';
import Security from '@material-ui/icons/Security';
import Input from 'components/Input';
import { validateEmail, passwordLength } from 'utils/validate';
import {
  FormContainer,
  LoginTitle,
  StyledPaper,
  TextField,
  ErrorMsg,
  SubmitBtn,
} from './style';

const SignInForm = ({ onSubmit, errorMsg, handleSubmit, isLoggedIn }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <FormContainer>
      <LoginTitle>Sign In</LoginTitle>
      <StyledPaper>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            name="email"
            type="email"
            Icon={MailIcon}
            component={Input}
            validate={validateEmail}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            component={Input}
            Icon={Security}
            validate={passwordLength}
          />
          <ErrorMsg>{errorMsg && errorMsg.message}</ErrorMsg>
          <SubmitBtn type="submit" variant="contained" color="primary">
            Log In
          </SubmitBtn>
        </form>
      </StyledPaper>
    </FormContainer>
  );
};

export default compose(reduxForm({ form: 'signIn' }))(SignInForm);
