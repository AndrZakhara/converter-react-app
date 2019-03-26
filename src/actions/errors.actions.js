/* eslint-disable import/prefer-default-export */
import { SERVER_ERROR } from './types.actions';

export const serverError = () => ({
  type: SERVER_ERROR,
});
