import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id)

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

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:7000/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:7000/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A user</h2>
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
