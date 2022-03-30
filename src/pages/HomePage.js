import React from 'react';
import { Container } from 'react-bootstrap';

function HomePage() {
  return (
    <Container className="py-5">
      <h1 className="mb-3">Home</h1>
      <code className="text-2">Aplikasi ini merupakan jawaban dari nomor 3, 4, dan 5</code>
      <br />
      <code className="text-2"> Tiap nomor memiliki halaman masing-masing yang dapat diakses melalui navbar diatas</code>
    </Container>
  );
}

export default HomePage;
