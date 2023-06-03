import React, { useEffect, useState } from 'react';
import style from './CartForm.module.css';

function CartForm({ setUserInformation, clearForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  }, [clearForm]);

  useEffect(() => {
    setUserInformation({
      name: name,
      email: email,
      phone: phone,
      address: address,
    });
  }, [name, email, phone, address]);

  return (
    <form className={`${style.window} ${style.inputs}`}>
      <div className={style['form-input']}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className={style['form-input']}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className={style['form-input']}>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div className={style['form-input']}>
        <label htmlFor="address">Address:</label>
        <input
          type="address"
          id="address"
          name="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
    </form>
  );
}

export default CartForm;
