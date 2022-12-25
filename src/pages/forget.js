import React from 'react';
import { Helmet } from 'react-helmet';

import ForgetForm from '../components/ForgetForm';

const Forget = () => (
  <>
    <Helmet>
      <title>Восстановление пароля</title>
      <meta
        name='description'
        content='Nested component'
      />
    </Helmet>
    <ForgetForm />
  </>
);

export default Forget;
