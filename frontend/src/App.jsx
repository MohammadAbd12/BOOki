// src/App.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <ToastContainer />
      <Container className="my-2 flex-grow-1">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
