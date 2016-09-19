import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './components/counter';
import chatRoom from './components/chatRoom';

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
  chatRoom,
});

export default rootReducer;
