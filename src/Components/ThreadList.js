import React, { Component } from 'react';
import Comment from './Comment'
import firebase from '../MyFirebase'


class ThreadList extends Component {
    constructor(props){
        super(props);
        this.Threads = [];
    }
    componentDidMount(){
        const commentRef = firebase.database().ref().child('thread-list');
        var count = 0;
        commentRef.on('child_added', snap =>{
            if(snap.exists()){
                this.Comments.push(<Comment author={snap.val().name} text={snap.val().comment} date={snap.val().time} key={count++} />);
                this.forceUpdate();
            }
        }, err =>{
        })
        
    }
  render() {
    return (
        <h1>Well</h1>
    );
  }
}

export default ThreadList;
