import React, { FormEvent } from 'react';
import './App.css';

export default function RegistrationFormUncontrolled() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username: (Uncontrolled)
          <input id="username1" type="text"></input>
        </label>

        <label>
          Password:
          <input id="password1" type="password"></input>
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
