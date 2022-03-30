import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { IoSearch } from 'react-icons/io5';

function SearchBar() {
  return (
    <Form>
      <InputGroup>
        <Form.Control placeholder="Search all column" />
        <InputGroup.Text>
          <IoSearch className="my-auto" />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
