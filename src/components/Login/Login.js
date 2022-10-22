import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate('/')
      })
      .catch(error => {
        console.error(error);
      })

  }

  return (
    <div className='d-flex justify-content-center align-content-center align-items-center pt-5'>
      <Form onSubmit={handleLogIn} className='align-content-center w-25 border-3 rounded-3 shadow-lg p-4 fs-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' />
          <Form.Text className="text-muted fs-6">
            Forget Password?
          </Form.Text>
        </Form.Group>
        <div className="d-grid mx-auto mt-4">
          <button className="btn btn-secondary fs-4 fw-bolder" type="submit">Login</button>
        </div>
      </Form>
    </div>
  );
};

export default Login;