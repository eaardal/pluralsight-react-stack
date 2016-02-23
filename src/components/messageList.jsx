import React from 'react';

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
             <div key={message}>test asd asd {message}</div>  
           );
        });
        
        return (
            <div>{messageNodes}</div>
        )
    }
    
}

export default MessageList;