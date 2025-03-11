import React, { useState } from 'react';

const Sample = () => {
  const [text, setText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    setText('Iam here');
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
      <p>{text}</p>
    </div>
  );
};

export default Sample;  
