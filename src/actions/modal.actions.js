import { OPEN_MODAL, CLOSE_MODAL } from './types';

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const openModal = () => ({
  type: OPEN_MODAL,
});
