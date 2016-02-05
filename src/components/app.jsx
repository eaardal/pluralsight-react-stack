import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [
                'hi',
                'there',
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

export default App;