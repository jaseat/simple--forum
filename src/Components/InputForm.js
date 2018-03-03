import React, { Component } from 'react';
import firebase from '../MyFirebase';

var ev;

class InputForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.database = firebase.database().ref();
    }
    
    handleSubmit(event){
        event.preventDefault();
        ev = event;
        if(!this.props.thread){
            this.database.child("threadlist").push({
                threadname: event.target[0].value,
            })
            this.database.child("threads").push({
                threadname: event.target[0].value,
            })
        }
        
        else{
             this.database.child("threads").orderByChild('threadname').equalTo(this.props.thread).once("value", function(snapshot) {
                 snapshot.forEach(function(user){
                     user.ref.child('comment').push({
                         
                        //  name: "test",
                        //  comment: "comment",
                        //  time: firebase.database.ServerValue.TIMESTAMP
                         name: ev.target[0].value,
                         comment: ev.target[1].value,
                         time: firebase.database.ServerValue.TIMESTAMP
                    })
                 })
                 
             })
        }
        event.target[1].value = '';
    }

    componentDidMount(){
    }

  render() {
    return (
        <div className="InputForm">
            <h1>{this.props.thread ? 'Reply' : 'New Thread'}</h1>
           <form onSubmit={this.handleSubmit}>
                {!(this.props.thread) && 
                <label>Thread Name: </label>}
                {!(this.props.thread) && 
                <input type="text" name="name"/>}
                {!(this.props.thread) && 
                <br/>}
               <label>Name: </label>
               <input type="text" name="name"/><br/>

               <label>Comment:</label>
               <textarea></textarea><br/>

               <button type="submit">Submit</button>
            </form>
        </div>
    );
  }
}

export default InputForm;
