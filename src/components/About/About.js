import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Secret about us</h2>
      <h3>{user?.email}</h3>
    </div>
  );
};

export default About;