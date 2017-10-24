import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import { getRoutes } from './routes';

import { Route, IndexRoute } from 'react-router';
import App from './pages/app';
import Container from './pages/_container';
import CounterPage from './pages/counter';
import ChatRoom from './pages/ChatRoom';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import '../styles/main.scss';

class Main extends React.Component<any, any> {
  constructor(props, state) {
    super(props, state);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={Container}>
            <IndexRoute component={App} />
            <Route path={'counter'} component={CounterPage} />
            <Route path={'chat'} component={ChatRoom} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export function startApp() {
  ReactDOM.render(<Main/>, document.getElementById('app'));
}
