import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to KamFung</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
