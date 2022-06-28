import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:7000/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:7000/users/${id}`);
    loadUser();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Emails</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/user/${user.id}`}
                    className="btn btn-secondary m-2"
                  >
                    {" "}
                    View{" "}
                  </Link>{" "}
                  &nbsp;
                  <Link
                    to={`/edituser/${user.id}`}
                    className="btn btn-primary m-2"
                  >
                    {" "}
                    Update{" "}
                  </Link>{" "}
                  &nbsp;
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
