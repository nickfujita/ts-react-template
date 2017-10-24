import {
  ADD_MESSAGE,
  CLEAR_MESSAGES,
} from '../../constants/actions';

const initialState = {
  messages: [],
};

export default function chatRoom(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return { messages: [...state.messages, action.data] };
    case CLEAR_MESSAGES:
      return { messages: [] };
    default:
      return state;
  }
}
