import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Signup = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6) {
      setError('Your password should be more than 6 character');
      return
    }

    if (password !== confirmPassword) {
      setError('Your password did not match');
      return
    }
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })
  }
  return (
    <div className='d-flex justify-content-center align-content-center align-items-center pt-5'>
      <Form onSubmit={handleSubmit} className='align-content-center w-25 border-3 rounded-3 shadow-lg p-4 fs-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' />
        </Form.Group>
        <div className='fs-6'>
          Already have an account? <p className='text-text-primary d-inline-block'>Log in</p> <Link to='/login'></Link>
        </div>
        <p className='text-danger fs-6'>{error}</p>
        <div className="d-grid mx-auto mt-4">
          <button className="btn btn-secondary fs-4 fw-bolder" type="submit">Sign Up</button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;