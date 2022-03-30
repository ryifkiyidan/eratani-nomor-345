import Pagination from 'rc-pagination';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/actions/action4';
import TableBody from './TableBody';
import TableHead from './TableHead';

function Nomor4Page() {
  // @ts-ignore
  const users = useSelector((state) => state.reducer4.users);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container className="pt-3 pb-5">
      <h1 className="mb-3">Nomor 4</h1>
      <h3 className="text-center mb-2">Users</h3>
      {!users || !users.length ? (
        <p className="text-muted">0 entries</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <TableHead />
            <TableBody users={users} currentPage={currentPage} pageSize={pageSize} />
          </Table>
          <div className="d-flex justify-content-between">
            <div className="text-muted">
              {users.length > pageSize ? pageSize * currentPage : users.length} of {users.length} entries
            </div>
            <Pagination pageSize={pageSize} total={users.length} onChange={(e) => setCurrentPage(e)} />
            <div></div>
          </div>
        </>
      )}
    </Container>
  );
}

export default Nomor4Page;
