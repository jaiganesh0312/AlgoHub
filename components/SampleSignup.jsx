'use client';
import React from 'react';

function SampleSignup() {
  function submitFormHandler(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const u = fd.get('userName');
    const p = fd.get('password');
    console.log(u, p);
  }

  return (
    <form onSubmit={submitFormHandler}>
      <input type="text" name="userName" />
      <input type="password" name="password" />
      <button type="submit">Sign up</button>
    </form>
  );
}

export default SampleSignup;
