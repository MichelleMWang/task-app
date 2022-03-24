import React from 'react';

class Overview extends React.Component {
    constructor(props){
        super(props); 
        this.state = {}; 
    }
    render(){
        return (
            <div>
                <input type='text' id='task-input'></input>
                <button id='submit-button'>Submit</button>
            </div>
        ); 
    }
}

export default Overview; 