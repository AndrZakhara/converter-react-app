import { shape, string, arrayOf } from 'prop-types';

export const userType = shape({
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  role: string,
  ava: string,
  id: string.isRequired,
});

export const usersFilteredType = arrayOf(userType);
