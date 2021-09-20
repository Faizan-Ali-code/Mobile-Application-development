import React, { Component } from "react";
import { UserItems } from "./Useritems.js";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "octocat",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        html_url: "https://github.com/octocat",
      },
      {
        id: "2",
        login: "octocat",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        html_url: "https://github.com/octocat",
      },
      //   {
      //     id: "3",
      //     login: "octocat",
      //     avatar_url: "https://github.com/images/error/octocat_happy.gif",
      //     html_url: "https://github.com/octocat",
      //   },
    ],
  };
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          //   <div key={user.id}>{user.login}</div>
          <UserItems key={user.id} user={user} />
          //   <Useritems />
        ))}
      </div>
    );
  }
}

export default Users;
