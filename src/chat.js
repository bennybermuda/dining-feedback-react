import React from "react";

export default function Chat() {
    return (
        <div class="chat-container">
          <header class="chat-header">
            <h1><i class="fas fa-smile"></i> Dining Feedback</h1>
            <button class="btn">Leave Room</button>
          </header>
          <main class="chat-main">
            <div class="chat-sidebar">
              <h3><i class="fas fa-comments"></i> Room Name:</h3>
              <h2 id="room-name"></h2>
              <h3><i class="fas fa-channels"></i> Channels:</h3>
              <ul id="channels"></ul>
            </div>
            <div class="chat-messages"></div>
          </main>
          <div class="chat-form-container">
            <form id="chat-form">
              <input
                id="msg"
                type="text"
                placeholder="Enter Message"
                required
                autocomplete="off"
              />
              <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
            </form>
          </div>
        </div>
      );
}