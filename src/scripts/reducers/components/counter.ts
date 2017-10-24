import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../../constants/actions';

const initialState = {
  total: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { total: state.total + 1 };
    case DECREMENT_COUNTER:
      return { total: state.total - 1 };
    default:
      return state;
  }
}
