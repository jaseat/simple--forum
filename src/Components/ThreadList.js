import React, { Component } from 'react';
import Comment from './Comment'
import firebase from '../MyFirebase'


class ThreadList extends Component {
    constructor(props){
        super(props);
        this.Threads = [];
    }
    componentDidMount(){
        const commentRef = firebase.database().ref().child('threadlist');
        var count = 0;

        commentRef.on('child_added', snap =>{
            if(snap.exists()){
                this.Threads.push(<li className="threads" threadname={snap.val().threadname}>{snap.val().threadname}</li>);
                this.forceUpdate();
            }
        }, err =>{
        })
        
    }
  render() {
    return (
        <ul>
            {this.Threads}
        </ul>
    );
  }
}

export default ThreadList;
