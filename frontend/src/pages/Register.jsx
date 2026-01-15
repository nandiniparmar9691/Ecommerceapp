
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({});

  const register = async () => {
    await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    window.location.href = "/";
  };

  return (
    <>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={register}>Register</button>
    </>
  );
}