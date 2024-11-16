import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Props {
  initialMessage?: string | null;
}

export default function ChatInterface({ initialMessage }: Props) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(() => {
    const initial: Message[] = [
      {
        role: 'assistant',
        content: 'Hi! I can help you find recipes, compare prices, and answer questions about cooking. What would you like to know?'
      }
    ];

    if (initialMessage) {
      initial.push({ role: 'user', content: initialMessage });
      initial.push({ 
        role: 'assistant', 
        content: "I'll help you find some recipes based on your request. Take a look at the suggestions on the right, and feel free to ask me any questions about them!" 
      });
    }

    return initial;
  });
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = { role: 'user', content: message };
    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      // TODO: Implement Groq API call here
      const response = "I'm currently in development, but I'll be able to help you soon!";
      
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-purple-900">Recipe Assistant</h2>
        <p className="text-sm text-gray-600">Ask me anything about recipes and cooking</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.role === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about recipes..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !message.trim()}
            className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
} 