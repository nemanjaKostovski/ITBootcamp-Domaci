import React from 'react';

const Input = () => {
  return (
    <section className="form">
    <input className="input" placeholder="Enter your full name" type="text"/>
    <input className="input" placeholder="Enter your phone number" type="number"/>
    <button className="input">Submit</button>
    </section>
  );
}

export default Input