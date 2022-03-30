import React from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';

function ModalComponent({ userData = null, ...props }) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{userData ? 'Edit' : 'Add'} User</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form color="success">
          <Row>
            <Col md>
              <FloatingLabel label="First Name" className="mb-3">
                <Form.Control type="text" placeholder={userData ? userData.first_name : 'First Name'} value={userData ? userData.first_name : null} />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel label="Last Name" className="mb-3">
                <Form.Control type="text" placeholder={userData ? userData.last_name : 'Last name'} value={userData ? userData.last_name : null} />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel label="Email Address" className="mb-3">
                <Form.Control type="email" placeholder={userData ? userData.email : 'Email address'} value={userData ? userData.email : null} />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel label="Gender">
                <Form.Select value={userData ? userData.gender : null}>
                  <option>Input gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="success">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
