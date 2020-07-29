import React from "react";

export default class Chat extends React.Component {
//export default function Chat() {
  constructor(props){
    super(props);
    this.state = {
      diningHall: this.props.hall,
      currUserType: this.props.usertype,
      messages: {},
      currChannel: "Announcements",
      numStudents: 0,
      numDAs: 0,
      currTextInput: ''
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({currTextInput: e.target.value});
  }
  handleMessageSubmit(e) {
    var message = this.state.currTextInput;
    console.log(message);
    e.preventDefault();
    //e.stopPropagation();
    //e.nativeEvent.stopImmediatePropagation();
    var timestamp = (new Date()).getTime();
    this.state.messages[this.state.currUserType +'-message-' + timestamp] = message;
    this.setState({messages: this.state.messages});
    console.log(this.state.messages);
    this.setState({currTextInput: ''});
  }
  incrementCount() {
    if (this.state.currUserType === 'Student'){
      this.state.numStudents += 1;
      //this.setState({numStudents: this.state.numStudents += 1});
    } else {
      this.state.numDAs += 1;
      //this.setState({numDAs: this.state.numDAs += 1});
    }
  }
  render () {
    this.incrementCount();
    return (
      <div className="chat-container">
        <header className="chat-header">
          <h1><i className="fas fa-smile"></i> Dining Feedback</h1>
          <button className="btn" onClick={this.props.goHome}>Leave Room</button>
        </header>
        <main className="chat-main">
          <div className="chat-sidebar">
            <h3><i className="fas fa-comments"></i> Room Name:</h3>
            <h2 id="room-name">{this.state.diningHall}</h2>
            <h3><i className="fas fa-channels"></i> Channels:</h3>
            <ul id="channels">
              <button className="btn">Announcements</button>
              <button className="btn">Praise</button>
              <button className="btn">Critique</button>
              <button className="btn">Requests</button>
            </ul>
            <h3><i className="fas fa-comments"></i> Current Users:</h3>
            <h2 id="room-name">{this.state.numStudents} students</h2>
            <h2 id="room-name">{this.state.numDAs} DA's</h2>

          </div>
          <div className="chat-messages">
            <ul id="messages">
              yeet
            </ul>
          </div>
        </main>
        <div className="chat-form-container">
          <form id="chat-form" onSubmit={this.handleMessageSubmit}>
            <input
              id="msg"
              type="text"
              placeholder="Enter Message"
              required
              autoComplete="off"
              value={this.state.currTextInput}
              onChange={this.handleInputChange}
            />
            <button type="submit" className="btn"><i className="fas fa-paper-plane"></i> Send</button>
          </form>
        </div>
      </div>
    );
  }
    
}