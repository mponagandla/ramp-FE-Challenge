import React, { useState, useEffect } from 'react';

const FlagComponent = () => {
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState('');
  const [displayedFlag, setDisplayedFlag] = useState('');

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const response = await fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/656e64');
        const data = await response.text();
        setFlag(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the flag:', error);
        setLoading(false);
      }
    };

    fetchFlag();
  }, []);

  useEffect(() => {
    if (!loading && flag) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedFlag((prev) => prev + flag[index]);
        index++;
        if (index === flag.length) {
          clearInterval(interval);
        }
      }, 500);
    }
  }, [loading, flag]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {displayedFlag.split('').map((char, index) => (
        <li key={index}>{char}</li>
      ))}
    </ul>
  );
};

export default FlagComponent;