// src/components/WhatsAppChat.js
import React from 'react';
import 'react-whatsapp-widget/dist/index.css';
import { WhatsAppWidget } from 'react-whatsapp-widget';

const WhatsAppChat = () => {
  return (
    <div>
      {/* WhatsAppWidget is a component that renders the floating button */}
      <WhatsAppWidget
        phoneNumber="+971 56 924 2326" // Replace with your WhatsApp number including the country code
        message="Hello" // Default message to appear in the chat input
        companyName="BriskBold AI & Automation"
        textReplyTime="Usually replies in a few minutes"
      />
    </div>
  );
};

export default WhatsAppChat;
