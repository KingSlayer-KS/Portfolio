import React, { useState, useEffect } from 'react';
import './Typerwritter.css'; // Import the CSS for styling

const TypewriterEffect = ({ words, speed, delay }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const currentWord = words[wordIndex];

    const type = () => {
      setDisplayedText(currentWord.slice(0, charIndex));
      charIndex++;

      if (charIndex > currentWord.length) {
        setTimeout(() => {
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setDisplayedText('');
        }, delay);
      } else {
        setTimeout(type, speed);
      }
    };

    type();

    return () => {
      setDisplayedText('');
    };
  }, [wordIndex, words, speed, delay]);

  return (
    <span>
      {displayedText}
      <span className="typewriter-cursor"></span>
    </span>
  );
};

export default TypewriterEffect;
