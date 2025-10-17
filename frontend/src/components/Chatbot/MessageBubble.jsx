import React from 'react';

const MessageBubble = ({ message, sender }) => {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`
          px-4 py-2 rounded-xl max-w-xs sm:max-w-sm md:max-w-md
          ${isUser ? 'bg-[#551B32] text-white' : 'bg-[#603D4B] text-white'}
        `}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageBubble;
