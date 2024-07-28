import React, { useState } from 'react';
import Layout from '../components/Layout';
import ChatWindow from '../components/ChatWindow';

const Messaging: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>('default-conversation-id');

  return (
    <Layout>
      <div className="h-[calc(100vh-64px)] flex">
        <div className="w-2/3">
          {selectedConversation ? (
            <ChatWindow conversationId={selectedConversation} />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select a conversation to start messaging
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Messaging;
