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
    address: {
      city: "",
      street: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
    },
  });
  const {
    address: {
      geo: { lat, lng },
    },
  } = user;

  const { name, username, email, phone, website } = user;
  const {
    address: { city, street },
  } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:7000/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link to="/" className="btn btn-success">
        Back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {name} </li>
        <li className="list-group-item">username: {username} </li>
        <li className="list-group-item">email: {email} </li>
        <li className="list-group-item">phone: {phone} </li>
        <li className="list-group-item">website: {website} </li>
        <li className="list-group-item">company: {user.company.name} </li>
        <div className="row">
          <h2 style={{ fontSize: "16px" }} className="my-2">
            Address:
          </h2>
          <div className="col-md-6">
            <li className="list-group-item">city: {city} </li>
          </div>
          <div className="col-md-6">
            <li className="list-group-item">street: {street} </li>
          </div>
          <div className="col-md-6">
            <li className="list-group-item my-2">lat: {lat} </li>
          </div>
          <div className="col-md-6">
            <li className="list-group-item my-2">lng: {lng} </li>
          </div>
        </div>
      </ul>
    </div>
  );
}
