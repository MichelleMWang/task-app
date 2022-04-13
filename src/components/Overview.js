import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'

class Overview extends React.Component {
    deleteTask(e){
        const taskarr = this.props.tasks; 
        const index = taskarr.findIndex(element => element.name === e.target.value)
        this.setState({tasks: this.props.tasks.splice(index, 1) 
        }); 
      }
    render(){
        const { tasks } = this.props; 
        return(
            <div className='Overview'> 
                <div className="tasks">
                    {tasks.map((task) => {
                        return ( //DOM of task number, text, and delete button 
                            <div key={task.id}> 
                                <div>{task.number + ': ' + task.text}</div>
                                <FontAwesomeIcon icon={faCircleMinus} onClick={(e) => this.deleteTask(e)}/> 
                            </div> 
                        )
                    })}
                </div> 
            </div>
        ) 
    }; 
}

export default Overview; 