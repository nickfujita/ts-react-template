import * as React from 'react';
import { connect } from 'react-redux';

class Container extends React.Component<any, any> {
  render() {
    return (
      <div id='app_content'>
        { this.props.children }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps
)(Container);
