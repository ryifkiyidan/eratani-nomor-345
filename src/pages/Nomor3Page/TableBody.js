import React from 'react';
import { Button } from 'react-bootstrap';

function TableBody({ users, currentPage, pageSize, setModalShow, setUserData }) {
  const handleEdit = (user) => {
    setUserData(user);
    setModalShow(true);
  };

  return (
    <tbody>
      {users.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((user, index) => {
        return (
          <tr key={user.id}>
            <td>{(currentPage - 1) * pageSize + index + 1}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td className="place-content-center">
              <Button className="mx-1" variant="outline-success" onClick={() => handleEdit(user)}>
                Edit
              </Button>
              <Button className="mx-1" variant="outline-danger">
                Delete
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
