import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';
import ModalComponent from 'components/ModalComponent';
import { IoAdd } from 'react-icons/io5';
import TableBody from './TableBody';
import TableHead from './TableHead';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/actions/action3';
import Pagination from 'rc-pagination';
import './rc-pagination.scss';
import AlertModalComponent from 'components/AlertModalComponent';

function Nomor3Page() {
  // @ts-ignore
  const users = useSelector((state) => state.reducer3.users);
  const dispatch = useDispatch();

  // Table Attributes
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [modalShow, setModalShow] = useState(false);
  const [alertModalShow, setAlertModalShow] = useState(false);
  const [userData, setUserData] = useState(null);

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
            <TableBody users={users} currentPage={currentPage} pageSize={pageSize} setModalShow={setModalShow} setAlertModalShow={setAlertModalShow} setUserData={setUserData} />
          </Table>
          <div className="d-flex justify-content-between">
            <div>
              <Form.Select size="sm" onChange={(e) => setPageSize(parseInt(e.target.value))}>
                <option value="10">10 entries</option>
                <option value="25">25 entries</option>
                <option value="50">50 entries</option>
                <option value="100">100 entries</option>
              </Form.Select>
            </div>
            <Pagination pageSize={pageSize} total={users.length} onChange={(e) => setCurrentPage(e)} />
            <div></div>
          </div>
        </>
      )}
      <ModalComponent
        userData={userData}
        show={modalShow}
        backdrop="static"
        keyboard={true}
        onHide={() => {
          setUserData(null);
          setModalShow(false);
        }}
      />
      <AlertModalComponent
        userData={userData}
        show={alertModalShow}
        onHide={() => {
          setUserData(null);
          setAlertModalShow(false);
        }}
      />
    </Container>
  );
}

export default Nomor3Page;
