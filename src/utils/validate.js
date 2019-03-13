/* eslint-disable import/prefer-default-export */
import isEmail from 'isemail';

const phoneMask = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const passwordMask = /.{6,}/;

export const validateProfile = ({ name, email, phone }) => {
  const errors = {};

  if (!name) {
    errors.name = 'Please provide your name';
  }

  if (!email) {
    errors.email = 'Please, provide your email';
  } else if (!isEmail.validate(email)) {
    errors.email = 'Please, write your email properly';
  }

  if (!phone) {
    errors.phone = 'Please, provide your phone';
  } else if (!phoneMask.test(phone)) {
    errors.phone = 'Please, write your phone properly';
  }

  return errors;
};

export const validateFirstName = firstName => firstName ? undefined : 'Please provide your first name';
export const validateSecondName = secondName => secondName ? undefined : 'Please provide your second name';
export const validateEmail = email => email && isEmail.validate(email) ? undefined : 'Please, write your email properly';
export const validatePhone = phone => {
  if (!phone) {
    return 'Please, provide your phone';
  } else if (!phoneMask.test(phone)) {
    return 'Please, write your phone properly';
  }
};
export const passwordLength = password => password && passwordMask.test(password) ? undefined : 'Password should have at least 6 characters';
export const passwordMatch = (_, allValues) => {
  if (allValues.passwordOne !== allValues.passwordTwo) {
    return 'Password should be the same';
  }
}
