import React, { useEffect, useState } from 'react';
import './Massage.css';

const sequences = {
  top: ['Welcome to SportA', 'Login Yourself'],
  left: ['Create Room', 'Fill Data & Add Games', 'Share Required Data to Contestant'],
  right: ['Join Room', 'Fill Data of Room', 'Register Yourself in Any Games'],
};

const SequenceText = ({ messages, delayBetween = 2700 }) => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (index < messages.length - 1) {
      const timeout = setTimeout(() => {
        setAnimate(false);
        setTimeout(() => {
          setIndex(i => i + 1);
          setAnimate(true);
        }, 600); // Wait for fade-out
      }, delayBetween);
      return () => clearTimeout(timeout);
    }
  }, [index, messages.length, delayBetween]);

  return (
    <div className={`fade-text ${animate ? 'fade-in-up' : 'fade-out-up'}`}>
      {messages[index]}
    </div>
  );
};

const Message = () => {
  return (
    <div className="message-container">
      <div className="top-banner">
        <SequenceText messages={sequences.top} />
      </div>

      <div className="bottom-section">
        <div className="left-block">
          <SequenceText messages={sequences.left} />
        </div>
        <div className="right-block">
          <SequenceText messages={sequences.right} />
        </div>
      </div>
    </div>
  );
};

export default Message;
