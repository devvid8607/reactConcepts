import axios from "axios";
import React, { Component } from "react";

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      title: "",
      body: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userid"
              value={this.state.userid}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
