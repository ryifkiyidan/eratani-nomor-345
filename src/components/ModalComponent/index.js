import React, { useEffect, useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postUser, updateUser } from 'redux/actions/action3';

function ModalComponent({ userData = null, ...props }) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    if (userData !== null) {
      setFirstName(userData.first_name);
      setLastName(userData.last_name);
      setEmailAddress(userData.email);
      setGender(userData.gender);
    } else {
      setFirstName('');
      setLastName('');
      setEmailAddress('');
      setGender('');
    }
  }, [userData]);

  const cancelModal = () => {
    setFirstName('');
    setLastName('');
    setEmailAddress('');
    setGender('');
    props.onHide();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      id: userData ? userData.id : Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
      first_name: firstName,
      last_name: lastName,
      email: emailAddress,
      gender: gender,
    };
    userData ? dispatch(updateUser(user)) : dispatch(postUser(user));
    cancelModal();
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{userData ? 'Edit' : 'Add'} User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col md>
              <FloatingLabel label="First Name" className="mb-3">
                <Form.Control type="text" placeholder={userData ? userData.first_name : 'First Name'} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel label="Last Name" className="mb-3">
                <Form.Control type="text" placeholder={userData ? userData.last_name : 'Last name'} value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel label="Email Address" className="mb-3">
                <Form.Control type="email" placeholder={userData ? userData.email : 'Email address'} value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel label="Gender">
                <Form.Select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option>Input gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={() => cancelModal()}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalComponent;
