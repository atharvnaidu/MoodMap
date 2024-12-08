import React, { useState } from 'react';

const MoodMap = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <h2>Enter Instagram Username</h2>
      
      {/* Input field for username */}
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={handleInputChange}
      />
      
      {/* Display entered username */}
      {username && <p>Entered Username: {username}</p>}
    </div>
  );
};

export default MoodMap;
