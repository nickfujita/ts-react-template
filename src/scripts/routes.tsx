import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/app';
import Container from './pages/_container';
import CounterPage from './pages/counter';
import ChatRoom from './pages/ChatRoom';

export function getRoutes() {
  return (
    <Route path='/' component={Container}>
      <IndexRoute component={App} />
      <Route path='counter' component={CounterPage} />
      <Route path='chat' component={ChatRoom} />
    </Route>
  );
}
