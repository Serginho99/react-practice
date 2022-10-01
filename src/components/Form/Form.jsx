import React from 'react';
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [users, setUsers] = useState([]);
  const options = { name: setName, phone: setPhone, mail: setMail };
  const onSubmit = e => {
    e.preventDefault();
    const user = { name, phone, mail };
    setUsers([user, ...users]);
  };

  const onChange = ({ target: { name, value } }) => {
    options[name](value);
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <input
        name="phone"
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={onChange}
      />
      <input
        name="mail"
        type="text"
        placeholder="Mail"
        value={mail}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
