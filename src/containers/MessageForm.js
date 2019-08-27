import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages"

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  postNewMessage() {
    this.props.postNewMessage(this.state.message);
    this.setState({
      message: ""
    });
    this.props.history.push("/");
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.postNewMessage();
  }

  onChange(evt) {
    evt.preventDefault();
    this.setState({
      message: evt.target.value
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        {
          (this.props.errors.message)
            ? (
              <div className="alert alert-danger">{ this.props.errors }</div>
            )
            : ""
        }
        <input
          type="text"
          className="form-control"
          value={ this.state.message }
          onChange={ this.onChange }
        />
        <button type="submit" className="btn btn-success pull-right">Post my message</button>
      </form>
    );
  }

}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm);