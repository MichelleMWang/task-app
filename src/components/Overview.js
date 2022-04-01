import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'

class Overview extends React.Component {
    constructor(props){
        super(); 
        //this.state = props; 
    }
    render(){
        const { tasks } = this.props; 
        return(
            <div className='Overview'> 
                <div className="tasks">
                    {tasks.map((task) => {
                        return (
                            <div key={task.id}> 
                                <div>{task.number + ': ' + task.text}</div>
                                <FontAwesomeIcon icon={faCircleMinus} /> 
                            </div> 
                        )
                    })}
                    
                </div> 
            </div>
        ) 
    }; 
}

export default Overview; 