import React, { useEffect, useState } from 'react';
import { Button, Container, Form, InputGroup, Table } from 'react-bootstrap';
import ModalComponent from 'components/ModalComponent';
import { IoAdd, IoSearch } from 'react-icons/io5';
import TableBody from './TableBody';
import TableHead from './TableHead';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/actions/action3';
import Pagination from 'rc-pagination';
import './rc-pagination.scss';
import AlertModalComponent from 'components/AlertModalComponent';
import searchFilter from './searchAlgorithm';

function Nomor3Page() {
  // @ts-ignore
  const users = useSelector((state) => state.reducer3.users);
  const [usersData, setUsersData] = useState(users);
  const dispatch = useDispatch();

  // Table Attributes
  const [userData, setUserData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [modalShow, setModalShow] = useState(false);
  const [alertModalShow, setAlertModalShow] = useState(false);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setUsersData(users);
    setKeyword('');
  }, [users]);

  const handleSearch = (e) => {
    const usersTemp = users;
    setKeyword(e.target.value);
    if (keyword) {
      setUsersData(searchFilter(usersTemp, keyword));
    } else {
      setUsersData(users);
    }
  };

  return (
    <Container className="pt-3 pb-5">
      <h1 className="mb-3">Nomor 3</h1>
      <h3 className="text-center mb-2">Users</h3>
      <div className="d-flex justify-content-between mb-3">
        <Form>
          <InputGroup>
            <Form.Control placeholder="Search all column" value={keyword} onChange={(e) => handleSearch(e)} />
            <InputGroup.Text>
              <IoSearch className="my-auto" />
            </InputGroup.Text>
          </InputGroup>
        </Form>
        <Button className="tombol" variant="primary" onClick={() => setModalShow(true)}>
          <IoAdd className="my-auto me-1" />
          <div>Add</div>
        </Button>
      </div>
      {!usersData || !usersData.length ? (
        <p className="text-muted">0 entries</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <TableHead />
            <TableBody users={usersData} currentPage={currentPage} pageSize={pageSize} setModalShow={setModalShow} setAlertModalShow={setAlertModalShow} setUserData={setUserData} />
          </Table>
          <div className="d-flex justify-content-between">
            <div className="text-muted">
              {usersData.length > pageSize ? pageSize * currentPage : usersData.length} of {usersData.length} entries
            </div>
            <Pagination pageSize={pageSize} total={usersData.length} onChange={(e) => setCurrentPage(e)} />
            <div>
              <Form.Select size="sm" onChange={(e) => setPageSize(parseInt(e.target.value))}>
                <option value="10">10 entries</option>
                <option value="25">25 entries</option>
                <option value="50">50 entries</option>
                <option value="100">100 entries</option>
              </Form.Select>
            </div>
          </div>
        </>
      )}
      <ModalComponent
        userData={userData}
        show={modalShow}
        backdrop="static"
        keyboard={false}
        onHide={() => {
          setUserData(null);
          setModalShow(false);
        }}
      />
      <AlertModalComponent
        userData={userData}
        show={alertModalShow}
        backdrop="static"
        keyboard={false}
        onHide={() => {
          setUserData(null);
          setAlertModalShow(false);
        }}
      />
    </Container>
  );
}

export default Nomor3Page;
