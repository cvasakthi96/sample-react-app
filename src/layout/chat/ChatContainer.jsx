import React, { useState } from 'react';
import './ChatContainer.css';
import Chat from './Chat';

export default function ChatContainer(props) {
  return (
    <div className="chat__Container">
      <Chat Id="chat1" />
    </div>
  );
}
