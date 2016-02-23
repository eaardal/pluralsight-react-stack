import React from 'react';
import Message from './message.jsx';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                'hi HI',
                'there THERE THERE!!! OMG asdas  ',
                'testing'
            ]
        }
    } 
    
    render() {
        var messageNodes = this.state.messages.map((message) => {
           return (
             <Message key={message} message={message} />  
           );
        });
        
        return (
            <ul style={{flexGrow: 2}}>{messageNodes}</ul>
        )
    }
    
}

export default MessageList;