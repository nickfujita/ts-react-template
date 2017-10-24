import * as React from 'react';
import { connect } from 'react-redux';
import { addMessage, Message } from '../actions/chatRoom';

class ChatRoom extends React.Component<IChatRoomProps, any> {
  private chatInputField;

  componentWillMount() {
    this.sendOnEnter = this.sendOnEnter.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage() {
    this.props.dispatch(addMessage(this.chatInputField.value));
    this.chatInputField.value = '';
  }

  sendOnEnter(event) {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  }

  render() {
    return (
      <div className='chatRoom'>
        <div className='inputRow'>
          <input
            ref={chatInputField => this.chatInputField = chatInputField}
            type='text'
            onKeyDown={this.sendOnEnter}
          />
          <button onClick={this.sendMessage}>Send</button>
        </div>
        <div className='messages'>
          {this.props.chatRoom.messages.map((message: Message, index) => {
            let isSend = index % 2 === 0;
            let text =  message.getText();
            return (
              <div
                key={message.getText() + index}
              >
                {isSend ? `Me: ${text}` : `Friend: ${text}`}
              </div>
            );
          })}
        </div>
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

export default connect(mapStateToProps)(ChatRoom);

interface IChatRoomProps {
  dispatch: any;
  chatRoom: {
    messages: Message[],
  };
}
