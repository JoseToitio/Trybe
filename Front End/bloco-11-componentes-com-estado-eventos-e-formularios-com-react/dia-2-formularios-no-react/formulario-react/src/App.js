import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };
  handleEmail({ target }) {
    this.setState({
      email: target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="email"
          id=""
          placeholder="email"
          onChange={this.handleEmail}
        />
        <button type="submit">Enviar</button>
        <span>{this.state.email}</span>
      </form>
    );
  }
}

export default App;
