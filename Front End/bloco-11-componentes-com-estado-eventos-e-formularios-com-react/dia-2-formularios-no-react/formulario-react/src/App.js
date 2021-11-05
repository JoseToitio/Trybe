import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailSubmit: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((previous) => {
      return {emailSubmit: [...previous.emailSubmit, this.state.email]}
    })
  };
  handleEmail({ target }) {
    this.setState({
      email: target.value,
    });
  }
  render() {
    const emailsubmit = this.state.emailSubmit;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="emailSubmit"
          id=""
          placeholder="email"
          onChange={this.handleEmail}
        />
        <button type="submit">Enviar</button>
        <span>{Object.values(emailsubmit).map((email) => (<div key={email}>{email}</div>))}</span>
      </form>
    );
  }
}

export default App;
