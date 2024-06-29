'use client';

import { signIn } from "next-auth/react";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log('Email:', email);
    console.log('Password:', password);
    signIn('credentials', { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="border p-2" type="email" name="email" placeholder="Enter your email" />
      <input className="border p-2" type="password" name="password" placeholder="Enter your password" />
      <button className="border p-2" type="submit">Login</button>
    </form>
  );
}
