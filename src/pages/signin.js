import React from 'react';
import { Helmet } from 'react-helmet';

import SigninForm from '../components/SigninForm';

const Signin = () => (
  <>
    <Helmet>
      <title>Авторизация</title>
      <meta
        name='description'
        content='Nested component'
      />
    </Helmet>
    <SigninForm />
  </>
);

export default Signin;
