import * as React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counter';

class CounterPage extends React.Component<ICounterPageProps, any> {

  render() {
    return (
      <div className='counterPage'>
        <h1>{this.props.counter.total}</h1>
        <div className='counterButtons'>
          <button onClick={() => this.props.dispatch(incrementCounter())}>Add</button>
          <button onClick={() => this.props.dispatch(decrementCounter())}>Subtract</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let {
    counter,
  } = state;

  return {
    counter,
  };
}

export default connect(mapStateToProps)(CounterPage);

interface ICounterPageProps {
  dispatch: any;
  counter: {
    total: number,
  };
}
