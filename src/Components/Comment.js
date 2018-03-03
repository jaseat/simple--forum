import React, { Component } from 'react';
import UserInfo from './UserInfo'


class Comment extends Component {

    parseDate(){
        var date = new Date(this.props.date);
        return date.toLocaleString();
    }

  render() {
      var author = {
          name: this.props.author
      }
    return (
        <div className="Comment-container">
            <div className="Comment">
                <UserInfo user={author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {this.parseDate()}
                </div>
            </div>
        </div>
    );
  }
}

export default Comment;
