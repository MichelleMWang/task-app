import React from 'react';

function Overview(props) {
    const { tasks } = props;  
    return (
        <div className='Overview'> 
            <div className="tasks">
                {tasks.map((task) => {
                    return <div key={task.id}>{task.text}</div>
                })}
            </div> 
        </div> 
    ); 
}

export default Overview; 