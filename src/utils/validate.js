/* eslint-disable import/prefer-default-export */
import isEmail from 'isemail';

const testMask = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const passwordMask = /.{6,}/;

export const validateProfile = ({ firstName, secondName, email, phone, passwordOne, passwordTwo }) => {
  const errors = {};

  if (!firstName) {
    errors.firstName = 'Please provide your first name';
  }
  if (!secondName) {
    errors.secondName = 'Please provide your second name';
  }

  if (!email) {
    errors.email = 'Please, provide your email';
  } else if (!isEmail.validate(email)) {
    errors.email = 'Please, write your email properly';
  }

  if (!phone) {
    errors.phone = 'Please, provide your phone';
  } else if (!testMask.test(phone)) {
    errors.phone = 'Please, write your phone properly';
  }

  if (!passwordOne || !passwordMask.test(passwordOne)) {
    errors.passwordOne = 'Password should have at least 6 characters';
  }

  if (!passwordTwo || !passwordMask.test(passwordTwo)) {
    errors.passwordTwo = 'Password should have at least 6 characters';
  }

  if (passwordOne !== passwordTwo) {
    errors.passwordOne = 'Passwords should be the same';
    errors.passwordTwo = 'Passwords should be the same';
  }
  
  return errors;
};
