import React from 'react';

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div style={{
                maxWidth: 1200,
                margin: '30px auto',
                padding: 30
            }}><textarea style={{
                width: '100%',
                borderColor: '#D0D0D0',
                resize: 'none',
                borderRadius: 3,
                minHeigth: 50,
                height: 75,
                color: '#555',
                fontSize: 14,
                outline: 'auto 0px'
            }}/></div>
        )
    }
}

export default MessageBox;