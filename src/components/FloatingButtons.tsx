// src/components/FloatingButtons.tsx
import { useState } from "react";
import StandaloneRealEstateChatbot from "./StandaloneRealEstateChatbot";

const FloatingButtons = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 items-end z-50">
        {/* 📞 Call Button */}
        <a
          href="tel:+919876543210"
          className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
            alt="Call"
            className="w-7 h-7"
          />
        </a>

        {/* 🟢 WhatsApp Button */}
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>

        {/* 💬 Chatbot Button */}
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/chat.png"
            alt="Chatbot"
            className="w-7 h-7"
          />
        </button>
      </div>

      {/* Chatbot Container */}
      {showChatbot && (
        <div className="fixed bottom-28 right-6 z-40">
          <StandaloneRealEstateChatbot />
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
