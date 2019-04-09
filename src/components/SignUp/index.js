import React from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { Redirect } from 'react-router-dom';
import AccountIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import Security from '@material-ui/icons/Security';
import Phone from '@material-ui/icons/Phone';
import Input from 'components/Input';
import {
  validateTextEmpty,
  validateEmail,
  validatePhone,
  passwordLength,
  passwordMatch,
} from 'utils/validate';
import normalizePhone from 'utils/mask';
import {
  FormContainer,
  LogoutTitle,
  StyledPaper,
  TextField,
  ErrorMsg,
  SubmitBtn,
} from './style';

const SignUpForm = ({ handleSubmit, onSubmit, errorMsg, isLoggedIn }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <FormContainer>
      <LogoutTitle>Sign Up</LogoutTitle>
      <StyledPaper>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="First name"
            name="firstName"
            component={Input}
            Icon={AccountIcon}
            type="text"
            validate={validateTextEmpty}
          />

          <TextField
            label="Second name"
            name="lastName"
            component={Input}
            Icon={AccountIcon}
            type="text"
            validate={validateTextEmpty}
          />

          <TextField
            label="Email"
            name="email"
            Icon={MailIcon}
            component={Input}
            type="email"
            validate={validateEmail}
          />

          <TextField
            label="Password"
            name="passwordOne"
            component={Input}
            Icon={Security}
            type="password"
            validate={[passwordLength, passwordMatch]}
          />

          <TextField
            label="Repeat password"
            name="passwordTwo"
            component={Input}
            Icon={Security}
            type="password"
            validate={[passwordLength, passwordMatch]}
          />

          <TextField
            label="Phone"
            name="phone"
            component={Input}
            Icon={Phone}
            type="tel"
            validate={validatePhone}
            normalize={normalizePhone}
          />
          <ErrorMsg>{errorMsg && errorMsg.message}</ErrorMsg>
          <SubmitBtn type="submit" variant="contained" color="primary">
            Register
          </SubmitBtn>
        </form>
      </StyledPaper>
    </FormContainer>
  );
};

export default compose(reduxForm({ form: 'signUp' }))(SignUpForm);
