import React from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';

function ModalComponent({ userData = null, ...props }) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add User</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form color="success">
          <Row>
            <Col md>
              <FloatingLabel label="First Name" className="mb-3">
                <Form.Control type="text" placeholder="First Name" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel label="Last Name" className="mb-3">
                <Form.Control type="text" placeholder="Last Name" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel label="Email Address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel label="Gender">
                <Form.Select>
                  <option>Input gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
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
