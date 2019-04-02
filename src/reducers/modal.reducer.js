import combineEvents from 'utils/combineEvents';
import { OPEN_MODAL, CLOSE_MODAL } from 'actions/types.actions';

const initialState = {
  isModalOpen: false,
  message: '',
};

export default combineEvents(
  {
    [OPEN_MODAL]: (state, { payload }) => ({
      isModalOpen: true,
      message: payload,
    }),
    [CLOSE_MODAL]: () => ({ isModalOpen: false, message: '' }),
  },
  initialState,
);
