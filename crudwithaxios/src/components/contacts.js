import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Contacts() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:7000/users");
    setUsers(result.data);
    setLoading(true);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:7000/users/${id}`);
    loadUser();
  };

  return (
    <center>
      <h2 className="text-success my-3">
        {" "}
        <strong>User Details</strong>{" "}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        className="align-items-center justify-content-center"
      >
        {loading &&
          users &&
          users.map((user, index) => (
            <div key={index + 1} className="row">
              <div className="col-md">
                <div style={{ flex: 1, width: "28rem" }} className="card m-3">
                  <div className="card-body bg-secondary text-white">
                    <h5 className="card-title mb-4">
                      <strong>
                        User&nbsp;
                        {user.id}
                      </strong>
                    </h5>
                    <p className="card-text">
                      <span className="text-warning">Name: </span>
                      {user.name}
                    </p>
                    <p className="card-text">
                      <span className="text-warning">Username: </span>
                      {user.username}
                    </p>
                    <p className="card-text">
                      <span className="text-warning">Email: </span>
                      {user.email}
                    </p>
                    <p className="card-text">
                      <span className="text-warning">Phone: </span>
                      {user.phone}
                    </p>
                    <p className="card-text">
                      <span className="text-warning">Website: </span>
                      {user.website}
                    </p>
                    <p className="card-text">
                      <span className="text-warning">Company: </span>
                      {user.company.name}
                    </p>
                    <div className="row">
                      <label
                        style={{ fontSize: "17px", fontWeight: 600 }}
                        className="mb-2"
                      >
                        {" "}
                        <span className="text-warning">Address:</span>
                      </label>
                      <div className="col-md-6">
                        <p className="card-text">
                          <span className="text-warning">City: </span>
                          {user.address.city}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="card-text">
                          <span className="text-warning">Street: </span>
                          {user.address.street}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="card-text my-2">
                          <span className="text-warning">lat: </span>
                          {user.address.geo.lat}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="card-text my-2">
                          <span className="text-warning">lng: </span>
                          {user.address.geo.lng}
                        </p>
                      </div>
                    </div>
                    <div className="btn-group my-3">
                      <Link
                        to={`/viewuser/${user.id}`}
                        className="btn btn-primary m-2"
                      >
                        {" "}
                        View{" "}
                      </Link>{" "}
                      <Link
                        to={`/edit/${user.id}`}
                        className="btn btn-success m-2"
                      >
                        {" "}
                        Update{" "}
                      </Link>{" "}
                      <Link
                        to=""
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                        className="btn btn-danger m-2"
                      >
                        {" "}
                        Delete{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </center>
  );
}
