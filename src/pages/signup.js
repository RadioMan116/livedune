import React from 'react';
import { Helmet } from 'react-helmet';

import SignupForm from '../components/SignupForm';

const Signup = () => (
  <>
    <Helmet>
      <title>Регистрация</title>
      <meta
        name='description'
        content='Nested component'
      />
    </Helmet>
    <SignupForm />
  </>
);

export default Signup;
