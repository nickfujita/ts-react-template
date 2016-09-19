import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class App extends React.Component<any, any> {
  goToCounterPage() {
    this.props.dispatch(push('/counter'));
  }
  goToChatroom() {
    this.props.dispatch(push('/chat'));
  }
  render() {
    return (
      <div id='index'>
        <button onClick={this.goToCounterPage.bind(this)}>Counter Page</button>
        <button onClick={this.goToChatroom.bind(this)}>Chatroom</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps
)(App);
