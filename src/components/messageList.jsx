import React from 'react';
import Message from './message.jsx';
import Firebase from 'firebase';
import _ from 'lodash';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: {}
        };
        
        this.firebaseRef = new Firebase('https://plrl-react-stack.firebaseio.com/messages');
        this.firebaseRef.on('child_added', msg => {
           if (this.state.messages[msg.key()]) {
               return;
           }
           
           let msgVal = msg.val();
           msgVal.key = msg.key();
           this.state.messages[msgVal.key] = msgVal;
           this.setState({messages: this.state.messages});
        });
    } 
    
    render() {
        var messageNodes = _.values(this.state.messages).map((message) => {
           return (
             <Message key={message.key} message={message.message} />  
           );
        });
        
        return (
            <ul style={{flexGrow: 2}}>{messageNodes}</ul>
        )
    }
    
}

export default MessageList;