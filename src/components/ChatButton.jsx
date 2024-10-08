// src/ChatButton.js
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { TiMessage } from "react-icons/ti";

const ChatButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button
        className="fixed bottom-0 right-0 m-4 p-4 bg-gray-400 text-white rounded-full shadow-lg"
        onClick={handleButtonClick}
      >
        {showForm? <RxCross1 size={28}/>: <TiMessage size={28}/>}
      </button>
      {showForm && (
        <div className="fixed bottom-20 right-0 m-4 p-4 bg-white rounded-lg shadow-lg">
          <form>
            <input
              type="text"
              placeholder="Your name"
              className="block w-full p-2 mb-2 border border-gray-400"
            />
            <textarea
              placeholder="Your message"
              className="block w-full p-2 mb-2 border border-gray-400"
            />
            <button
              type="submit"
              className="bg-gray-400 text-white p-2 rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatButton;