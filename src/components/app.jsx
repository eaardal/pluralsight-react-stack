import ReactDOM from 'react-dom';
import React from 'react';
import MessageList from './messageList.jsx';

class App extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <MessageList />
            
        )
    }
}

export default App;