import React from "react";

export default class Chat extends React.Component {
//export default function Chat() {
  constructor(props){
    super(props);
    this.state = {
      diningHall: "none",
      currUserType: "none",
      messages: [],
      currChannel: "Announcements",
      numStudents: 0,
      numDAs: 0
    }
  }
  render () {
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
            <ul id="channels"></ul>
          </div>
          <div className="chat-messages">
            <ul id="messages"></ul>
          </div>
        </main>
        <div className="chat-form-container">
          <form id="chat-form">
            <input
              id="msg"
              type="text"
              placeholder="Enter Message"
              required
              autoComplete="off"
            />
            <button className="btn"><i className="fas fa-paper-plane"></i> Send</button>
          </form>
        </div>
      </div>
    );
  }
    
}