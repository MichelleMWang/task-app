import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor(props){
    super(props); 

    this.state = {
      task: {text: '' }, 
      tasks:[]
    }; 
  }
  handleChange = (e) => {
    this.setState({task: {
      text: e.target.value, 
    }}); 
  }
  onSubmitTask = (e) => {
    e.preventDefault(); 
    this.setState({
      tasks: this.state.tasks.concat(this.state.task), 
      task: {text: ''}
    }); 
  }
  render(){
    return (
      <div className="App">
        <Overview></Overview>
      </div>
    );
  } 

}

export default App;
