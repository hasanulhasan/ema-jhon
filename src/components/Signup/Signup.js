import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='d-flex justify-content-center align-content-center align-items-center pt-5'>
      <Form className='align-content-center w-25 border-3 rounded-3 shadow-lg p-4 fs-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <div className='fs-6'>
          Already have an account? <Link to='/login'>Log in</Link>
        </div>
        <div className="d-grid mx-auto mt-4">
          <button class="btn btn-secondary fs-4 fw-bolder" type="button">Sign Up</button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;