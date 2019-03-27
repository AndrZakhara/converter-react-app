import combineEvents from 'utils/combineEvents';
import { OPEN_MODAL, CLOSE_MODAL } from 'actions/types';

const initialState = {
  isModalOpen: false,
};

export default combineEvents(
  {
    [OPEN_MODAL]: () => ({ isModalOpen: true }),
    [CLOSE_MODAL]: () => ({ isModalOpen: false }),
  },
  initialState,
);
