import React, { Component } from 'react';
import Comment from './Comment'
import firebase from '../MyFirebase'


class Thread extends Component {
    constructor(props){
        super(props);
        this.Comments = [];
    }
    componentDidMount(){
        const commentRef = firebase.database().ref().child('comment');
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
        <div className="Thread">
           {this.Comments}
        </div>
    );
  }
}

export default Thread;
