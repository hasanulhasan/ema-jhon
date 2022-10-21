import React from 'react';
import Form from 'react-bootstrap/Form';

const Login = () => {
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
          <Form.Text className="text-muted fs-6">
            Forget Password?
          </Form.Text>
        </Form.Group>
        <div className="d-grid mx-auto mt-4">
          <button class="btn btn-secondary fs-4 fw-bolder" type="button">Login</button>
        </div>
      </Form>
    </div>
  );
};

export default Login;