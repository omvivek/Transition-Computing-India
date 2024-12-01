// ChatSection.js
import React from "react";
import "../styles/ChatSection.css";

const ChatSection = () => {
    return (
      <div className="chat-section">
        <div className="chat-tabs">
          <button>Conversation</button>
          <button>Address Update</button>
          {/* More tabs */}
        </div>
        <div className="chat-messages">
          <div className="message">
            <p><strong>Rachel Adams</strong> - Received By WhatsApp</p>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          {/* More messages */}
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </div>
    );
  };

export default ChatSection;
