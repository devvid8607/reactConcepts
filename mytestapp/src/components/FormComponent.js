import React, { Component } from "react";

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };

    this.handleUsernameChange = (event) => {
      this.setState({ username: event.target.value });
    };

    this.handleCommentsChange = (event) => {
      this.setState({ comments: event.target.value });
    };

    this.handleTopicChange = (event) => {
      this.setState({ topic: event.target.value });
    };

    this.handleFormSubmit = (event) => {
      alert(
        `${this.state.username} ${this.state.comments} ${this.state.topic}`
      );
      event.preventDefault();
    };
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            type="text"
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <div>
          <button type="submit"> Submit</button>
        </div>
      </form>
    );
  }
}

export default FormComponent;
