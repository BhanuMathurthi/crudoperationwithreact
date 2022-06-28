import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { name, username, email, phone, website } = user;
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:7000/users", user);
    navigate('/')
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your username"
            name="username"
            value={username}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Enter your phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your website"
            name="website"
            value={website}
            onChange={handleChange}
          />{" "}
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
