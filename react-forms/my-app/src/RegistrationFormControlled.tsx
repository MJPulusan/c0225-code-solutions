import React, { useState, FormEvent } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ username, password });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username: (Controlled)
          <input
            id="username2"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            id="password2"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
