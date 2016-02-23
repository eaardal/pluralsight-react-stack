import React from 'react';
import trim from 'trim';
import Firebase from 'firebase';

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        
        this.firebaseRef = new Firebase('https://plrl-react-stack.firebaseio.com/messages');        
    }
    
    onChange(evnt) {
        this.setState({
           message: evnt.target.value 
        });
    }
    
    onKeyUp(evnt) {
        if (evnt.keyCode === 13 && trim(evnt.target.value)) {
            evnt.preventDefault();
            this.setState({
                message: ''
            });
            
            this.firebaseRef.push({
                message: this.state.message
            });
        }
    }
    
    render() {
        return (
            <div style={{
                maxWidth: 1200,
                margin: '30px auto',
                padding: 30
            }}>
            <textarea 
                value={this.state.message}
                onChange={this.onChange.bind(this)}
                onKeyUp={this.onKeyUp.bind(this)}
                style={{
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