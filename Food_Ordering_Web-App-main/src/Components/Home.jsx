import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:8080/getAllUser");
    setUsers(result.data);
    console.log(result);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/deleteUserById/${id}`);
    loadUser();
  };

  return (
    <>
     
      <div className="container">
        <div className=" py-4">
          <table class="table border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Phone</th>
                <th scope="col">Modify</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link
                      className="btn btn-outline-success mx-2"
                      to={`/viewUser/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-success mx-2"
                      to={`/editUser/${user.id}`}
                    >
                      Update
                    </Link>

                    <Link
                      className="btn btn-outline-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
