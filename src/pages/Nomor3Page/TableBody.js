import React from 'react';
import { Button } from 'react-bootstrap';

function List({ setModalShow, user, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td className="place-content-center">
        <Button className="mx-1" variant="outline-success" onClick={() => setModalShow(true)}>
          Edit
        </Button>
        <Button className="mx-1" variant="outline-danger">
          Delete
        </Button>
      </td>
    </tr>
  );
}

function TableBody({ users, currentPage, pageSize, setModalShow }) {
  return (
    <tbody>
      {users.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((user, index) => {
        return <List key={user.id} setModalShow={setModalShow} user={user} index={(currentPage - 1) * pageSize + index} />;
      })}
    </tbody>
  );
}

export default TableBody;
