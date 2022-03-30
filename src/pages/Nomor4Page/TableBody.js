import React from 'react';

function TableBody({ users, currentPage, pageSize }) {
  return (
    <tbody>
      {users.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((user, index) => {
        return (
          <tr key={user.id}>
            <td>{(currentPage - 1) * pageSize + index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
