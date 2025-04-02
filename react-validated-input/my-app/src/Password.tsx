import { useState } from 'react';
import { BsXLg, BsCheckLg } from 'react-icons/bs';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  const getValidationMessage = () => {
    if (password.length === 0) {
      return (
        <>
          <BsXLg color="red" />
          <div>A password is required.</div>
        </>
      );
    } else if (password.length < 8) {
      return (
        <>
          <BsXLg color="red" />
          <div>Your password is too short.</div>
        </>
      );
    } else {
      return (
        <>
          <BsCheckLg color="green" />
        </>
      );
    }
  };

  return (
    <>
      <div>
        <label htmlFor="password">Password</label>
      </div>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder=" "
      />
      <div>{getValidationMessage()}</div>
    </>
  );
}
