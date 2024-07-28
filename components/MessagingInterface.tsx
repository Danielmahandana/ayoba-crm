// components/MessagingInterface.tsx

import React, { useState, useEffect } from 'react';
import { sendMessage, getCustomerProfile } from '../lib/ayobaApi';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'customer';
  timestamp: Date;
}

const MessagingInterface: React.FC<{ customerId: string }> = ({ customerId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    // Fetch customer profile
    getCustomerProfile(customerId)
      .then((profile) => {
        setCustomerName(profile.name);
      })
      .catch(console.error);

    // TODO: Fetch previous messages from Ayoba API
  }, [customerId]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    try {
      await sendMessage(customerId, newMessage);
      const sentMessage: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, sentMessage]);
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-4">Chat with {customerName}</h3>
      <div className="flex-grow overflow-y-auto mb-4 space-y-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-2 rounded-lg ${
              message.sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
            }`}
          >
            <p>{message.text}</p>
            <small className="text-gray-500">
              {message.timestamp.toLocaleTimeString()}
            </small>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow rounded-l-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MessagingInterface;