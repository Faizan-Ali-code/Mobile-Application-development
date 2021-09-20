import React, { Component } from "react";

export class UserItems extends Component {
  //   state = {
  //     id: "1",
  //     login: "octocat",
  //     avatar_url: "https://github.com/images/error/octocat_happy.gif",
  //     html_url: "https://github.com/octocat",
  //   };
  render() {
    // const { id, login, avatar_url, html_url } = this.state;
    const { id, login, avatar_url, html_url } = this.props.user;
    return (
      <div className='UserDiv'>
        <img src={avatar_url} alt='profile pic' className='userImg' />
        <h3>{id}</h3>
        <p>{login}</p>
        <a href={html_url}>Profile</a>
      </div>
    );
  }
}
