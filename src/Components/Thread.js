import React, { Component } from 'react';
import Comment from './Comment'
import firebase from '../MyFirebase'


class Thread extends Component {
    constructor(props){
        super(props);
        this.Comments = [];
    }
    whatever(child, count){
        this.Comments.push(<Comment author={child.val().name} text={child.val().comment} date={child.val().time} key={count++} />);
    }
    componentDidMount(){
        console.log(this.props.thread);
        const commentRef = firebase.database().ref().child('threads').orderByChild('threadname').equalTo(this.props.thread);
        var count = 0;
        commentRef.on('child_added', snap =>{
            snap.child('comment').forEach(this.whatever.bind(this))
                this.forceUpdate();
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
