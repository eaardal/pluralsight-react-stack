import ReactDOM from 'react-dom';
import React from 'react';
import MessageList from './messageList.jsx';
import ChannelList from './channelList.jsx';
import MessageBox from './messageBox.jsx';

class App extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    maxWidth: 1200,
                    width: '100%',
                    margin: '30px auto 30px',
                    backgroundColor: 'lightGray'
                }}>
                    <ChannelList />
                    <MessageList />                      
                </div>
                <MessageBox /> 
            </div>     
        )
    }
}

export default App;