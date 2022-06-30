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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:7000/users`, user);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 my-4">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="tel"
            className="form-control form-control-lg"
            placeholder="Enter your phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your website"
            name="website"
            value={user.website}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your company name"
            name="company"
            value={user.company.name}
            onChange={(e) => {
              setUser({
                ...user,
                company: {
                  ...user.company,
                  name: e.target.value,
                },
              });
            }}
          />{" "}
          <br />
          <div className="row">
            <label className="mb-2 fs-5">
              {" "}
              <strong>Address:</strong>{" "}
            </label>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your city"
                name="city"
                value={user.address.city}
                onChange={(e) => {
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      city: e.target.value,
                    },
                  });
                }}
              />
              &nbsp;
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your street"
                name="street"
                value={user.address.street}
                onChange={(e) => {
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      street: e.target.value,
                    },
                  });
                }}
              />{" "}
              &nbsp;
            </div>
          </div>
          <div className="row">
            <label className="mb-2 fs-5">
              {" "}
              <strong>Geolocation:</strong>{" "}
            </label>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="lat"
                name="lat"
                value={user.address.geo.lat}
                onChange={(e) => {
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      geo: {
                        ...user.address.geo,
                        lat: e.target.value,
                      },
                    },
                  });
                }}
              />
              &nbsp;
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="lng."
                name="street"
                value={user.address.geo.lng}
                onChange={(e) => {
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      geo: {
                        ...user.address.geo,
                        lng: e.target.value,
                      },
                    },
                  });
                }}
              />{" "}
              &nbsp;
            </div>
          </div>
          <button className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}
