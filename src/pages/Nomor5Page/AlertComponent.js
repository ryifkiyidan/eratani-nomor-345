import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertComponent({ show, setShow }) {
  return (
    <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
      <b>Register success</b>
    </Alert>
  );
}

export default AlertComponent;
