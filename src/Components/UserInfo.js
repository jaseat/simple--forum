import React, { Component } from 'react';


class UserInfo extends Component {

  render() {
    return (
        <div className="UserInfo">
            <div className="UserInfo-name">
                Name: {this.props.user.name}
            </div>
        </div>
    );
  }
}

export default UserInfo;
