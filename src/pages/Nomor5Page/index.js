import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postUser } from 'redux/actions/action5';
import AlertComponent from './AlertComponent';

function Nomor5Page() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: firstName + lastName,
      email: emailAddress,
      gender: gender,
      status: status,
    };
    dispatch(postUser(user));
    setFirstName('');
    setLastName('');
    setEmailAddress('');
    setGender('');
    setStatus('');
    setShow(true);
  };

  return (
    <Container className="pt-3 pb-5">
      <h1 className="mb-3">Nomor 5</h1>
      <h3 className="text-center mb-5">Register User</h3>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Container className="p-5 bg-light" style={{ borderRadius: '1rem' }}>
            <AlertComponent show={show} setShow={setShow} />
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md>
                  <FloatingLabel label="First Name" className="mb-3">
                    <Form.Control type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel label="Last Name" className="mb-3">
                    <Form.Control type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col md>
                  <FloatingLabel label="Email Address" className="mb-3">
                    <Form.Control type="email" placeholder="Email address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col md>
                  <FloatingLabel label="Gender" className="mb-3">
                    <Form.Select value={gender} onChange={(e) => setGender(e.target.value)} required>
                      <option>Input gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel label="Status" className="mb-3">
                    <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} required>
                      <option>Input status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>

              <div className="d-grid gap-2">
                <Button className="mt-4" variant="primary" size="lg" type="submit">
                  Register
                </Button>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Nomor5Page;
