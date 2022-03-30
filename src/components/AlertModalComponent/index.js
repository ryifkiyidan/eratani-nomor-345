import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function AlertModalComponent({ userData = null, ...props }) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>The user {userData ? <code>{userData.first_name + ' ' + userData.last_name}</code> : 'User'} will be deleted immediately.</h4>
        <p>Are you sure want to delete this user?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="danger">Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertModalComponent;
