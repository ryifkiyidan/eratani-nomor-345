import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import ModalComponent from 'components/ModalComponent';
import { IoAdd } from 'react-icons/io5';
import TableBody from './TableBody';
import TableHead from './TableHead';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/actions/action3';
import Pagination from 'rc-pagination';
import './rc-pagination.scss';

function Nomor3Page() {
  // @ts-ignore
  const users = useSelector((state) => state.reducer3.users);
  const dispatch = useDispatch();

  // Table Attributes
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container className="py-5">
      <h1 className="mb-5">Nomor 3</h1>
      <h3 className="text-center mb-3">Users</h3>
      <div className="d-flex justify-content-between mb-3">
        <SearchBar />
        <Button className="tombol" variant="primary" onClick={() => setModalShow(true)}>
          <IoAdd className="my-auto me-1" />
          <div>Add</div>
        </Button>
      </div>
      {!users || !users.length ? (
        <p>No Users</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <TableHead />
            <TableBody users={users} currentPage={currentPage} pageSize={pageSize} setModalShow={setModalShow} />
          </Table>
          <div className="place-content-center">
            <Pagination pageSize={pageSize} total={users.length} onChange={(e) => setCurrentPage(e)} />
          </div>
        </>
      )}
      <ModalComponent show={modalShow} backdrop="static" keyboard={false} onHide={() => setModalShow(false)} />
    </Container>
  );
}

export default Nomor3Page;
