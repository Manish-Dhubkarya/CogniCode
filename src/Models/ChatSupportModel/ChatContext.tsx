import React, { createContext, useState, useEffect } from 'react';

interface Message {
  text: string;
  type: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatContextType {
  isMainScreenOpen: boolean;
  setMainScreenOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isChatOpen: boolean;
  setChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isHistoryOpen: boolean;
  setHistoryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isSM: boolean;
}

export const ChatContext = createContext<ChatContextType>({
  isMainScreenOpen: false,
  setMainScreenOpen: () => {},
  isChatOpen: false,
  setChatOpen: () => {},
  isHistoryOpen: false,
  setHistoryOpen: () => {},
  messages: [],
  setMessages: () => {},
  isSM: false,
});

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMainScreenOpen, setMainScreenOpen] = useState<boolean>(
    () => JSON.parse(localStorage.getItem('isMainScreenOpen') || 'true')
  );
  const [isChatOpen, setChatOpen] = useState<boolean>(
    () => JSON.parse(localStorage.getItem('isChatOpen') || 'false')
  );
  const [isHistoryOpen, setHistoryOpen] = useState<boolean>(
    () => JSON.parse(localStorage.getItem('isHistoryOpen') || 'false')
  );
  const [messages, setMessages] = useState<Message[]>(() => {
    const storedMessages = localStorage.getItem('messages');
    return storedMessages
      ? JSON.parse(storedMessages, (key, value) =>
          key === 'timestamp' ? new Date(value) : value
        )
      : [];
  });
  const [isSM, setIsSM] = useState<boolean>(window.innerWidth <= 415);

  useEffect(() => {
    localStorage.setItem('isMainScreenOpen', JSON.stringify(isMainScreenOpen));
    localStorage.setItem('isChatOpen', JSON.stringify(isChatOpen));
    localStorage.setItem('isHistoryOpen', JSON.stringify(isHistoryOpen));
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [isMainScreenOpen, isChatOpen, isHistoryOpen, messages]);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSM(window.innerWidth <= 415);
    };
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        isMainScreenOpen,
        setMainScreenOpen,
        isChatOpen,
        setChatOpen,
        isHistoryOpen,
        setHistoryOpen,
        messages,
        setMessages,
        isSM,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};