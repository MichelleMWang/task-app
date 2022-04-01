import React from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid"; 

class App extends React.Component {
  constructor(props){
    super(props); 

    this.state = {
      task: {
        text: '', 
        id: uniqid(), 
        number: 1  
      }, 
      tasks:[]
    }; 
  }
  handleChange = (e) => { //when type in the input, sets state "tast" property to the value that is in the input 
    this.setState({task: {
      text: e.target.value, 
      id: this.state.task.id, 
      number: this.state.task.number
    }}); 
  }
  onSubmitTask = (e) => { //when click submit, puts the value of "task" into the array "tasks" and clears the "task" value for the next task 
    e.preventDefault(); 
    this.setState({
      tasks: this.state.tasks.concat(this.state.task), 
      task: {text: '', id: uniqid(), number: this.state.task.number + 1 }
    }); 
  }
  render(){
    const { task, tasks } = this.state; 

    return (
      <div className="App">
        <form>
          <input type='text' id='task-input' 
            onChange = {(e) => this.handleChange(e)}
            value={task.text}
            
          ></input>
          <button id='submit-button' onClick={(e) => this.onSubmitTask(e)}>Submit</button>
        </form>
        <Overview tasks={tasks}></Overview>
      </div>
    );
  } 

}

export default App;
