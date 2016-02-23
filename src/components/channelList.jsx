import React from 'react';
import Channel from './channel.jsx';

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                'foo', 'bar'
            ]
        }
    } 
    
    render() {
        var channelNodes = this.state.channels.map((channel) => {
           return (
             <Channel key={channel} channel={channel} />  
           );
        });
        
        return (
            <ul style={{flexGrow: 1}}>{channelNodes}</ul>
        )
    }
    
}

export default ChannelList;