import React from "react";
import "../styles/Contact.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: "",
    isEmpty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: "",
      isEmpty: false
    });
  };

  handleChange = e => {
    if (e.target.value === "") {
      this.setState({
        value: e.target.value,
        isEmpty: false
      });
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: true
      });
    }
  };

  render() {
    return (
      <>
        <div className="contact">
          <form action="" onSubmit={this.handleSubmit}>
            <h3>Napisz do nas</h3>
            <textarea 
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Wpisz wiadomość..."
              name=""
              id=""
              cols="30"
              rows="10"
            />
            <button>Wyślij</button>
          </form>
          <Prompt
            when={this.state.isEmpty} 
            message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę?"
          />
        </div>
      </>
    );
  }
}

export default ContactPage;
