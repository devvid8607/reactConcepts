import React from "react";
import ReactDOM from "react-dom/client";
export class Messages extends React.Component {
  state = {
    showPara: false,
  };

  showPara = () => {
    this.setState({ showPara: !this.state.showPara });
  };
  render() {
    return (
      <React.Fragment>
        <a onClick={this.showPara} href="#">
          Want to buy a new car?
        </a>
        <p
          id="test"
          style={{ display: this.state.showPara ? "block" : "none" }}
        >
          Call +11 22 33 44 now!
        </p>
      </React.Fragment>
    );
  }
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Messages />);
const rootElement = document.getElementById("root");
setTimeout(() => {
  console.log("Before click: " + rootElement.innerHTML);

  document.querySelector("a").click();
  setTimeout(() => {
    console.log("After click: " + rootElement.innerHTML);
  });
});
