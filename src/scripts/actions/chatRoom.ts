import {
  ADD_MESSAGE,
  CLEAR_MESSAGES,
} from '../constants/actions';

export function addMessage(data) {
  return {
    type: ADD_MESSAGE,
    data,
  };
}

export function clearMessages() {
  return {
    type: CLEAR_MESSAGES,
  };
}
