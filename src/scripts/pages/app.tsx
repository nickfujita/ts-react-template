import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class App extends React.Component<any, any> {

  componentWillMount() {
    this.goToCounterPage = this.goToCounterPage.bind(this);
    this.goToChatroom = this.goToChatroom.bind(this);
  }

  goToCounterPage() {
    this.props.dispatch(push('/counter'));
  }
  goToChatroom() {
    this.props.dispatch(push('/chat'));
  }
  render() {
    return (
      <div className='index'>
        <button onClick={this.goToCounterPage}>Counter Page</button>
        <button onClick={this.goToChatroom}>Chatroom</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
