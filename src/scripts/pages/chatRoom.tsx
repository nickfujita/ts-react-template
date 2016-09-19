import * as React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/chatRoom';

class ChatRoom extends React.Component<IChatRoomProps, any> {
  private chatInputField;

  sendMessage() {
    this.props.dispatch(addMessage(this.chatInputField.value))
    this.chatInputField.value = '';
  }

  render() {
    return (
      <div id='chatRoom'>
        <div className='inputRow'>
          <input
            ref={chatInputField => this.chatInputField = chatInputField}
          />
          <button onClick={this.sendMessage.bind(this)}>Send</button>
        </div>
        {this.props.chatRoom.messages.map((message, index) => {
          return (
            <div
              key={message + index}
            >
              {message}
            </div>
          )
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let {
    chatRoom,
  } = state;

  return {
    chatRoom,
  };
}

export default connect(
  mapStateToProps
)(ChatRoom);

interface IChatRoomProps {
  dispatch: any,
  chatRoom: {
    messages: string[],
  };
}
