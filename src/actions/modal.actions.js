import { OPEN_MODAL, CLOSE_MODAL } from './types.actions';

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const openModal = mes => ({
  type: OPEN_MODAL,
  payload: mes,
});
