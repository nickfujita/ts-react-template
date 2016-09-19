import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../constants/actions';

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}
export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}
