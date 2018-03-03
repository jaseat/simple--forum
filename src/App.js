import React, { Component } from 'react';
import Thread from './Components/Thread'
import InputForm from './Components/InputForm'
import './App.css';
import ThreadList from './Components/ThreadList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      thread: true
    };
  }

  componentDidMount(){

  }


  render() {
    var display;
    if(this.state.thread === false){
      display = <ThreadList />
    }
    else{
      display = <Thread thread={0} />
    }
    return (
      <div className="App">
        <InputForm thread={this.state.thread}/>
        {display}
      </div>
    );
  }
}

export default App;
