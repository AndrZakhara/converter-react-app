/* eslint-disable import/prefer-default-export */
import isEmail from 'isemail';

const phoneMask = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const passwordMask = /.{6,}/;

export const validateTextEmpty = firstName =>
  firstName ? undefined : 'Please fill this field';
export const validateEmail = email =>
  email && isEmail.validate(email)
    ? undefined
    : 'Please, write your email properly';
export const validatePhone = phone => {
  if (!phone) {
    return 'Please, provide your phone';
  } if (!phoneMask.test(phone)) {
    return 'Please, write your phone properly';
  }
};
export const passwordLength = password =>
  password && passwordMask.test(password)
    ? undefined
    : 'Password should have at least 6 characters';
export const passwordMatch = (_, allValues) => {
  if (allValues.passwordOne !== allValues.passwordTwo) {
    return 'Password should be the same';
  }
};
