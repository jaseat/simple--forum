import React, { Component } from 'react';
import Thread from './Components/Thread'
import InputForm from './Components/InputForm'
import './App.css';
import ThreadList from './Components/ThreadList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      thread: false
    };
    this.click = this.click.bind(this);
  }

  componentDidMount(){

  }
  click(event){
    if(event.target.className === "threads"){
      this.setState({
        thread: event.target.attributes['threadname'].value
      })
    }
  }


  render() {
    var display;
    if(this.state.thread === false){
      display = <ThreadList />
    }
    else{
      display = <Thread thread={this.state.thread} />
    }
    return (
      <div className="App" onClick={this.click}>
        <InputForm thread={this.state.thread}/>
        {display}
      </div>
    );
  }
}

export default App;
