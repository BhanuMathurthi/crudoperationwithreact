import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function User() {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    loadUser();
  }, []);
  

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:7000/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name} </li>
        <li className="list-group-item">name: {user.username} </li>
        <li className="list-group-item">name: {user.email} </li>
        <li className="list-group-item">name: {user.phone} </li>
        <li className="list-group-item">name: {user.website} </li>
      </ul>
    </div>
  );
}
