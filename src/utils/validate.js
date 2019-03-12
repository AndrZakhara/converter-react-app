/* eslint-disable import/prefer-default-export */
import isEmail from 'isemail';

const testMask = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

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
  } else if (!testMask.test(phone)) {
    errors.phone = 'Please, write your phone properly';
  }

  return errors;
};
