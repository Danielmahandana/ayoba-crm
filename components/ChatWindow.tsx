import React, { useState, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'customer';
  timestamp: string;
}

interface ChatWindowProps {
  conversationId: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ conversationId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  // Mock fetch initial messages
  useEffect(() => {
    const initialMessages: Message[] = [
      { id: '1', text: 'Hello!', sender: 'customer', timestamp: '10:30 AM' },
      { id: '2', text: 'Hi there! How can I help you today?', sender: 'user', timestamp: '10:31 AM' },
    ];
    setMessages(initialMessages);
  }, [conversationId]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const messageToSend: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };

    // Add the message to the local state
    setMessages((prevMessages) => [...prevMessages, messageToSend]);

    // Prepare the payload for the API request
    const raw = JSON.stringify({
      message: { type: 'text', text: newMessage },
      msisdns: ['+27681176544'] // Replace with actual recipient's MSISDN
    });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: raw,
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://api.chenosis.io/ayoba/com/v1/business/message", requestOptions);
      const result = await response.text();
      console.log('Message sent:', result);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setNewMessage('');
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-100 p-4 border-b">
        <h2 className="text-xl font-semibold">Chat with Customer</h2>
      </div>
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              <p>{message.text}</p>
              <span className="text-xs text-gray-500 block mt-1">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;