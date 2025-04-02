import React from 'react';

import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

export default function App() {
  return (
    <div>
      <RegistrationFormUncontrolled />
      <RegistrationFormControlled />
    </div>
  );
}
