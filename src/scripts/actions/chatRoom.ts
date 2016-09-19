import {
  ADD_MESSAGE,
  CLEAR_MESSAGES,
} from '../constants/actions';

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    data: new Message(message),
  };
}

export function clearMessages() {
  return {
    type: CLEAR_MESSAGES,
  };
}

export class Message {
  constructor(private text) {}
  getText() {
    return this.text;
  }
}
