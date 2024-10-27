import React, { useState } from 'react';

const ConversationAPI = () => {
    const [email, setEmail] = useState('');
    const [propertyId, setPropertyId] = useState('');
    const [conversationId, setConversationId] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const [response, setResponse] = useState(null);

    const apiUrl = 'http://localhost:5000'; // Replace with your server URL

    const handleCreateConversation = async () => {
        const result = await fetch(`${apiUrl}/conversations`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, propertyId })
        });
        setResponse(await result.json());
    };

    const handleDeleteConversation = async () => {
        const result = await fetch(`${apiUrl}/conversations/${conversationId}`, { method: 'DELETE' });
        setResponse(await result.json());
    };

    const handleAddMessage = async () => {
        const result = await fetch(`${apiUrl}/conversations/messages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ conversationId, senderEmail, message: messageContent })
        });
        setResponse(await result.json());
    };

    const handleFetchMessages = async () => {
        const result = await fetch(`${apiUrl}/conversations/messages/${conversationId}`);
        setResponse(await result.json());
    };

    return (
        <div className="p-8 max-w-lg mx-auto space-y-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800">Conversation API Test</h2>

            {/* Create Conversation */}
            <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-700">Create Conversation</h3>
                <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Property ID"
                    value={propertyId}
                    onChange={(e) => setPropertyId(e.target.value)}
                />
                <button
                    onClick={handleCreateConversation}
                    className="w-full py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    Create Conversation
                </button>
            </div>

            {/* Delete Conversation */}
            <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-700">Delete Conversation</h3>
                <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Conversation ID"
                    value={conversationId}
                    onChange={(e) => setConversationId(e.target.value)}
                />
                <button
                    onClick={handleDeleteConversation}
                    className="w-full py-2 mt-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                >
                    Delete Conversation
                </button>
            </div>

            {/* Add Message to Conversation */}
            <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-700">Add Message to Conversation</h3>
                <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Conversation ID"
                    value={conversationId}
                    onChange={(e) => setConversationId(e.target.value)}
                />
                <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Sender Email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                />
                <textarea
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Message Content"
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                />
                <button
                    onClick={handleAddMessage}
                    className="w-full py-2 mt-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                >
                    Add Message
                </button>
            </div>

            {/* Fetch Messages by Conversation ID */}
            <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-700">Fetch Messages by Conversation ID</h3>
                <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Conversation ID"
                    value={conversationId}
                    onChange={(e) => setConversationId(e.target.value)}
                />
                <button
                    onClick={handleFetchMessages}
                    className="w-full py-2 mt-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
                >
                    Fetch Messages
                </button>
            </div>

            {/* Response Display */}
            {response && (
                <div className="mt-4 p-4 bg-gray-200 rounded-md">
                    <h3 className="text-md font-medium text-gray-800">Response:</h3>
                    <pre className="mt-2 text-sm text-gray-700">
                        {JSON.stringify(response, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default ConversationAPI;
